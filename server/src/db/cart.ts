import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    // Reference User Model
        required: true,
    },
    kursus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',  // Reference Course Model
        required: true,
    },
});

export const Cart = mongoose.model('Cart', cartSchema);