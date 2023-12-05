import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import crypto from 'crypto'

import { OrderModel } from "db/order";
import { UserModel } from 'db/users';
import { CartModel } from 'db/cart';

import { CoreAPI, MidtransResponse } from "db/midtrans";
import { paymentRequestPayloads } from 'helpers/utils/midtrans';
import { channels } from 'helpers/midtransChannels';

import { CartSummaryUtils } from 'helpers/utils/cart';

import { StatusCodes } from 'http-status-codes';
import { apiResponse, badRequestResponse, notFoundResponse } from 'helpers/api-response';

import { CourseById } from './courses';
import { CourseDocument } from 'db/courses';

interface CourseRequest extends express.Request {
    body: {
        CourseDocument: CourseDocument
    }
}

const updateOrderFixInTheNameOfGod = async (order: any, response: any, t: any) => {
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
const successPurchaseCourse = async (req: CourseRequest, user: any) => {
    try {
        const courseId = await CourseById(req.params.id)
        await UserModel.findByIdAndUpdate(user._id, { 
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

// di UserModel belum ada { carts: { course } }
const getCartsForUser = async (userId: string) => {
    try {
        const user = await UserModel.findById(userId).populate('carts.course');
        if (!user) {
          throw new Error('User not found');
        }
    
        // return user.carts;
    } catch (err) {
        console.error(err);
    }
}

export const invoice = async (req: any, res: express.Response) => {
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

export const order = async (req: any, res: express.Response) => {   
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { id } = req.user;
        const channel = req.body.payment_channel.toLowerCase();
        if (!channels(channel)) throw res.json({ 'message': 'Unsupported payment channel :(' })

        const user = await UserModel.findById(id);
        if (!user) throw res.json({ 'message': 'not found user' })

        getCartsForUser(user._id)       // still error
            .then((carts) => {
                console.log('Carts for user:', carts);
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });

        const cartSummary = CartSummaryUtils(cart);
        // get cartCourse
        const cartCourse = carts.map((cart: any) => CourseCartTransformer(cart.series));
        const payloadItemsDetails = cartCourse.map((series: any) => ({
            id: series.id,
            price: series.is_discount ? series.discount_price.raw : series.price.raw,
            quantity: 1,
            name: series.title,
        }));

        const invoice = `${moment().format('YYMMDD')}${moment().format('HHmmss')}${Math.floor(Math.random() * 1000)}`;
        const identifier = crypto.randomBytes(20).toString('hex');
        const payload = paymentRequestPayloads(channel, invoice, cartSummary, user, payloadItemsDetails);

        const order = await OrderModel.create({
            invoice,
            identifier,
            course: cartCourse,
            gross_amount: cartSummary.sub_total.raw,
        }, { session });

        const response = await CoreAPI.charge(payload);

        await updateOrderFixInTheNameOfGod(order, response, session);
        await midtransResponse(response, session);
        await CartModel.deleteMany({ user_id: user.id }).session(session);
        await session.commitTransaction();

        return apiResponse(StatusCodes.OK, 'OK', 'Success create an order', {
            response,
            redirect: `/api/orders/invoice/${identifier}`,
        });
    } catch (err) {
        console.log(err);
    }
}

export const notificationHandler = async (req: express.Request, res: express.Response) => {
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
