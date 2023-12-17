import express from "express";
import { isAuthenticated } from "../middlewares/index";
import { getAllPayments, getCurrentUserPayment } from "../controllers/midtrans";

export default (router: express.Router) => {
    router.get('/v2/payment', isAuthenticated, getAllPayments);
    router.get('/v2/payment/:order_id', isAuthenticated, getCurrentUserPayment);
};