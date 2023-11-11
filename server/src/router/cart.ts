import express from 'express';
import { isAuthenticated } from 'middlewares';
import { addItemIntoCart, getAllCarts, getCurrentUserCart } from 'controllers/cart';

export default (router: express.Router) => {
    router.get('/v2/cart', isAuthenticated, getAllCarts);
    router.get('/v2/cart/:id', isAuthenticated, getCurrentUserCart);
    router.post('/v2/cart', isAuthenticated, addItemIntoCart);
}