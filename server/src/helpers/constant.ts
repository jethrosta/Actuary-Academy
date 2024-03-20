import dotenv from "dotenv";

dotenv.config();

export const PENDING_PAYMENT = 'PENDING_PAYMENT';
export const PAID = 'PAID';
export const CANCELLED = 'CANCELLED';

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const FRONT_END_URL = process.env.FRONT_END_URL
export const MIDTRANS_APP_URL = process.env.MIDTRANS_APP_URL;
export const MIDTRANS_API_URL = process.env.MIDTRANS_API_URL;
export const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;