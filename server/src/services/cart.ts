import express from "express";
import { StatusCodes } from "http-status-codes";
import { getUserById } from "db/users";
import { RequestWithJWT } from "middlewares";
import { CourseModel } from "db/course";
import { apiResponse, notFoundResponse, badRequestResponse } from "helpers/api-response";
// import course and video (not finished)

class cartService {
    index = async (req: RequestWithJWT) => {
        try {
            const user = await getUserById(req.userId);
            if (!user) {
                throw notFoundResponse('User');
            }

            /**
             * (not finished)
             * (create based on what courses each user purchased)
             * const cartSummary
             * const cartIds
             * const cartCourse
             */

            return apiResponse(StatusCodes.OK, 'OK', 'Success get carts', {
                // cart_summary: cartSummary,
                // cart_ids: cartIds,
                // cart_course: cartCourse,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // addOrRemove = async (req: ) => {
    //     try {
    //         const courseId = 
    //         const course = await CourseModel.findById(courseId)
    //     }
    // }
}