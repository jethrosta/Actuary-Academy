import { StatusCodes } from "http-status-codes";
import { CourseModel } from "db/course";
import { apiResponse } from "helpers/api-response";
import { CourseHelpers, CourseShowHelpers } from "helpers/course";

class courseService {
    index = async () => {
        try {
            let course = await CourseModel.find({}, null, {
                sort: { id: -1 },
                select: '-updated_at',
            }).populate({
                path: 'videos',
                select: 'id series_id runtime',
            })

            const transformedCourse = course.map((item) => CourseHelpers(item));

            return apiResponse(StatusCodes.OK, 'OK', 'course retrieved successfully', { transformedCourse });
        } catch (error) {
            console.log(error);
        }
    }

    show = async (req: any) => {
        try {
            const { user } = req
            const { slug } = req.params

            let course = await CourseModel.findOne({ slug })
                .populate({
                    path: 'videos',
                    select: '-updated_at',
            
                });

            const transformedCourses = await CourseShowHelpers(course, user);

            return apiResponse(StatusCodes.OK, 'OK', 'Get course successfully', { transformedCourses })
        } catch (error) {
            console.log(error);
        }
    }
}

export const CourseService = new courseService()