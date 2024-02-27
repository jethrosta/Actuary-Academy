import express from 'express';

import { CartDocument } from '../db/cart';
import { addToCart, getCarts, removeFromCart } from '../services/cart';

import { RequestWithJWT } from '../middlewares/index';

export interface CartRequest extends express.Request {
    body: {
        CartDocument: CartDocument
    }
}

export const addItemIntoCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const userCart = await addToCart(req.userId, req.params.purchaseId);

        return res.status(200).json({ message: 'Item added to cart successfully', userCart });
    } catch (err) {
        return res.status(500).json({ message: `Error at controllers/cart: ${err.message}` });
    }
}

export const getUserCarts = async (req: RequestWithJWT, res: express.Response) => {
    try {
        const userCart = await getCarts(req.userId);

        return res.status(200).json({ message: 'Cart retrieved successfully', userCart });
    } catch (err) {
        return res.status(500).json({ message: `Error at controllers/cart: ${err.message}` });
    }
}

export const removeItemFromCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const userId = req.userId;
        const cartItemId = req.params.cartItemId;

        const removeItem = await removeFromCart(userId, cartItemId);

        res.status(200).json({ message: 'Item removed successfully', removeItem });
    } catch (err) {
        return res.status(500).json({ message: `Error at controllers/cart: ${err.message}` });
    }
}
