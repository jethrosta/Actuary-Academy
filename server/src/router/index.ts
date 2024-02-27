import express from "express";

import authentication from "./authentication";
import users from "./users";
import testimonies from "./testimonies";
import content from "./content";
import courses from "./courses";
import cart from "./cart";
import order from "./order";
import midtrans from "./midtrans";
import subscription from "./subscription";
import purchases from "./purchases";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  testimonies(router);
  content(router);
  courses(router);
  cart(router);
  order(router);
  midtrans(router);
  subscription(router);
  purchases(router);
  return router;
};
