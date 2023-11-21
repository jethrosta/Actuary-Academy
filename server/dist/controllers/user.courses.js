"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCourseControllers = void 0;
const user_courses_1 = require("helpers/user.courses");
class userCourseController {
    // GET course
    getMyCourse = async (req, res) => {
        // get id from parameter (harusnya from user)
        try {
            const id = req.params.id;
            const myCourse = await user_courses_1.userCourseHelpers.getUserCourse(id);
            return res.send(myCourse);
        }
        catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
    // PATCH subscribe
    subscribedBy = async (req, res) => {
        try {
            /*
            unfinished(?)
            */
            const id = req.params.id;
            const subCourse = await user_courses_1.userCourseHelpers.subscribeCourse(id, req.body);
            res.send(subCourse);
        }
        catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
    // PATCH unsubscribe
    unsubscribedBy = async (req, res) => {
        try {
            /*
            unfinished(?)
            */
            const id = req.params.id;
            const unsubCourse = await user_courses_1.userCourseHelpers.unsubscribeCourse(id, req.body);
            res.send(unsubCourse);
        }
        catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
}
exports.userCourseControllers = new userCourseController();
//# sourceMappingURL=user.courses.js.map