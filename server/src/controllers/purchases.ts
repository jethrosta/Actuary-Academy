import express from "express";
import { purchaseSchemaValidate } from "../db/purchases";
import { CreatePurchase, Purchase, PurchaseById, UpdatePurchase, DeletePurchase } from "../services/purchases";

// Add purchase packages
export const addPurchase = async (req: express.Request, res: express.Response) => {
    try {
        const data = {
            name: req.body.name,
            period: req.body.period,
            originalPrice: req.body.originalPrice,
            price: req.body.price,
            facilities: req.body.facilities,
            theme: req.body.theme,
        }

        const { error, value } = purchaseSchemaValidate.validate(data)

        if (error) {
            res.send(error.message);
        } else {
            const purchase = await CreatePurchase(value);
            res.status(201).send(purchase);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error at controllers/purchases'})
    }
}

// Get all purchase packages
export const getAllPurchase = async (req: express.Request, res: express.Response) => {
    try {
        const purchase = await Purchase();

        return res.status(200).json(purchase);
    } catch (err) {
        console.log(err);
    }
}

// Get single purchase packages
export const getPurchase = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const purchase = await PurchaseById(id);

        return res.status(200).json({ message: 'Purchase packages retrieved successfully', purchase })
    } catch (err) {
        console.log(err);
    }
}

export const updatePurchase = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const purchase = await UpdatePurchase(id, req.body);

        return res.status(200).json({ message: 'Purchase packages updated successfully', purchase })
    } catch (err) {
        console.log(err);
    }
}

export const deletePurchase = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        await DeletePurchase(id);

        return res.status(200).json({ message: 'Purchase packages deleted successfully' })
    } catch (err) {
        console.log(err);
    }
}
