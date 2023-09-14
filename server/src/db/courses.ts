// importing modules
import { Schema, model }  from "mongoose";
import Joi from "joi";

// validation schema
export const courseSchemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required()
});

// creating an interface

// interface courseDocument extends mongoose.Document
interface courseInterface {
    title: string,
    description: string,
    published: boolean
};

// course schema
const courseSchema = new Schema<courseInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }
});

// creating a model
export const Course = model<courseInterface>("Course", courseSchema)