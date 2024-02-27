import express from "express";
import { createMidtransResponse, 
         getMidtransResponse, 
         midtransResponseById, 
         updateMidtransResponse, 
         deleteMidtransResponse } from "../services/midtrans";

export const addMidtransResponse = async (req: express.Request, res: express.Response) => {
    try {
        const data = {
            va_numbers: req.body.va_numbers,
            transaction_time: req.body.transaction_time,
            transaction_status: req.body.transaction_status,
            transaction_id: req.body.transaction_id,
            status_message: req.body.status_message,
            status_code: req.body.status_code,
            signature_key: req.body.signature_key,
            settlement_time: req.body.settlement_time,
            payment_type: req.body.payment_type,
            payment_amounts: req.body.payment_amounts,
            order_id: req.body.order_id,
            merchant_id: req.body.merchant_id,
            gross_amount: req.body.gross_amount,
            fraud_status: req.body.fraud_status,
            currency: req.body.currency,
            biller_code: req.body.biller_code,
            bill_key: req.body.bill_key,
            permata_va_number: req.body.permata_va_number,
        }

        const midtransResponse = await createMidtransResponse(data);

        res.status(201).send(midtransResponse);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error at controllers/midtrans'})
    }
}

export const getAllMidtransResponse = async (req: express.Request, res: express.Response) => {
    try {
        const midtransResponse = await getMidtransResponse();

        return res.status(200).json(midtransResponse);
    } catch (err) {
        console.log(err);
    }
}

export const getSingleMidtransResponse = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const midtransResponse = await midtransResponseById(id);

        return res.status(200).json({ message: 'Midtrans response retrieved successfully', midtransResponse })
    } catch (err) {
        console.log(err);
    }
}

export const putMidtransResponse = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const midtransResponse = await updateMidtransResponse(id, req.body);

        return res.status(200).json({ message: 'Midtrans response updated successfully', midtransResponse })
    } catch (err) {
        console.log(err);
    }
}

export const delMidtransResponse = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        await deleteMidtransResponse(id);

        return res.status(200).json({ message: 'Midtrans response deleted successfully' })
    } catch (err) {
        console.log(err);
    }
}
