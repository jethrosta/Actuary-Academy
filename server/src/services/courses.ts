import { CourseModel } from "db/courses";

export const Courses = () => CourseModel.find();

export const CourseById = (id: string) => CourseModel.findById(id);

export const CourseBySubscriberId = async (subscriberId: string) => CourseModel.find({ 'subscribedBy.userId': subscriberId })

export const createCourse = async (values: Record<string, any>) => new CourseModel(values)
    .save()
    .then((course) => {
      course.toObject();
    })

export const subscribeToCourse = async (courseId: string, newSubsciberId: string) => CourseModel.updateOne(
    { '_id': courseId },
    { $push: { subscribedBy: { userId: newSubsciberId } } }
)
