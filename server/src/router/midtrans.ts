import express from "express";
import { addMidtransResponse, 
         getAllMidtransResponse, 
         getSingleMidtransResponse, 
         putMidtransResponse, 
         delMidtransResponse } from "../controllers/midtrans";

export default (router: express.Router) => {
    router.post('/v2/midtrans', addMidtransResponse);
    router.get('/v2/midtrans', getAllMidtransResponse);
    router.get('/v2/midtrans/:id', getSingleMidtransResponse);
    router.put('/v2/midtrans/:id', putMidtransResponse);
    router.delete('/v2/midtrans/:id', delMidtransResponse);
};
