import express from 'express';
import { getAllSubscription, getSubscriptionByUserId } from 'controllers/subscription';
import { isAuthenticated } from 'middlewares';
import router from 'router';

export default (router: express.Router) => {
    router.get('/v2/subscription', isAuthenticated, getAllSubscription);
    router.get('/v2/subscription/:id', isAuthenticated, getSubscriptionByUserId);
}