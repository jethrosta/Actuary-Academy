import express from 'express';
import { createCourse, Courses, CourseById, CourseBySubscriberId, subscribeToCourse } from 'services/courses';
import { CourseDocument } from '../db/courses';
import type { RequestWithJWT } from 'middlewares';

interface CourseRequest extends express.Request {
    body: {
        CourseDocument: CourseDocument
    }
}

export const getAllCourses = async (req: CourseRequest, res: express.Response) => {
    try {
        const courses = await Courses();
        return res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const getCourse = async (req: CourseRequest, res: express.Response) => {
    try {
        const courses = await CourseById(req.params.id);
        return res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const getCourseBySubscriberId = async (req: CourseRequest & RequestWithJWT, res: express.Response) => {
    try {
        const courses = await CourseBySubscriberId(req.userId)

        if (courses === undefined) {
            console.error('Failed to retrieve courses');
            return res.status(400).json({ 'message': 'document not found' })
        }

        return res.status(200).json(courses)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ 'message': 'invalid request' })
    }
}

export const postCourse = async (req: CourseRequest, res: express.Response) => {
    try {
        const { title, subscribedBy, submateri }: CourseDocument = req.body.CourseDocument

        const courses = await createCourse({
            title,
            subscribedBy,
            submateri
        });

        return res.status(200).json(courses);
    } catch (err) {
        return res.status(400).json({ "error": "Error creating Course" });
    }
}

export const updateNewCourseSubscriber = async (req: RequestWithJWT & CourseRequest, res: express.Response) => {
    try {
        const id = req.userId

        const update = await subscribeToCourse(req.params.id, req.userId)

        console.log(update);

        return res.status(200).json({ 'message': 'Successfully updated course subscription' })
    } catch (err) {
        return res.status(400).json({ 'message': 'Cannot update subscription' })
    }
}

export const getPdf = async (req: CourseRequest & RequestWithJWT, res: express.Response) => {
    try {
        const response = await fetch(`https://aa-worker.actvideos.workers.dev/`)
        console.log(response);
    
        response.blob().then((blob) => {
            const url = URL.createObjectURL(blob)

            if (url === undefined) {
                return res.status(400).json({ 'message': 'Resource not found' })
            }
            
            return res.status(200).json({ 'pdfURL': url })
        })
        
        return response;
    } catch (error) {
        console.log(error);
    }
}