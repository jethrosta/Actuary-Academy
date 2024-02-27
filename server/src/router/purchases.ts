import express from "express";
import { addPurchase, getAllPurchase, getPurchase, updatePurchase, deletePurchase } from "../controllers/purchases";

export default (router: express.Router) => {
    router.post('/v2/purchases', addPurchase);
    router.get('/v2/purchases', getAllPurchase);
    router.get('/v2/purchases/:id', getPurchase);
    router.put('/v2/purchases/:id', updatePurchase);
    router.delete('/v2/purchases/:id', deletePurchase);
}
