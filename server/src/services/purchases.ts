import { PurchaseModel } from "../db/purchases";

export const CreatePurchase = (values: Record<string, any>) => new PurchaseModel(values).save().then((item) => item.toObject());

export const Purchase = () => PurchaseModel.find();

export const PurchaseById = (id: string) => PurchaseModel.findById(id);

export const UpdatePurchase = (id: string, values: Record<string, any>) => PurchaseModel.findByIdAndUpdate({_id: id}, values, {new: true});

export const DeletePurchase = (id: string) => PurchaseModel.findByIdAndDelete(id);
