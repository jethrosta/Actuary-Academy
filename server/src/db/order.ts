import mongoose from "mongoose";

export interface OrderDocument extends mongoose.Document {
    user_id: mongoose.Types.ObjectId;
    invoice: string;
    identifier: string;
    // course: mongoose.Types.ObjectId;
    gross_amount: number;
    payment_type: string;
    channel_name: string;
    virtual_number: string;
    permata_va_number: string;
    bill_key: string;
    biller_code: string;
    payment_code: string;
    status: string;
    status_code: string;
    transaction_time: Date;
    expiry_time: Date;
    paid_at: Date;
    course: any;
    actions: any;
}

const orderSchema = new mongoose.Schema<OrderDocument>({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',     // Ref to 'User' model
        required: true,
    },
    invoice: { type: String, unique: true },
    identifier: { type: String, unique: true },
    // course: {                                // Ref to 'Course' model
    //     type: mongoose.Schema.Types.Mixed,   // Must be adjust this schema as needed
    // },
    gross_amount: { type: Number, min: 0, unsigned: true },
    payment_type: { type: String },
    channel_name: { type: String },
    virtual_number: { type: String },
    permata_va_number: { type: String },
    bill_key: { type: String },
    biller_code: { type: String },
    payment_code: { type: String },
    status: { type: String, default: 'pending' },
    status_code: { type: String },
    transaction_time: { type: Date },
    expiry_time: { type: Date },
    paid_at: { type: Date },
    course: { type: Array },
    actions: { type: Array },
}, { timestamps: true });

export const OrderModel = mongoose.model('Order', orderSchema)
