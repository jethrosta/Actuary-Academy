import { cart } from "../db.js";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'payment/';

const cartItems = cart;
const localPending = JSON.parse(localStorage.getItem('pendingPayment'));
const pendingPayment = localPending
  ? { status: true, method: '', provider: '', data }
  : { status: false, method: 'na', provider: 'na', data: null }

export const payment = {
  id: 'payment',
  state: () => ({
    cartItems,
    payment: {},
    paymentResponse: {},
    checkoutItems: null,
    pendingPayment,
  }),

  getters: {
    
  },

  actions: {
    async makePayment(method, channel, amount) {
      try {
        const request = { method, channel, amount}
        const response = await axios.post(API_URL, request);
        localStorage.setItem('pendingPayment', JSON.stringify(response));
        console.log(response);
        return response;
      }
      catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    getCartItems() {
      return cartItems;
    },

    getCheckoutAmount() {
      if (this.checkoutItems == null) { return 0 }
      else { return this.checkoutItems.map(item => item.price).reduce((sum, price) => sum + price, 0) }
    },

    getCheckoutItems() {
      return this.checkoutItems;
    },
    
    async setCheckoutItems(items) {
      this.paymentState.checkoutItems = items;
    },

  }
}
