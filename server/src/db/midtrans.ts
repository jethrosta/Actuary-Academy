import mongoose from 'mongoose';
import { MidtransClient } from "midtrans-node-client";

export const CoreAPI = new MidtransClient.CoreApi({
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
})

const midtransResponseSchema = new mongoose.Schema({
    order_id: String,
    bank: String,
    va_number: String,
    payment_type: String,
    store: String,
    permata_va_number: String,
    status_code: String,
    status_message: String,
    transaction_id: String,
    merchant_id: String,
    gross_amount: String,
    currency: String,
    transaction_time: String,
    transaction_status: String,
    fraud_status: String,
    bill_key: String,
    biller_code: String,
    payment_code: String,
    signature_key: String,
    acquirer: String,
    settlement_time: String,
    approval_code: String,
    actions: Object, 
    response_body: Object, // Use Object instead of JSON
}, 
{ 
    collection: 'midtrans_responses' 
});

export const MidtransResponse = mongoose.model('MidtransResponse', midtransResponseSchema);