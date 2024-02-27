import mongoose from "mongoose";
import Joi from "joi";

export const purchaseSchemaValidate = Joi.object({
    name: Joi.string(),
    period: Joi.string(),
    originalPrice: Joi.number(),
    price: Joi.number(),
    facilities: Joi.array().items(Joi.string()),
    theme: Joi.string(),
})

interface PurchaseDocument extends mongoose.Document {
    name: string,
    period: string,
    originalPrice: number,
    price: number,
    facilities: string[],
    theme: string,
}

const PurchaseSchema = new mongoose.Schema<PurchaseDocument>({
    name: { type: String },
    period: { type: String },
    originalPrice: { type: Number },
    price: { type: Number },
    facilities: [String],
    theme: { type: String }
})

export const PurchaseModel = mongoose.model("Purchase", PurchaseSchema)
