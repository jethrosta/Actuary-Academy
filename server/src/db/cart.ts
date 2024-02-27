import mongoose from "mongoose";

export interface CartItem {
    purchaseId: mongoose.Types.ObjectId;
    quantity: number;
}

export interface CartDocument extends CartItem, mongoose.Document {
    user: mongoose.Types.ObjectId;
    items: CartItem[];
}

const CartItemSchema = new mongoose.Schema<CartItem>({
    purchaseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase',    // Reference Purchase Model
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
})

const cartSchema = new mongoose.Schema<CartDocument>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',        // Reference User Model
        required: true,
    },
    items: [CartItemSchema],
});

export const CartModel = mongoose.model('Cart', cartSchema);
