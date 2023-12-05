import express from 'express';
import { OrderDocument } from 'db/order';
import { RequestWithJWT } from 'middlewares';

interface OrderRequest extends express.Request {
    body: {
        OrderDocument: OrderDocument
    }
}

export const invoice = async (params:type, res: express.Response) => {
    try {
        a
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'error :(' })
    }
}

export const order = async (params:type, res: express.Response) => {
    try {
        a
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'error :(' })
    }
}

export const notificationHandler = async (params:type, res: express.Response) => {
    try {
        a
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'error :(' })
    }
}

// export default {
//     invoice: async (req, res) => {
//         try {
//             const serviceResponse = await OrderService.invoice(req);
//             return res.status(serviceResponse.code).json(serviceResponse);
//         } catch (e) {
//             return res.status(e.code).json(e);
//         }
//     },
//     order: async (req, res) => {
//         try {
//             const serviceResponse = await OrderService.order(req);
//             return res.status(serviceResponse.code).json(serviceResponse);
//         } catch (e) {
//             return res.status(e.code).json(e);
//         }
//     },
//     notificationHandler: async (req, res) => {
//         try {
//             const serviceResponse = await OrderService.notificationHandler(req);
//             return res.status(serviceResponse.code).json(serviceResponse);
//         } catch (e) {
//             return res.status(e.code).json(e);
//         }
//     },
// };
