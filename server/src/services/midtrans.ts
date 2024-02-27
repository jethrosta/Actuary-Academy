import { MidtransResponse } from '../db/midtrans';

export const createMidtransResponse = (values: Record<string, any>) => new MidtransResponse(values).save().then((item) => item.toObject());

export const getMidtransResponse = () => MidtransResponse.find();

export const midtransResponseById = (id: string) => MidtransResponse.findById(id);

export const updateMidtransResponse = (id: string, values: Record<string, any>) => MidtransResponse.findByIdAndUpdate({_id: id}, values, {new: true});

export const deleteMidtransResponse = (id: string) => MidtransResponse.findByIdAndDelete(id);
