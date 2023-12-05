import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import crypto from 'crypto'

import { OrderModel } from '../db/order';
import { CartModel } from '../db/cart';
import { UserModel } from '../db/users';
import { CourseModel } from '../db/courses';

import { RequestWithJWT } from '../middlewares/index';

import { CoreAPI, MidtransResponse } from "../db/midtrans";
import { paymentRequestPayloads } from '../helpers/midtrans';
import { channels } from '../helpers/midtrans-channels';

import { CartRequest } from '../controllers/cart';
import { CartSummary } from '../helpers/cart';

import { StatusCodes } from 'http-status-codes';
import { apiResponse, badRequestResponse, notFoundResponse } from '../helpers/api-response';

import { CourseById } from './courses';
import { CourseDocument } from '../db/courses';

interface CourseRequest extends express.Request {
    body: {
        CourseDocument: CourseDocument
    }
}

const updateOrder = async (order: any, response: any, t: any) => {
    let channelName = null;
    let virtualNumber = null;
    let actions = null;

    if (response.va_numbers) {                                  // BRI BCA BNI
        channelName = response.va_numbers[0].bank;
        virtualNumber = response.va_numbers[0].va_number;
    }
    
    if (response.bill_key) channelName = 'mandiri';             // mandiri
    
    if (response.permata_va_number) channelName = 'permata';    // permata bank
    
    if (response.actions) {                                     // gopay
        channelName = 'gopay';
        actions = response.actions;
    }
    
    if (response.store) channelName = response.store;        // over the counter

    await OrderModel.findByIdAndUpdate(order._id, {
        payment_type: response.payment_type,
        channel_name: channelName,
        virtual_number: virtualNumber,
        permata_va_number: response.permata_va_number ?? null,
        bill_key: response.bill_key ?? null,
        biller_code: response.biller_code ?? null,
        actions,
        payment_code: response.payment_code ?? null,
        status_code: response.status_code,
        transaction_time: response.transaction_time,
    }, { transaction: t })
};

const midtransResponse = async (data: any, t: any) => {
    await MidtransResponse.create({     
        order_id: data.order_id,
        bank: data.va_numbers ? data.va_numbers[0].bank : null,
        va_number: data.va_numbers ? data.va_numbers[0].va_number : null,
        payment_type: data.payment_type ?? null,
        store: data.store ?? null,
        permata_va_number: data.permata_va_number ?? null,
        status_code: data.status_code ?? null,
        status_message: data.status_message ?? null,
        transaction_id: data.transaction_id ?? null,
        merchant_id: data.merchant_id ?? null,
        gross_amount: data.gross_amount ?? null,
        currency: data.currency ?? null,
        transaction_time: data.transaction_time ?? null,
        transaction_status: data.transaction_status ?? null,
        fraud_status: data.fraud_status ?? null,
        bill_key: data.bill_key ?? null,
        biller_code: data.biller_code ?? null,
        payment_code: data.payment_code ?? null,
        signature_key: data.signature_key ?? null,
        acquirer: data.acquirer ?? null,
        settlement_time: data.settlement_time ?? null,
        approval_code: data.approval_code ?? null,
        actions: data.actions ?? null,
        response_body: data,
    }, { transaction: t });
};

// get courseId based on './courses' sama nambahin courses yang udah dibeli ke 'User' collection (mongoDB)
// user: RequestWithJWT (?)
const successPurchaseCourse = async (req: CourseRequest, user: RequestWithJWT) => {
    try {
        const courseId = await CourseById(req.params.id)
        await UserModel.findByIdAndUpdate(user.userId, { 
            $addToSet: {
                courses: {
                    $each: courseId
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const orderStatusHandling = async (order: any, user: any, notification: any) => {
    try {
        if (notification.transaction_status === 'capture') {
            if (notification.fraud_status === 'challenge') {
                await OrderModel.findByIdAndUpdate(order._id, {
                    status: 'challenge',
                    status_code: notification.status_code,
                })
            } 
            else if (notification.fraud_status === 'accept') {
                await successPurchaseCourse(order, user)
                await OrderModel.findByIdAndUpdate(order._id, {
                    status: 'success',
                    status_code: notification.status_code,
                    paid_at: notification.settlement_time,
                });
    
                // send email (belum)
            }
            else if (notification.transaction_status === 'settlement') {
                await successPurchaseCourse(order, user);
                await OrderModel.findByIdAndUpdate(order._id, {
                    status: 'success',
                    status_code: notification.status_code,
                    paid_at: notification.settlement_time,
                });
    
                // send email jg (belum)
            }
            else if (notification.transaction_status === 'deny') {
                await OrderModel.findByIdAndUpdate(order._id, {
                    status: notification.transaction_status,
                    status_code: notification.status_code,
                });
            }
            else if (notification.transaction_status === 'cancel' || notification.transaction_status === 'expire') {
                await OrderModel.findByIdAndUpdate(order._id, { 
                    status: 'canceled', 
                    status_code: notification.status_code 
                });
            }
            else if (notification.transaction_status === 'pending') {
                await OrderModel.findByIdAndUpdate(order._id, { 
                    status: 'pending', 
                    status_code: notification.status_code 
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export const invoiceService = async (req: any, res: express.Response) => {
    try {
        const { identifier } = req.params
        const { user } = req

        const invoice = await OrderModel.findOne({ where: { identifier } });
        if (!invoice) return res.sendStatus(400)
        if (invoice.user_id !== user.id) throw res.sendStatus(403).json({ 'message': 'FORBIDDEN: You are not allowed to access this invoice' })
    } catch (err) {
        console.log(err);
    }
}

export const orderService = async (req: RequestWithJWT & express.Request, res: express.Response) => {
    const session = await mongoose.startSession();
    
    try {
        await session.withTransaction(async () => {
            const channel = req.body.payment_channel.toLowerCase()
            if (!channels(channel)) throw res.json({ 'message': 'Unsupported payment channel' })

            // Retrieve user and cart
            const user = await UserModel.findById(req.userId).session(session);
            const cart = await CartModel.findOne({ user: req.userId }).populate('course').session(session);

            if (!user || !cart) {
                throw new Error('User or cart not found');
            }

            // Course to be purchased
            const courseIds: mongoose.Types.ObjectId[] = Array.isArray(cart.course) ? cart.course : [cart.course];
            const cartItems: CourseDocument[] = await CourseModel.find({ _id: { $in: courseIds } }).session(session);

            // Calculate total items to be purchased
            const cartSummary = CartSummary(cartItems)
            
            const invoice = `${moment().format('YYMMDD')}${moment().format('HHmmss')}${Math.floor(Math.random() * 1000)}`;
            const identifier = crypto.randomBytes(20).toString('hex');
            const payload = paymentRequestPayloads(channel, invoice, cartSummary, user, cartItems);
            
            // Charge to Midtrans
            const response = await CoreAPI.charge(payload);

            const order = await OrderModel.create({
                invoice,
                identifier,
                course: cartItems,
                gross_amount: cartSummary.sub_total.raw,
            }, { session });

            await updateOrder(order, response, session);
            await midtransResponse(response, session);
            await CartModel.deleteMany({ user_id: user.id }).session(session);
            await session.commitTransaction();
        })
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    } finally {
        session.endSession();
    }
}

export const notificationHandlerService = async (req: express.Request, res: express.Response) => {
    try {
        const notification = await CoreAPI.transaction.notification(req.body)
        console.log(notification);
        
        const order = await OrderModel.findOne({ invoice: notification.order_id })
        if (!order) return notFoundResponse('Order not found')

        const user = await UserModel.findById(order.user_id)

        await midtransResponse(notification, null)
        await orderStatusHandling(order, user, notification)

        return apiResponse(StatusCodes.OK, 'OK', 'Success handle notification', {})
    } catch (err) {
        console.log(err);
        return res.sendStatus(404)
    }
}
