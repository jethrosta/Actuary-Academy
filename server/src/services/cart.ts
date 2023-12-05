import { CartModel } from "../db/cart";
import { UserModel } from "../db/users";

export const addToCart = async (userId: string) => {
    try {
        const user = await UserModel.findById({ _id: userId }).exec();

        const courseId = 'A1 Matematika Keuangan';     // Should be adjusted as needed
        const cartItem = { course: courseId }         

        user.cart.push(cartItem);
        await user.save();
    } catch (err) {
        console.log(err);
    }
}

export const getCarts = async (userId: string) => {
    try {
        const user = await UserModel.findById({ _id: userId }).exec();

        if (!user) {
            console.error('User not found');
            return 'User not found';
        }

        const userCart = user.cart;

        return userCart;
    } catch (err) {
        console.log(err);
    }
}

export const updateCart = async (id: string, data: any) => {
    const cartUpdated = await CartModel.findByIdAndUpdate({_id: id}, data, {new: true});

    if (!cartUpdated) return "Cart not available"

    return cartUpdated;
}

export const removeFromCart = async (itemId: string) => {
    try {
        const removedItem = await CartModel.findByIdAndRemove(itemId);

        if (!removedItem) {
          return 'Item not found';
        }
    
        return 'Item removed successfully';
    } catch (err) {
        console.log(err);
        return 'Error removing item';
    }
}
