import express from 'express';
import { index, show } from "../services/midtrans";
import { RequestWithJWT } from '../middlewares/index';

export const getAllPayments = async (req: express.Request, res: express.Response) => {
    try {
        const payments = await index();
        return res.status(200).json(payments);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const getCurrentUserPayment = async (req: RequestWithJWT, res: express.Response) => {
    try {
        const payment = await show(req.userId);
        return res.status(200).json(payment);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}
