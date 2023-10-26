import express, { response } from 'express';

const midtransClient = require('midtrans-client');
const SERVER_KEY = 'Pake Sandbox'; //Isi server & client key akun midtrans
const CLIENT_KEY = 'Pake Sandbox';

export const makePayment = async (req: express.Request, res: express.Response) => {
    try {
        const {amount} = req.body;

        let core = new midtransClient.CoreApi({
            isProduction: false,
            serverKey: SERVER_KEY,
            clientKey: CLIENT_KEY
            
        });

        core.charge({
            "payment_type": "bank_transfer",
            "transaction_details": {
                "gross_amount": amount,
                "order_id": "order-id-node-" + Math.round((new Date()).getTime() / 1000),
            },
            "customer_details": {
                "first_name": "Haydar",
                "last_name": "Amru",
                "email": "haydaramru@example.com",
            },

        })
            .then((apiResponse: any) => {
                return res.status(200).json(
                    {
                        vaNumber: apiResponse.permata_va_number,
                        amount: apiResponse.gross_amount,
                        orderId: apiResponse.order_id,
                        paymentStatus: apiResponse.transaction_status
                    }
                ).end();
            })

        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');

    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
