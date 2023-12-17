import express from 'express';

import { CartDocument } from '../db/cart';
import { addToCart, getCarts, updateCart, removeFromCart } from '../services/cart';

import { RequestWithJWT } from '../middlewares/index';

export interface CartRequest extends express.Request {
    body: {
        CartDocument: CartDocument
    }
}

export const addItemIntoCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const userCart = await addToCart(req.userId);

        return res.status(200).json({ message: 'Item added to cart successfully', userCart });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getUserCarts = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const userCart = await getCarts(req.userId);

        return res.status(200).json({ message: 'Cart retrieved successfully', userCart });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateUserCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const cartId = req.params.id;
        const data = req.body;
        const updatedCart = await updateCart(cartId, data);

        res.status(200).json({ message: 'Cart updated successfully', updatedCart });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const removeItemFromCart = async (req: CartRequest & RequestWithJWT, res: express.Response) => {
    try {
        const itemId = req.params.itemId;
        const removedItem = await removeFromCart(itemId);

        res.status(200).json({ message: 'Item removed successfully', removedItem });
    } catch (err) {
        console.log(err);
    }
}
