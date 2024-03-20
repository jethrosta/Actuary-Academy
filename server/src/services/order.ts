import mongoose from "mongoose";
import { OrderModel, OrderItemModel } from "../db/order";
import { ProductModel } from "../db/academyPackages";
import { UserModel } from "../db/users";
import { PENDING_PAYMENT } from "../helpers/constant";

class orderService {
    async CreateOrder(grossAmount: number, 
                            email: string,
                            orderCode: string,
                            snap_token: string = null,
                            snap_redirect_url: string = null) {
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try {
            const user = await UserModel.findOne({ email });

            const order = await OrderModel.create([{
                _id: new mongoose.Types.ObjectId(),
                order_id: orderCode,
                total: grossAmount,
                order_status: PENDING_PAYMENT,
                customer_email: user.email,
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

    async GetOrderByOrderCode(orderCode: string) {
        try {
            const order = await OrderModel.findOne({ order_id: orderCode }).populate('customer_email');

            return order;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async GetOrderItemById(orderItemId: string) {
        try {
            const orderItem = (await OrderItemModel.findById({ _id: orderItemId })).populate('product_details');

            return orderItem;
        } catch (err) {
            console.error("Error at services/order: ", err);
            throw err;
        }
    }

    async UpdateOrderStatus(orderCode: string, orderStatus: string, paymentMethod: string = null) {
        try {
            const order = await OrderModel.findOneAndUpdate({ order_id: orderCode }, { order_status: orderStatus, payment_method: paymentMethod }, { new: true });

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
