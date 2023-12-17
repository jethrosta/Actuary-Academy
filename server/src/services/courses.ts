import { CourseModel } from "../db/courses";

export const Courses = () => CourseModel.find();

export const CourseById = (courseId: string) => CourseModel.findById(courseId);

export const CourseBySubscriberId = async (userId: string) => CourseModel.find({ subscribers: userId })

export const createCourse = async (values: Record<string, any>) => new CourseModel(values)
    .save()
    .then((course) => {
      course.toObject();
    })

export const subscribeToCourse = async (userId: string, courseId: string) => CourseModel.updateOne(
  { '_id': courseId },
  { $addToSet: { subscribers: userId } },
)
