import mongoose from "mongoose";
import Joi from "joi";

export const productSchemaValidate = Joi.object({
    name: Joi.string(),
    originalPrice: Joi.number(),
    price: Joi.number(),
    quantity: Joi.number(),
})

interface ProductDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    originalPrice: number;
    price: number;
    quantity: number;
}

const ProductSchema = new mongoose.Schema<ProductDocument>({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: { type: String, required: true },
    originalPrice: { type: Number },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },    // requirements from midtrans
}, { timestamps: true })

export const ProductModel = mongoose.model("Product", ProductSchema)
