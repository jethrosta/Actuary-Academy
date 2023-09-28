import express from "express";

import authentication from "./authentication";
import users from "./users";
import testimonies from "./testimonies";
import content from "./content";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  testimonies(router);
  content(router);
  return router;
};
