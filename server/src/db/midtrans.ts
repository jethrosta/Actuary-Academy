import mongoose from 'mongoose';
import { MidtransClient } from "midtrans-node-client";

export const CoreAPI = new MidtransClient.CoreApi({
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
})

const midtransResponseSchema = new mongoose.Schema({
    order_id: { type: String },       // langsung dari _id aja (?)
    bank: { type: String },
    va_number: { type: String },
    payment_type: { type: String },
    store: { type: String },
    permata_va_number: { type: String },
    status_code: { type: String },
    status_message: { type: String },
    transaction_id: { type: String },
    merchant_id: { type: String },
    gross_amount: { type: String },
    currency: { type: String },
    transaction_time: { type: String },
    transaction_status: { type: String },
    fraud_status: { type: String },
    bill_key: { type: String },
    biller_code: { type: String },
    payment_code: { type: String },
    signature_key: { type: String },
    acquirer: { type: String },
    settlement_time: { type: String },
    approval_code: { type: String },
    actions: { type: Object }, 
    response_body: { type: Object }, // Use Object instead of JSON
}, 
{ 
    collection: 'midtrans_responses' 
});

export const MidtransResponse = mongoose.model('MidtransResponse', midtransResponseSchema);