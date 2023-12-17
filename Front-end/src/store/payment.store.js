import { cart } from "../db.js";
import { toRaw } from 'vue';
import axios from 'axios';
import PaymentService from '../services/payment.service.js';
import { useAuthStore } from './';

const localPending = JSON.parse(localStorage.getItem('pending-payment'));
const pendingPayment = localPending
  ? { status: true, data: localPending }
  : { status: false, data: null }

export const payment = {
  id: 'payment',
  state: () => ({
    cartItems: null,
    payment: {},
    paymentResponse: {},
    checkoutItems: [],
    pendingPayment,
    pendingPaymentSuccess: false,
  }),

  getters: {
    // checkoutAmount: (state) => {
    //   if (state.paymentState.checkoutItems.length == 0) { return 0; }
    //   else { return state.paymentState.checkoutItems.map(item => item.price).reduce((sum, price) => sum + price, 0) }
    // },
    getCheckoutItems: (state) => {
      return state.checkoutItems;
    },
    getPendingPayment: (state) => {
      return state.pendingPayment;
    },
    getPaymentStatus: (state) => {
      return state.pendingPaymentSuccess;
    }
  },

  actions: {
    async createOrder(channel) {
      try {
        const user = useAuthStore().getUser;
        const ids = this.checkoutItems.map(item => item._id);
        const req = { userId: user._id, payment_channel: channel, items_ids: ids }
        const res = await PaymentService.createOrder(req);
        localStorage.setItem('pending-payment', JSON.stringify(res.data));
        console.log(res);
        this.pendingPayment.data = res.data;
        this.pendingPayment.status = true;
        return res.data;
      }
      catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    async getCart() {
      try {
        const res = await PaymentService.getCart();
        this.cartItems = res;
        console.log(res);
      } catch (err) {
        this.cartItems = null;
        console.log(err);
      }
    },

    async getOrderItems(ids) {
      try {
        const res = await PaymentService.getOrderItems(ids);
        this.checkoutItems = res;
      } catch (error) {
        this.checkoutItems = [];
        console.log(error);
      }
    },

    async updatePaymentStatus() {
      console.log('it works')
    },

    async getCurrentPayment() {
      try {
        const res = await PaymentService.getCurrentPaymentData();
        console.log(res);
      } catch (error) {
        throw new Error(error);
      }
    }

  }
};
