import { userCourseModel } from "db/user.courses";

export class userCourseHelper {
    // GET user course
    async getUserCourse(id: string) {
        try {
            const course = await userCourseModel.findById({id_: id})
            if (!course) {
                return "You don't have any course."
            }
            return course;
        }
        catch (error) {
            console.log(error);
        }
    }

    // PATCH subscribe course
    async subscribeCourse(id: string, data: any) {
        try {
            /* 
            payment gateway (?)
            */

            const subscribeCourse = await userCourseModel.findByIdAndUpdate({_id: id}, data, {new: true});
            if (!subscribeCourse) {
                return "Payment Failed"
            }
            return subscribeCourse;
        }
        catch (error) {
            console.log(error);
        }
    }

    // PATCH unsubscribe course
    async unsubscribeCourse(id: string, data: any) {
        try {
            const unsubscribeCourse = await userCourseModel.findByIdAndUpdate({_id: id}, data, {new: true});
            if (!unsubscribeCourse) {
                return "You are unsubscribing"
            }
            return unsubscribeCourse;
        }
        catch (error) {
            console.log(error);
        }
    }   
}

// export the class
export const userCourseHelpers = new userCourseHelper()