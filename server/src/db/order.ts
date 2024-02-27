import mongoose from "mongoose";

export interface OrderDocument extends mongoose.Document {
    payment_type: string;
    transaction_details: {
        gross_amount: number;
        orderId: string;
    },
    customer_details: mongoose.Types.ObjectId;
    item_details: mongoose.Types.ObjectId[];
    bank_transfer: {
        bank: string;
    },
    transaction_status: string;
};

const transactionStatus = ['settlement', 'pending', 'expire', 'cancel', 'deny'];

const orderSchema = new mongoose.Schema<OrderDocument>({
    payment_type: { type: String, required: true },
    transaction_details: {
        gross_amount: { type: Number, required: true },
        orderId: { type: String, required: true },
    },
    customer_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    item_details: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase',
        required: true,
    }],
    bank_transfer: {
        bank: { type: String, required: true },
    },
    transaction_status: {
        type: String,
        enum: transactionStatus,
        required: true,
        default: 'pending',
    },
}, { timestamps: true });

export const OrderModel = mongoose.model('Order', orderSchema);
