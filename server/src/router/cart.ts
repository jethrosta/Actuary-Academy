import express from 'express';
import { isAuthenticated } from '../middlewares/index';
import { addItemIntoCart, getUserCarts, updateUserCart, removeItemFromCart } from '../controllers/cart';

export default (router: express.Router) => {
    router.post('/v2/cart/:id', isAuthenticated, addItemIntoCart);
    router.get('/v2/cart/:id', isAuthenticated, getUserCarts);
    router.put('/v2/cart/:id', isAuthenticated, updateUserCart);
    router.delete('/v2/cart/:id', isAuthenticated, removeItemFromCart);
}