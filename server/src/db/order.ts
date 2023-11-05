import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
    gross_amount: { type: Number, unsigned: true },
    payment_type: { type: String },
    channel_name: { type: String },
    virtual_number: { type: String },
    permata_va_number: { type: String },
    bill_key: { type: String },
    biller_code: { type: String },
    payment_code: { type: String },
    // actions: {
    //     type: mongoose.Schema.Types.Mixed,   // Must adjust this schema as needed
    // },
    status: { type: String, default: 'pending' },
    status_code: { type: String },
    transaction_time: { type: Date },
    paid_at: { type: Date },
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema)