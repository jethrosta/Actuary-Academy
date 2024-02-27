import mongoose from 'mongoose';
import { MidtransClient } from "midtrans-node-client";

export const CoreAPI = new MidtransClient.CoreApi({
    isProduction: false,
    serverKey: 'SB-Mid-server-BFwr3VF3lusAFn4lAAty5nIQ',
    clientKey: 'SB-Mid-client-ZekY0nyaDfOnwd8A',
});

export interface vaNumbers {
    bank: string;
    va_number: string;
};

export interface PaymentAmounts {
    paid_at: string;
    amount: string;
};

export interface MidtransResponseDocument extends vaNumbers, PaymentAmounts, mongoose.Document {
    va_numbers: string[],
    transaction_time: string,
    transaction_status: string,
    transaction_id: string,
    status_message: string,
    status_code: string,
    signature_key: string,
    settlement_time: string,
    payment_type: string,
    payment_amounts: string[],
    order_id: string,
    merchant_id: string,
    gross_amount: string,
    fraud_status: string,
    currency: string,
    biller_code: string,
    bill_key: string,
    permata_va_number: string,
};

const vaNumbersSchema = new mongoose.Schema<vaNumbers>({
    bank: { type: String },
    va_number: { type: String },
});

const paymentAmountsSchema = new mongoose.Schema<PaymentAmounts>({
    paid_at: { type: String },
    amount: { type: String },
});

const midtransResponseSchema = new mongoose.Schema<MidtransResponseDocument>({
    va_numbers: [vaNumbersSchema],
    transaction_time: { type: String },
    transaction_status: { type: String },
    transaction_id: { type: String },
    status_message: { type: String },
    status_code: { type: String },
    signature_key: { type: String },
    settlement_time: { type: String },
    payment_type: { type: String },
    payment_amounts: [paymentAmountsSchema],
    order_id: { type: String },
    merchant_id: { type: String },
    gross_amount: { type: String },
    fraud_status: { type: String },
    currency: { type: String },
    biller_code: { type: String },
    bill_key: { type: String },
    permata_va_number: { type: String },
}, 
{ 
    collection: 'midtrans_responses' 
});

export const MidtransResponse = mongoose.model('MidtransResponse', midtransResponseSchema);
