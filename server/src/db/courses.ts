// importing modules
import mongoose from "mongoose";
import Joi from "joi";

// validation schema
export const courseSchemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required()
});

// creating an interface
interface courseDocument extends mongoose.Document {
    title: string,
    description: string,
    published: boolean
};

// course schema
const courseSchema = new mongoose.Schema<courseDocument>({
    title: { type: String, required: true},
    description: { type: String },
    published: { type: Boolean }
});

// creating a model
export const Course = mongoose.model<courseDocument>("Course", courseSchema);

// GET all course
export const getCourses = () => Course.find();

// GET course by Id
export const getCourseById = (id: string) => Course.findById(id);

// PATCH subscribe
export const subCourseById = (id: string, values: Record<string, any>) => 
    Course.findByIdAndUpdate(id, values);

// PATCH unsubscribe
export const unsubCourseById = (id: string, values: Record<string, any>) => 
    Course.findByIdAndUpdate(id, values);