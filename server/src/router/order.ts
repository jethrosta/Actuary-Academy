import express from 'express';
import { invoice, order, notificationHandler, orderItems, pendingPayment, allPayment } from '../controllers/order';
import { isAuthenticated } from "../middlewares/index"

export default (router: express.Router) => {
    router.post('/v2/ordercreate', isAuthenticated, order)
    router.post('/v2/notification', notificationHandler)
    router.post('/v2/invoice/:identifier', isAuthenticated, invoice)
    router.post('/v2/pendingpayment', isAuthenticated, pendingPayment)
    router.post('/v2/orderitems', orderItems);
    router.post('/v2/allpayment', allPayment);
}