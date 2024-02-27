import { CartModel } from "../db/cart";
import { UserModel } from "../db/users";
import { PurchaseModel } from "../db/purchases";
// import { CourseModel } from "../db/courses";

export const addToCart = async (userId: string, purchaseId: string, quantity: number = 1) => {
    const existingCartItem = await CartModel.findOne({ userId, purchaseId });

    if (existingCartItem) {
        existingCartItem.quantity += quantity;
        
        return await existingCartItem.save();
    } else {
        const cartItem = new CartModel({ userId, purchaseId, quantity });
        return await cartItem.save();
    }
}

export const getCarts = (userId: string) => CartModel.find({ userId }).populate('purchaseId');

export const removeFromCart = (userId: string, cartItemId: string) => CartModel.findByIdAndRemove({
    userId,
    _id: cartItemId
})
