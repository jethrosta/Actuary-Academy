import express from "express";

import authentication from "./authentication";
import users from "./users";
import testimonies from "./testimonies";
import content from "./content";
import midtrans from "./midtrans";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  testimonies(router);
  content(router);
  midtrans(router);
  return router;
};