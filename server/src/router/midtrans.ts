import express from "express";
import { isAuthenticated } from "../middlewares";
import { MidtransController } from "../controllers/midtrans";

export default (router: express.Router) => {
    router.get('/v2/payment', isAuthenticated, MidtransController.index);
    router.get('/v2/payment/:order_id', isAuthenticated, MidtransController.show);
};