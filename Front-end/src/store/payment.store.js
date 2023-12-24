import { cart } from "../db.js";
import { toRaw } from 'vue';
import axios from 'axios';
import PaymentService from '../services/payment.service.js';

const user = JSON.parse(localStorage.getItem('user'));

export const payment = {
  id: 'payment',
  state: () => ({
    cartItems: null,
    payment: {},
    paymentResponse: {},
    orderItems: null,
    pendingPayment: { status: false, message: null, data: null },
    pendingPaymentSuccess: false,
    allPayment: null,
    paymentById: null,
    paymentMethod: null,
  }),

  getters: {
    getOrderItems: (state) => {
      return state.orderItems;
    },
    getPendingPayment: (state) => {
      return state.pendingPayment;
    },
    getPaymentStatus: (state) => {
      return state.pendingPaymentSuccess;
    },
    getAllPayment: (state) => {
      return state.allPayment;
    },
    getCart: (state) => {
      return state.cartItems;
    },
    getPaymentById: (state) => {
      return state.paymentById;
    },
    getPaymentMethod: (state) => {
      return state.paymentMethod;
    }
  },

  actions: {

    async setCart() {
      try {
        const res = await PaymentService.getCart();
        this.cartItems = res.data.userCart;
        console.log(res.data.message);
      } catch (err) {
        this.cartItems = null;
        console.log(err);
      }
    },

    async setOrder(channel) {
      try {
        const ids = this.orderItems.map(item => item._id);
        const req = { userId: user._id, payment_channel: channel, items_ids: ids }
        const res = await PaymentService.makeOrder(req);
        console.log(res);
        this.pendingPayment.status = true
      }
      catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    async setOrderItems(ids) {
      try {
        const res = await PaymentService.getOrderItems(ids);
        this.orderItems = Array.isArray(res) ? res : [res];
      } catch (error) {
        this.orderItems = [];
        console.log(error);
      }
    },

    async setPendingPayment() {
      try {
        const res = await PaymentService.getPendingPayment();
        this.pendingPayment.status = res.data.status;
        this.pendingPayment.message = res.data.message;
        this.pendingPayment.data = res.data.data;
        console.log(res);
      } catch (error) {
        throw new Error(error);
      }
    },

    async setAllPayment() {
      try {
        const res = await PaymentService.getAllPayment();
        this.allPayment = res.data;
        console.log(res);
      } catch (error) {
        this.allPayment = null;
        console.log(error);
      }
    },

    async setPaymentById(id) {
      try {
        const res = await PaymentService.getPaymentById(id);
        console.log(res);
        this.paymentById = res.data;
      } catch (error) {
        this.paymentById = null;
        console.log(error);
      }
    },

    setPaymentMethod(channel) {
      this.paymentMethod = channel;
    },

    async updatePaymentStatus() {
      console.log('it works')
    },


  }
};
