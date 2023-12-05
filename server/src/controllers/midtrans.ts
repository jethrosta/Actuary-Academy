import express from 'express';
import { index, show } from "services/midtrans";
import { RequestWithJWT } from 'middlewares';

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

// class midtransController {
//     index = async (res: any) => {
//         try {
//             const serviceResponse = await MidtransService.index();
//             res.status(serviceResponse.code).json(serviceResponse);
//         } catch (error) {
//             return res.status(error.code).json(error);
//         }
//     }

//     show = async (req: any, res: any) => {
//         try {
//             const serviceResponse = await MidtransService.show(req.params.order_id);
//             res.status(serviceResponse.code).json(serviceResponse);
//         } catch (error) {
//             return res.status(error.code).json(error);
//         }
//     }
// }

// export const MidtransController = new midtransController()