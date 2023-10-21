import { Router } from "express";
import { isAuthenticated } from "../middlewares";
import { getAllVideos } from "../controllers/bunny";

export default (router: Router) => {
  router.get(`/v2/videos`, isAuthenticated , getAllVideos)
}
