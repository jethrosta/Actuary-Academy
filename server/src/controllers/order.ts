import express from 'express';
import { OrderDocument } from 'db/order';
import { invoiceService, orderService, notificationHandlerService } from 'services/order';
import { RequestWithJWT } from 'middlewares';

// interface OrderRequest extends express.Request {
//     body: {
//         OrderDocument: OrderDocument
//     }
// }

export const invoice = async (req: express.Request, res: express.Response) => {
    try {
        const serviceResponse = await invoiceService(req, res);
        return res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'Internal Server Error in OrderControllers' })
    }
}

export const order = async (req: express.Request & RequestWithJWT, res: express.Response) => {
    try {
        const serviceResponse = await orderService(req, res);
        return res.json(serviceResponse);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'Internal Server Error in OrderControllers' })
    }
}

export const notificationHandler = async (req: express.Request, res: express.Response) => {
    try {
        const serviceResponse = await notificationHandlerService(req, res);
        return res.json(serviceResponse);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ 'message': 'Internal Server Error in OrderControllers' })
    }
}
