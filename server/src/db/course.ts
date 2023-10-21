import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    parts: Number,
    price: Number,
    discount_price: Number,
    preview_series: String,
    source_code: String,
    is_discount: {
        type: Boolean,
        default: false,
    },
});

export const CourseModel = mongoose.model('Course', courseSchema);