import mongoose from "mongoose";

interface PdfDocument extends Document {
  pdfTitle: string;
}

interface VideoDocument extends Document {
  videoTitle: string;
  videoURL: string;
}

const PdfSchema = new mongoose.Schema<PdfDocument>({
  pdfTitle: { type: String, required: true }
}, { _id: false })

const VideoSchema = new mongoose.Schema<VideoDocument>({
  videoTitle: { type: String, required: true },
  videoURL: { type: String, required: true }
}, { _id: false })

interface SubscriberDocument extends mongoose.Document {
  userId: string;
}

interface SubmateriDocument extends mongoose.Document {
  title: string;
  pdf: [PdfDocument];
  video: [VideoDocument]
}

const SubscriberSchema = new mongoose.Schema<SubscriberDocument>({
  userId: { type: String, required: true },
}, { _id: false })

const SubmateriSchema = new mongoose.Schema<SubmateriDocument>({
  title: { type: String, required: true },
  pdf: [PdfSchema],
  video: [VideoSchema]
}, { _id: false })

export interface CourseDocument extends mongoose.Document {
  title: string;
  subscribedBy: [SubscriberDocument];
  submateri: [SubmateriDocument];
}

const CourseSchema = new mongoose.Schema<CourseDocument>({
  title: { type: String, required: true },
  subscribedBy: [SubscriberSchema],
  submateri: [SubmateriSchema],
});

export const CourseModel = mongoose.model('Course', CourseSchema);

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