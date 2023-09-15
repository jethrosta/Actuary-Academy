import express from "express";
import { getCourses, getCourseById, subCourseById, unsubCourseById } from "../db/courses";
import { RequestWithJWT } from "middlewares";

export const getAllCourses = async (req: express.Request, res: express.Response) => {
    try {
        const courses = await getCourses();
        return res.status(200).json(courses);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
};

export const getMyCourse = async (req: RequestWithJWT, res: express.Response) => {
    try {
        const myCourse = await getCourseById(req.userId);
        return res.json(myCourse);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

// export const 