import mongoose from "mongoose";

export interface CartDocument extends mongoose.Document {
    user: mongoose.Types.ObjectId;
}

const cartSchema = new mongoose.Schema<CartDocument>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    // Reference User Model
        required: true,
    }
    // course: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Course',  // Reference Course Model
    //     required: true,
    // },
});

export const CartModel = mongoose.model('Cart', cartSchema);