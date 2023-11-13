import express from "express";
import { getSpecificContent, content } from "../controllers/content";
import { isAuthenticated, isOwner } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/v2/content/:id", isAuthenticated, getSpecificContent);
  router.post("/v2/auth/content/", isAuthenticated, content);
};
