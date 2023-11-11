import express from 'express';
import { index, show, addItem, removeItem } from "services/cart";
import { CartDocument } from 'db/cart';
import { RequestWithJWT } from 'middlewares';

interface CartRequest extends express.Request {
    body: {
        CartDocument: CartDocument
    }
}

export const getAllCarts = async (req: express.Request, res: express.Response) => {
    try {
        const carts = await index();
        return res.sendStatus(200).json(carts);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const getCurrentUserCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const cart = await show(req.userId);
        return res.sendStatus(200).json(cart);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const addItemIntoCart = async (req: CartRequest, res: express.Response) => {
    try {
        const user: CartDocument = req.body.CartDocument
        
        const item = await addItem(user)

        return res.status(200).json(item)
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

// export const removeItemFromCart = async (req: CartRequest, res: express.Response) => {
//     try {
//         const itemId = 

//         await removeItem(user)

//         return res.status(200)
//     } catch (err) {
//         console.log(err);
//         return res.sendStatus(400);
//     }
// }