import { defineStore } from "pinia";
import { auth } from "./auth.store";
import { payment } from "./payment.store";
import { userStore } from "./user.store";

export const useAuthStore = defineStore(auth);
export const usePaymentStore = defineStore(payment);
export const useUserStore = defineStore(userStore);