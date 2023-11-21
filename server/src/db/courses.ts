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
    user: mongoose.Types.ObjectId;
}

interface SubmateriDocument extends mongoose.Document {
    title: string;
    pdf: [PdfDocument];
    video: [VideoDocument]
}

const SubscriberSchema = new mongoose.Schema<SubscriberDocument>({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    // Reference User Model
        required: true,
    },
})

const SubmateriSchema = new mongoose.Schema<SubmateriDocument>({
    title: { type: String, required: true },
    pdf: [PdfSchema],
    video: [VideoSchema]
}, { _id: false })

export interface CourseDocument extends mongoose.Document {
    subscribers: [SubscriberDocument];
    title: string;
    submateri: [SubmateriDocument];
    price: number;
    discount_price: number;
    is_discount: boolean;
}

const CourseSchema = new mongoose.Schema<CourseDocument>({
    subscribers: [SubscriberSchema],
    title: { type: String, required: true },
    submateri: [SubmateriSchema],
    price: { type: Number, required: true },
    discount_price: { type: Number },
    is_discount: { type: Boolean, default: false },
});

export const CourseModel = mongoose.model('Course', CourseSchema);
