import { defineStore } from "pinia";
import { auth } from "./auth.module";
import { payment } from "./payment.module";

export const useStore = defineStore(auth)
export const usePaymentStore = defineStore(payment)