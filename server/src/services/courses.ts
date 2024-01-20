import { CourseModel } from "../db/courses";
import { UserModel } from "../db/users";

export const Courses = () => CourseModel.find();

export const CourseById = (courseId: string) => CourseModel.findById(courseId);

export const CourseBySubscriberId = async (userId: string) => {
  const user = await UserModel.findById(userId)
  const courses = await CourseModel.find({ '_id': { $in: user.courses } })
  return courses
}

export const createCourse = async (values: Record<string, any>) => new CourseModel(values)
  .save()
  .then((course) => {
    course.toObject();
  })

export const subscribeToCourse = async (userId: string, courseId: string) => CourseModel.updateOne(
  { '_id': courseId },
  { $addToSet: { subscribers: userId } },
)
