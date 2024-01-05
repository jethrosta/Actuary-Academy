import express from 'express';
import mongoose, { ObjectId } from 'mongoose';
import moment from 'moment';
import crypto from 'crypto'
import axios from 'axios'
import { isDateExpired } from '../helpers/castings'

import { OrderDocument, OrderModel } from '../db/order';
import { CartModel } from '../db/cart';
import { UserDocument, UserModel } from '../db/users';
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
import { invoice } from 'controllers/order';
import { update } from 'lodash';

interface CourseRequest extends express.Request {
    body: {
        CourseDocument: CourseDocument
    }
}

const createOrder = async (invoice: any, response: any, items: any, summary: any, id: any, user: any, session: any) => {
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
        channelName = response.payment_type;
        actions = response.actions;
    }

    if (response.store) channelName = response.store;        // over the counter

    return await OrderModel.create([{
        user_id: user._id,
        invoice,
        identifier: id,
        course: items,
        gross_amount: summary.sub_total.raw,
        payment_type: response.payment_type,
        channel_name: channelName,
        virtual_number: virtualNumber,
        permata_va_number: response.permata_va_number ?? null,
        bill_key: response.bill_key ?? null,
        biller_code: response.biller_code ?? null,
        actions: actions ?? null,
        payment_code: response.payment_code ?? null,
        status_code: response.status_code,
        transaction_time: response.transaction_time,
        expiry_time: response.expiry_time,
    }], { session });
};

const updateOrder = async (inv: string, stat: string) => {
    const setAction = {
        $set: {
            status: stat,
        }
    }
    await OrderModel.updateOne({ invoice: inv }, setAction)
};

const midtransResponse = async (data: any, t: any) => {
    return await MidtransResponse.create({
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
        expiry_time: data.expiry_time ?? null,
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
        const { userId } = req.body

        await updateAllPayments(userId)

        const invoice = await OrderModel.findOne({ identifier }).exec()
        if (!invoice) return res.sendStatus(400)
        if (invoice.user_id != userId) throw res.sendStatus(403).json({ 'message': 'FORBIDDEN: You are not allowed to access this invoice' })
        return invoice

    } catch (err) {
        console.log(err);
    }
}

export const pendingPaymentService = async (req: any, res: express.Response) => {
    try {
        const { userId } = req.body;
        const pendingData = await OrderModel.findOne({ user_id: userId, status: 'pending' }).exec();

        if (!pendingData) { return { status: false, message: 'not found', data: null } }
        else return { status: true, message: 'found', data: pendingData }
    } catch (error) {
        console.log(error);
    }
}

export const orderItemsService = async (req: any, res: express.Response) => {
    try {
        const items = await CourseModel.find({ _id: { $in: req.body.itemIds } }).exec();
        return items;
    } catch (error) {
        return 'items not found';
    }
};

export const orderService = async (req: RequestWithJWT & express.Request, res: express.Response) => {
    const session = await mongoose.startSession();

    try {
        await session.withTransaction(async () => {
            const channel = req.body.payment_channel.toLowerCase()
            if (!channels(channel)) throw res.json({ 'message': 'Unsupported payment channel' })

            // Retrieve items, user, and cart
            const user = await UserModel.findById(req.body.userId).session(session);
            const cart = user.cart.map(item => item.course);
            if (!user || !cart) {
                throw new Error('User or cart not found');
            }

            // const pending = await OrderModel.find({ status: 'pending' }).exec();
            // if (pending.length > 0) {
            //     throw new Error('You have pending payment');
            // }


            // Course to be purchased
            const courseIds: mongoose.Types.ObjectId[] = Array.isArray(req.body.items_ids) ? req.body.items_ids : [req.body.items_ids];
            const cartItems: CourseDocument[] = await CourseModel.find({ _id: { $in: courseIds } }).session(session).exec();

            // Calculate total items to be purchased
            const cartSummary = CartSummary(cartItems)
            const ItemDetails = cartItems.map((item: any) => ({
                id: item._id,
                name: item.title,
                price: item.is_discount ? item.discount_price : item.price,
                quantity: 1,
                duration: item.duration.current
            }));

            const invoice = `${moment().format('YYMMDD')}${moment().format('HHmmss')}${Math.floor(Math.random() * 1000)}`;
            const identifier = crypto.randomBytes(20).toString('hex');
            const payload = paymentRequestPayloads(channel, invoice, cartSummary, user, ItemDetails);

            // Charge to Midtrans
            const response = await CoreAPI.charge(payload);
            await createOrder(invoice, response, ItemDetails, cartSummary, identifier, user, session);
            await midtransResponse(response, session);

            // await CartModel.deleteMany({ user_id: user.id }).session(session);

            await session.commitTransaction();
            return { order_status: 'OK', message: 'Order Successfully Created' };
        })
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    } finally {
        session.endSession();
    }
}

export const orderCancelService = async (req: express.Request, res: express.Response) => {
    try {
        const { invoice } = req.body;
        await CoreAPI.transaction.cancel( invoice );
        await updateOrder(invoice, 'canceled');
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
}

export const notificationHandlerService = async (req: express.Request, res: express.Response) => {
    try {
        const notification = await CoreAPI.transaction.notification(req.body)
        console.log(notification);

        const order = await OrderModel.findOne({ invoice: notification.order_id })
        if (!order) return notFoundResponse('Order not found')

        const user = await UserModel.findById(order.user_id)

        user.courses = user.courses.concat(order.course.id)
        user.save()

        await updateOrder(notification.order_id, notification.transaction_status)
        await midtransResponse(notification, null)
        await orderStatusHandling(order, user, notification)

        return apiResponse(StatusCodes.OK, 'OK', 'Success handle notification', {})
    } catch (err) {
        console.log(err);
        return res.sendStatus(404)
    }
}

export const allPaymentService = async (req: any, res: express.Response) => {
    try {

        const res = await updateAllPayments(req.body.userId).then(() => true).catch(() => false)

        if (res) {
            const orders: OrderDocument[] = await OrderModel.find({ user_id: req.body.userId }).exec();
            return orders;
        }
        
    } catch (error) {
        console.log(error)
    }
};

const updateAllPayments = async (userId: any) => {
    try {
        const orders: OrderDocument[] = await OrderModel.find({ user_id: userId }).exec();

        orders.forEach(async (order: any) => {
            const status = (stat: string) => {
                switch (stat) {
                    case 'settlement':
                        return 'success';
                    case 'pending':
                        return 'pending';
                    case 'expire':
                    case 'cancel':
                        return 'canceled';
                    case 'deny':
                        return 'pending';
                    default:
                        return 'success';
                }
            }

            try {
                const res = await CoreAPI.transaction.status(order.invoice);
                console.log(res);
                
                if (order.status == 'pending' && res.transaction_status == 'settlement') {
                    const user = await UserModel.findById(userId)
                    order.course.forEach((course: any) => {
                        user.courses.push(course.id)
                        user.save()
                    })
                }

                await updateOrder(order.invoice, status(res.transaction_status))
                order.save();
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error)
    }
}
