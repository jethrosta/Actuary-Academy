// TODO: refactor user services

import { UserModel } from "../db/users";

export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());

export const getUsers = () => UserModel.find();
export const getUserById = (id: string) => UserModel.findById(id).populate('cart');
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ "authentication.sessionToken.token": sessionToken, });
export const getUserByName = (name: string) => UserModel.findOne({ name });

export const updateUserbyId = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);

export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });


export const addToCart = (userId: string, purchaseId: string) => UserModel.findByIdAndUpdate(
    userId,
    { $push: { cart: purchaseId } },
    { new: true }
).populate('cart');

export const removeFromCart = (userId: string, purchaseId: string) => UserModel.findByIdAndUpdate(
    userId, 
    { $pull: { cart: purchaseId } },
    { new: true }
).populate('cart');

export const clearCart = (userId: string) => UserModel.findByIdAndUpdate(
    userId,
    { cart: [] },
    { new: true }
).populate('cart');
