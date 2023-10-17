import express from 'express';
import { makePayment } from '../controllers/payment';

export default (router: express.Router) => {
  router.post('/v2/payment', makePayment);
};