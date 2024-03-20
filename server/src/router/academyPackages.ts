import express from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProduct } from "../controllers/academyPackages";

export default (router: express.Router) => {
    router.post('/v2/academy', addProduct);
    router.get('/v2/academy', getAllProducts);
    router.get('/v2/academy/:id', getProductById);
    router.put('/v2/academy/:id', updateProductById);
    router.delete('/v2/academy/:id', deleteProduct);
}
