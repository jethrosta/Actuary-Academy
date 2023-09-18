import express from "express";

import authentication from "./authentication";
import users from "./users";
import testimonies from "./testimonies";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  testimonies(router);
  return router;
};
