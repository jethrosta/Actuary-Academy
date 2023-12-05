import express from 'express';
import { invoice, order, notificationHandler } from 'controllers/order';
import { isAuthenticated } from "middlewares"

export default (router: express.Router) => {
    router.post('/', isAuthenticated, order)
    router.post('/notification', notificationHandler)
    router.get('/invoice/:identifier', isAuthenticated, invoice)
}