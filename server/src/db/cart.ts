import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    kursus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
});

export const Cart = mongoose.model('Cart', cartSchema);