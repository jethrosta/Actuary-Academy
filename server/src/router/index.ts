import express from  'express';

import authentication from './authentication';
import users from './users';
import payment from './payment';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  payment(router);
  return router;
}