import express from 'express';
import { createOrder, getOrders, getOrderById, updateOrderStatus, orderNotification } from '../controllers/order';
import { isAuthenticated } from "../middlewares/index"

export default (router: express.Router) => {
    router.post('/v2/order', isAuthenticated, createOrder);
    router.get('/v2/order', isAuthenticated, getOrders);
    router.get('/v2/order/:order_id', isAuthenticated, getOrderById);
    router.put('/v2/order/:order_id', isAuthenticated, updateOrderStatus);
    router.post('/v2/order/notification', isAuthenticated, orderNotification);
}
