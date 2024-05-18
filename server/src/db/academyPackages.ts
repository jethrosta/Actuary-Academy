import mongoose from "mongoose";
import Joi from "joi";

export const productSchemaValidate = Joi.object({
    name: Joi.string(),
    originalPrice: Joi.number(),
    price: Joi.number(),
    quantity: Joi.number(),
})

export interface ProductDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    originalPrice: number;
    price: number;
    quantity: number;
}

const academyPackages = ['Paket Pembahasan Soal 6 Bulan', 'Paket Lengkap 6 Bulan',
                         'Paket Pembahasan Soal Lifetime', 'Paket Lengkap Lifetime'];

const ProductSchema = new mongoose.Schema<ProductDocument>({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: { 
        type: String, 
        required: true,
        enum: academyPackages,
        unique: true
    },
    originalPrice: { type: Number },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 }    // requirements from midtrans
}, { timestamps: true });

export const ProductModel = mongoose.model("Product", ProductSchema)
