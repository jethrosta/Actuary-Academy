import express from 'express';
import { register, login, logout, sendRegisterEmail } from '../controllers/authentication';
import { oauthRedirect } from '../controllers/google';
import { oauthRedirectFB } from '../controllers/facebook';

export default (router: express.Router) => {
  router.post('/v2/auth/register', sendRegisterEmail);
  router.get('/v2/auth/verification/:token', register)
  router.post('/v2/auth/login', login);
  router.post('/v2/auth/logout', logout);
  router.get('/v2/auth/google', oauthRedirect);
  router.get('/v2/auth/facebook', oauthRedirectFB);
};