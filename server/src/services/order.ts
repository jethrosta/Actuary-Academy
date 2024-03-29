import mongoose from "mongoose";
import { OrderModel, OrderItemModel } from "../db/order";
import { UserModel } from "../db/users";
import { PENDING_PAYMENT } from "../helpers/constant";

class orderService {
    async CreateOrder(orderId: string,
                      grossAmount: number, 
                      email: string,
                      snap_token: string = null,
                      snap_redirect_url: string = null) {
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try {
            const user = await UserModel.findOne({ email });

            const order = await OrderModel.create([{
                _id: orderId,
                total: grossAmount,
                order_status: PENDING_PAYMENT,
                customer_details: user.email,
                snap_token: null,
                snap_redirect_url: null,
            },], { session });

            await session.commitTransaction();
            return order[0];
        } catch (err) {
            await session.abortTransaction();
            console.error("Error at services/order: ", err);
            throw err;
        } finally {
            session.endSession();
        }
    }

    async CreateOrderItem(orderItems: any[]) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const createOrderItems = await OrderItemModel.create(
                orderItems, { session }
            );

            await session.commitTransaction();
            return createOrderItems;
        } catch (err) {
            session.abortTransaction();
            console.error("Error at services/order: ", err);
            throw err;
        } finally {
            session.endSession();
        }
    }

    async GetOrders() {
        try {
            const order = await OrderModel.find();
            
            return order;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async GetOrderItems() {
        try {
            const orderItem = await OrderItemModel.find();

            return orderItem;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async GetOrderById(orderId: string) {
        try {
            const order = await OrderModel.findById(orderId).populate('customer_details');

            return order;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async GetUserIdByOrderId(orderId: string) {
        try {
            const order = await OrderModel.findById(orderId).populate('customer_details');

            return order.customer_details;
        } catch (err) {
            console.error("Error at service/order: ", err);
            throw err;
        }
    }

    async GetOrderItemByOrderId(orderId: string) {
        try {
            const orderItem = await OrderItemModel.findOne({ 
                order_id: orderId
            })

            return orderItem;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async UpdateOrderStatus(orderId: string, orderStatus: string, paymentMethod: string = null) {
        try {
            const order = await OrderModel.findOneAndUpdate({ order_id: orderId }, { order_status: orderStatus, payment_method: paymentMethod }, { new: true });

            if(!order) return "Order not found."

            return order;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async DeleteOrder(orderId: string) {
        try {
            const order = await OrderModel.findByIdAndDelete(orderId);

            if (!order) return "Failed to delete order.";

            return "Order deleted successfully.";
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }
}

export const orderServices = new orderService();
