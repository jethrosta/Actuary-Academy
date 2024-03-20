import express from "express";

import authentication from "./authentication";
import users from "./users";
import testimonies from "./testimonies";
import content from "./content";
import courses from "./courses";
import order from "./order";
import midtrans from "./midtrans";
// import subscription from "./subscription";
import products from "./academyPackages";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  testimonies(router);
  content(router);
  courses(router);
  order(router);
  midtrans(router);
  // subscription(router);
  products(router);
  return router;
};
