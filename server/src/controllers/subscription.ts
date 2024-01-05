import express from "express";
import { 
    Subscription, 
    SubscriptionById, 
    SubscriptionByUserId, 
    createSubscription } from "services/subscription";
import { RequestWithJWT } from "middlewares";

export const getAllSubscription = async (req: express.Request, res: express.Response) => {
    try {
        const subscription = await Subscription();
        return res.status(200).json(subscription);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

// export const getCourse = async (req: OrderDocument, res: express.Response) => {
//     try {
//         const subscription = await SubscriptionById(req.params.id);
//         return res.status(200).json(subscription);
//     } catch (err) {
//         console.log(err);
//         return res.sendStatus(400);
//     }
// }

export const getSubscriptionByUserId = async (req: RequestWithJWT, res: express.Response) => {
    try {
        const subscription = await SubscriptionByUserId(req.userId)

        if (subscription === undefined) {
            console.error('Failed to retrieve user');
            return res.status(400).json({ 'message': 'user not purchased yet (?)' })
        }

        return res.status(200).json(subscription)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ 'message': 'invalid request' })
    }
}

// export const postSubscription = async (req: OrderDocument) => {
    
// }