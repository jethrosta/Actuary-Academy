import express from "express";
import { testimoni } from "../controllers/testimonies";
import { getAllTestimoni, deleteTesti } from "../controllers/testimonies";
import { isAuthenticated, isOwner } from "../middlewares/index";

export default (router: express.Router) => {
  router.post("/v2/testimoni", isAuthenticated, testimoni);
  router.get("/v2/testimoni", getAllTestimoni);
  router.delete("/v2/testimoni/:id", isAuthenticated, isOwner, deleteTesti);
};
