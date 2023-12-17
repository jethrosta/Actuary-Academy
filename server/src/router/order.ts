import express from 'express';
import { invoice, order, notificationHandler, getOrderItems } from '../controllers/order';
import { isAuthenticated } from "../middlewares/index"

export default (router: express.Router) => {
    router.post('/v2/createorder', isAuthenticated, order)
    router.post('/v2/notification', notificationHandler)
    router.get('/v2/invoice/:identifier', isAuthenticated, invoice)
    router.post('/v2/orderitems', getOrderItems);
}