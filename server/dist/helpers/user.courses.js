"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCourseHelpers = exports.userCourseHelper = void 0;
const user_courses_1 = require("db/user.courses");
class userCourseHelper {
    // GET user course
    async getUserCourse(id) {
        try {
            const course = await user_courses_1.userCourseModel.findById({ id_: id });
            if (!course) {
                return "You don't have any course.";
            }
            return course;
        }
        catch (error) {
            console.log(error);
        }
    }
    // PATCH subscribe course
    async subscribeCourse(id, data) {
        try {
            /*
            payment gateway (?)
            */
            const subscribeCourse = await user_courses_1.userCourseModel.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!subscribeCourse) {
                return "Payment Failed";
            }
            return subscribeCourse;
        }
        catch (error) {
            console.log(error);
        }
    }
    // PATCH unsubscribe course
    async unsubscribeCourse(id, data) {
        try {
            const unsubscribeCourse = await user_courses_1.userCourseModel.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!unsubscribeCourse) {
                return "You are unsubscribing";
            }
            return unsubscribeCourse;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.userCourseHelper = userCourseHelper;
// export the class
exports.userCourseHelpers = new userCourseHelper();
//# sourceMappingURL=user.courses.js.map