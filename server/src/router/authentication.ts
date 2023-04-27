import express from 'express';
import { register, login } from '../controllers/authentication';

export default (router: express.Router) => {
  router.post('/v2/auth/register', register);
  router.post('/v2/auth/login', login);
};