import { defineStore } from "pinia";
import { auth } from "./auth.module";
import { payment } from "./payment.module";

export const useStore = defineStore('store', {
    state: () => ({
        loading: false,
        authState: auth.state(),
        paymentState: payment.state(),
    }),

    actions: {
        loadingStart() {
            this.loading = true;
        },

        loadingEnd() {
            this.loading = false;
        },
        
        ...auth.actions,
        ...payment.actions,
    },

    getters: {
        isLoading: (state) => state.loading,
        ...auth.getters,
        ...payment.getters,
    },
})