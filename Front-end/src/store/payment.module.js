import { cart } from "../db.js";
import { toRaw } from 'vue';
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
    checkoutItems: [],
    pendingPayment,
  }),

  getters: {
    checkoutAmount: (state) => {
      if (state.paymentState.checkoutItems.length == 0) { return 0; }
      else { return state.paymentState.checkoutItems.map(item => item.price).reduce((sum, price) => sum + price, 0) }
    },
  },

  actions: {
    async makePayment(method, channel) {
      try {
        const date = new Date();
        const rawDateString = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
        const invoice = 'test-order-' + rawDateString
        const summary = this.checkoutAmount
        const user = this.getUser()
        const items = toRaw(this.paymentState.checkoutItems)
        const request = { channel, invoice, summary, user, items }
        console.log(request);

        const response = await axios.post(API_URL, request);
        localStorage.setItem('pending-payment', JSON.stringify({ method: method, channel: channel, data: response.data }));
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

    getCheckoutItems() {
      return this.checkoutItems;
    },

    async setCheckoutItems(items) {
      this.paymentState.checkoutItems = items;
    },

  }
}
