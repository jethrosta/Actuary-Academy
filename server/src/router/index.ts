import express from "express";

import authentication from "./authentication";
import users from "./users";
import products from "./academyPackages";
import order from "./order";
// import testimonies from "./testimonies";
// import content from "./content";
// import courses from "./courses";
// import midtrans from "./midtrans";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  products(router);
  users(router);
  order(router);
  // testimonies(router);
  // content(router);
  // courses(router);
  // midtrans(router);
  return router;
};
