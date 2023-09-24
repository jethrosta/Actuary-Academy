import { userCourseHelpers } from "helpers/user.courses";
import { RequestWithJWT } from "middlewares";
import { Response } from "express";

class userCourseController {
    // GET course
    getMyCourse = async (req: RequestWithJWT, res: Response) => {
        // get id from parameter (harusnya from user)
        try {
            const id = req.params.id;
            const myCourse = await userCourseHelpers.getUserCourse(id);
            return res.send(myCourse);
        } catch(error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    // PATCH subscribe
    subscribedBy = async (req: RequestWithJWT, res: Response) => {
        try {
            /* 
            unfinished(?)
            */
            const id = req.params.id;
            const subCourse = await userCourseHelpers.subscribeCourse(id, req.body);
            res.send(subCourse);
        } catch(error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    // PATCH unsubscribe
    unsubscribedBy = async (req: RequestWithJWT, res: Response) => {
        try {
            /*
            unfinished(?)
            */
            const id = req.params.id;
            const unsubCourse = await userCourseHelpers.unsubscribeCourse(id, req.body);
            res.send(unsubCourse);
        } catch(error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }
}

export const userCourseControllers = new userCourseController();