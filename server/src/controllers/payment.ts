import express, { response } from 'express';

const midtransClient = require('midtrans-client');
const SERVER_KEY = 'SB-Mid-server-BFwr3VF3lusAFn4lAAty5nIQ'; //Isi server & client key akun midtrans
const CLIENT_KEY = 'SB-Mid-client-ZekY0nyaDfOnwd8A';

let core = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: SERVER_KEY,
    clientKey: CLIENT_KEY
});

export const makePayment = async (req: express.Request, res: express.Response) => {
    try {
        let paymentData = req.body
        
        core.charge(paymentData)
            .then((apiResponse: any) => {
                return res.status(200).json(apiResponse).end();
            })

        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');

    } catch (err) {
        return res.sendStatus(400).json({ message: err.message });
    } 
};
