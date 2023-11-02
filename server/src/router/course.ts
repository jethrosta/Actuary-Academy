import express from "express";
import { CourseController } from "controllers/course";
// import video controller
import { isAuthenticated } from "middlewares";

export default (router: express.Router) => {
    router.get('/v2/course/', CourseController.index);
    router.get('/v2/course/:slug', isAuthenticated, CourseController.show);
}
