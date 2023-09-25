// importing modules
import mongoose from "mongoose";
import { getUserById } from "./users";

/* subscribedBy */
interface subscribedByDocument extends mongoose.Document {
    userId: string;
};


/* pdf */
interface pdfDocument extends mongoose.Document {
    pdfTitle: string;
}

const pdfSchema = new mongoose.Schema<pdfDocument>({
    pdfTitle: {
        type: String,
        required: true
    }
});


/* video */
interface videoDocument extends mongoose.Document {
    videoTitle: string;
    videoUrl: string;
}

const videoSchema = new mongoose.Schema<videoDocument>({
    videoTitle: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    }
});


/* submateri */
interface submateriDocument extends mongoose.Document {
    title: string;
    pdf: pdfDocument;
    video: videoDocument;
}


/* course */
interface courseDocument extends mongoose.Document {
    title: string;
    subscribedBy: subscribedByDocument;
    submateri: submateriDocument;
};

const userCourseSchema = new mongoose.Schema<courseDocument>({
    title: { 
        type: String, 
        required: true 
    },
    subscribedBy: {
        userId: String,
    },
    submateri: {
        title: String,
        pdf: pdfSchema,
        video: videoSchema
    }
});

export const userCourseModel = mongoose.model("userCourse", userCourseSchema);