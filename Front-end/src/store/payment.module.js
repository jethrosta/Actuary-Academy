import MidtransService from "../services/midtrans.service.js";
import { cart } from "../db.js";

const cartItems = cart;
const currentCheckout = JSON.parse(localStorage.getItem('currentcheckout'));
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
    currentCheckout,
    pendingPayment,
  }),

  getters: {
    getCheckoutItems: () => {
      return currentCheckout.map(id => cartItems.find(item => item.id === id));
    },

    getCurrentPayment() {
      return this.getCheckoutItems.reduce((priceSum, item) => { return priceSum + parseInt(item.price)}, 0);
    },

  },

  actions: {
    async makePayment(method, provider, amount, token) {
      try {
        const id = 'order-test-' + `${Math.floor(Math.random() * 1000000)}`;
        const paymentRequest = MidtransService.selectPayment(method, provider, id, amount, token)
        const response = await MidtransService.makePayment(paymentRequest);
        const paymentData = { method: method, provider: provider, data: response.data };
        localStorage.setItem('paymentData', JSON.stringify(paymentData));
        return response;
      }
      catch (error) {
        throw new Error(error);
      }
    },

    getCartItems(ids) {
      const items = ids.map(id => cartItems.find(item => item.id === id));
      return items;
    },

    setCurrentCheckout(productIds) {
      localStorage.setItem('currentcheckout', JSON.stringify(productIds));
    },

    clearCurrentCheckout() {
      localStorage.removeItem('currentcheckout');
    },
  }
}
