import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    course_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    order_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Order',
        required: true,        
    },
    purchase_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    expiry: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

export const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema)