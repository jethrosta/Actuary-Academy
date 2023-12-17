import { defineStore } from "pinia";
import { auth } from "./auth.store";
import { payment } from "./payment.store";

export const useAuthStore = defineStore(auth);
export const usePaymentStore = defineStore(payment);