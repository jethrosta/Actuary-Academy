import express from 'express';
import { isAuthenticated } from '../middlewares/index';
import { addItemIntoCart, getUserCarts, removeItemFromCart } from '../controllers/cart';

export default (router: express.Router) => {
    router.post('/v2/cart/:purchaseId', isAuthenticated, addItemIntoCart);
    router.get('/v2/cart/:userId', isAuthenticated, getUserCarts);
    router.delete('/v2/cart/:cartItemId', isAuthenticated, removeItemFromCart);
}
