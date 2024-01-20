import express from 'express';
import { getAllCourses, getCourse, getCourseBySubscriberId, getPdf, postCourse, updateNewCourseSubscriber } from '../controllers/courses';
import { isAuthenticated } from '../middlewares/index';

export default (router: express.Router) => {
    router.get('/v2/courses', isAuthenticated, getAllCourses);
    router.post('/v2/courses/me', isAuthenticated, getCourseBySubscriberId);
    router.get('/v2/courses/pdf', isAuthenticated, getPdf);
    router.get('/v2/courses/:id', isAuthenticated, getCourse);
    router.post('/v2/courses', isAuthenticated, postCourse);
    router.patch('/v2/courses/:id', isAuthenticated, updateNewCourseSubscriber)
}
