import mongoose from "mongoose";
import { ProductModel } from "../db/academyPackages";

class productService {
    async CreateProduct(productName: string, realAmount: number, amount: number) {
        try {
            const product = new ProductModel({
                _id: new mongoose.Types.ObjectId().toHexString(),
                name: productName,
                originalPrice: realAmount,
                price: amount,
            });

            await product.save();
        } catch (err) {
            console.error("Error at services/products: ", err);
            process.exit(1);
        }
    }

    async GetProducts() {
        try {
            const products = await ProductModel.find();

            return products;
        } catch (err) {
            console.error("Error at services/products: ", err);
            process.exit(1);
        }
    }

    async GetProductById(productId: string) {
        try {
            const product = await ProductModel.findById(productId);

            if(!product) return "Product not found.";

            return product;
        } catch (err) {
            console.error("Error at services/products: ", err);
            process.exit(1);
        }
    }

    async UpdateProductById(productId: string, data: any) {
        try {
            const product = await ProductModel.findByIdAndUpdate({ _id: productId }, data, { new: true });

            if(!product) return "Product not found.";

            return product;
        } catch (err) {
            console.error("Error at services/products: ", err);
            process.exit(1);
        }
    }

    async DeleteProduct(productId: string) {
        try {
            const product = await ProductModel.findByIdAndDelete(productId);

            if(!product) return "Product not found.";

            return "Product deleted succesfully";
        } catch (err) {
            console.error("Error at services/products: ", err);
            process.exit(1);
        } 
    }
}

export const productServices = new productService();