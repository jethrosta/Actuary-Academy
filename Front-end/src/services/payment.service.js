import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const user = JSON.parse(localStorage.getItem('user'));

class PaymentService {

    async getCart() {
        try {
            const res = await axios.get(API_URL + 'cart/' + user._id, { withCredentials: true });
            return res.data;
        }
        catch (error) {
            console.log('failed to get cart items')
            throw new Error(error);
        }
    }

    async getOrderItems(ids) {
        try {
            const res = await axios.post(API_URL + 'orderitems/', { itemIds: ids });
            return res.data;
        } catch (error) {
            console.log('failed to get selected items')
            throw new Error(error);
        }
    }

    async createOrder(req) {
        try {
            const res = await axios.post(API_URL + 'createorder', req, { withCredentials: true });
            return res;
        }
        catch (error) {
            throw new Error(error);
        }
    } 
    
    async getCurrentPaymentData() {
        try {
            const paymentId = JSON.parse(localStorage.getItem('pending-payment')).identifier;
            const res = await axios.get(API_URL + 'invoice/' + paymentId, { withCredentials: true });
            return res;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new PaymentService();
