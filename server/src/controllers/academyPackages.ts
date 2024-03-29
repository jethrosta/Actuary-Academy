import express from "express";
import { productSchemaValidate } from "../db/academyPackages";
import { productServices } from "../services/academyPackages";

export const addProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { error } = productSchemaValidate.validate(req.body);

        if (error) res.send(error.message);

        const { name, originalPrice, price } = req.body;
        await productServices.CreateProduct(name, originalPrice, price);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}

export const getAllProducts = async (req: express.Request, res: express.Response) => {
    try {
        const product = await productServices.GetProducts();

        return res.status(200).json(product);
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}

export const getProductById = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const product = await productServices.GetProductById(id);

        if(!product) return "Product not found.";

        return res.status(200).json(product);
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}

export const getProductByName = async (req: express.Request, res: express.Response) => {
    try {
        const productName = req.body;
        const product = await productServices.GetProductByName(productName);

        if(!product) return "Product not found.";

        return res.status(200).json(product);
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}

export const updateProductById = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const product = await productServices.UpdateProductById(id, req.body);

        if(!product) return "Product not found.";

        return res.status(200).json(product);
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}

export const deleteProduct = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        await productServices.DeleteProduct(id);

        if(!id) return "Product not found.";

        return res.status(200).json({ message: 'Product deleted successfully' })
    } catch (err) {
        console.error("Error at controllers/products: ", err);
    }
}
