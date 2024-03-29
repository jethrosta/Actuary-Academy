import mongoose from "mongoose";

export interface OrderDocument extends mongoose.Document {
    _id: string;
    total: number;
    payment_method: string;
    order_status: string;
    customer_details: mongoose.Schema.Types.ObjectId;
    snap_token: string;
    snap_redirect_url: string;
};

export interface OrderItemDocument extends mongoose.Document {
    order_id: string;
    product_details: mongoose.Schema.Types.ObjectId;
};

const orderStatus = ['PENDING_PAYMENT', 'PAID', 'CANCELLED'];

const orderSchema = new mongoose.Schema<OrderDocument>({
    _id: {
        type: String,
        required: true
    },
    total: { 
        type: Number, 
        required: true 
    },
    payment_method: {
        type: String,
    },
    order_status: { 
        type: String, 
        enum: orderStatus, 
        required: true 
    },
    customer_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    snap_token: {
        type: String,
        required: true,
    },
    snap_redirect_url: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const OrderModel = mongoose.model('Order', orderSchema);

const orderItemSchema = new mongoose.Schema<OrderItemDocument>({
    order_id: {
        type: String,
        ref: 'Order',
        required: true,
    },
    product_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
}, { timestamps: true });

export const OrderItemModel = mongoose.model('OrderItem', orderItemSchema);
