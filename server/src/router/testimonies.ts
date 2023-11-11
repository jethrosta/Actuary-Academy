import express from "express";
import { testimoni } from "../controllers/testimonies";
import { getAllTestimoni, deleteTesti } from "../controllers/testimonies";
import { isAuthenticated, isOwner } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/v2/testimoni", getAllTestimoni);
  router.post("/v2/testimoni", isAuthenticated, testimoni);
  router.delete("/v2/testimoni", isAuthenticated, isOwner, deleteTesti);
};
