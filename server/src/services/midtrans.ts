import { MidtransResponse } from '../db/midtrans';

export const index = () => MidtransResponse.find();
export const show = (id: string) => MidtransResponse.findById(id);
