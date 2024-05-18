import express from "express";
import crypto from "crypto";
import { nanoid } from "nanoid";
import { ProductModel } from "../db/academyPackages";
import { orderServices } from "../services/order";
import { UpdateUserStatus, getUserById, getUserIdByEmail } from "../services/users";
import { RequestWithJWT } from "../middlewares";
import { FRONT_END_URL, MIDTRANS_APP_URL, MIDTRANS_SERVER_KEY, PENDING_PAYMENT, PAID, CANCELLED } from "../helpers/constant";

export const createOrder = async (req: express.Request & RequestWithJWT, res: express.Response) => {
    try {
        const { plan } = req.body;

        const user = await getUserById(req.userId);
        if (!user) return res.status(400).json({ message: "User not found." });
        
        const products = await ProductModel.find({ name: plan });
        if (products.length === 0) return res.status(400).json({ message: "Product not found." });

        const grossAmount = products.reduce((acc, products) => acc + products.price, 0);
        const orderId = `ORDER-AA-${nanoid(4)}-${nanoid(8)}`;
        const authString = btoa(`${MIDTRANS_SERVER_KEY}:`)
        const payload = {
            transaction_details: {
                order_id: orderId,
                gross_amount: grossAmount
            },
            item_details: products.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity
            })),
            customer_details: {
                first_name: user.name,
                email: user.email,
            },
            callbacks: {
                finish: `${FRONT_END_URL}/order-status?order-id=${orderId}`,
                error: `${FRONT_END_URL}/order-status?order-id=${orderId}`,
                pending: `${FRONT_END_URL}/order-status?order-id=${orderId}`,
            }
        }

        const response = await fetch(`${MIDTRANS_APP_URL}/snap/v1/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${authString}`
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (response.status !== 201) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to create transaction'
            })
        }

        // Order collection
        await orderServices.CreateOrder(orderId, grossAmount, user.email, data.token, data.redirect_url);

        // OrderItems collection
        const orderItems = products.map((product) => ({
            order_id: orderId,
            product_details: product.name,
        }));
        await orderServices.CreateOrderItem(orderItems);

        res.status(201).json({
            message: "Order created successfully",
            data: {
                order_id: orderId,
                total: grossAmount,
                customer_name: user.name,
                customer_email: user.email,
                plan: products,
                snap_token: data.token,
                snap_redirect_url: data.redirect_url,
            },
        });

    } catch (err) {
        console.error("Error at controllers/order: ", err);
        res.status(500).json({ error: "Something went wrong while create order" });
    }
}

export const getOrders = async (req: express.Request, res: express.Response) => {
    try {
        const order = await orderServices.GetOrders();

        return res.status(200).json(order);
    } catch (err) {
        console.error("Error at controllers/order: ", err);
        throw err;
    }
}

export const getOrderById = async (req: express.Request, res: express.Response) => {
    try {
        const { orderId } = req.params;
        const order = await orderServices.GetOrderById(orderId);
        if(!order) {
            return res.status(404).json({
                status: 'error',
                message: 'Order not found'
            })
        }

        return res.status(200).json(order);
    } catch (err) {
        console.error("Error at controllers/order: ", err);
        throw err;
    }
}

export const updateOrderStatus = async (req: express.Request, res: express.Response) => {
    try {
        const orderId = req.params.transaction_id;
        const orderStatus = req.body.order_status;

        const updatedOrder = await orderServices.UpdateOrderStatus(orderId, orderStatus);
        if(!updatedOrder) {
            return res.status(404).json({
                status: 'error',
                message: 'Update order failed'
            })
        }

        return res.status(200).json({
            message: 'Order status updated successfully',
            order: updatedOrder,
        });
    } catch (err) {
        console.error("Error at controllers/order: ", err);
        throw err;
    }
}

export const updateUserStatus = async (req: express.Request & RequestWithJWT, res: express.Response) => {
    try {
        const userId = req.userId;
        const plan = req.body.plan;     // plan = product.name (?)
        
        let expireAt = null;
        if (plan === 'Paket Pembahasan Soal 6 Bulan' || plan === 'Paket Lengkap 6 Bulan') {
            const currentDate = new Date();
            expireAt = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate());
        }

        const updatedUser = await UpdateUserStatus(userId, plan, expireAt);

        res.status(200).json({
            message: 'User status updated successfully',
            user: updatedUser,
        });
    } catch (err) {
        console.error("Error at controllers/user: ", err);
        throw err;
    }
}

const updateStatusBasedOnMidtransResponse = async (orderId: string, data: any) => {
    const hash = crypto.createHash('sha512').update(`${orderId}${data.status_code}${data.gross_amount}${MIDTRANS_SERVER_KEY}`).digest('hex');
    if (data.signature_key !== hash) {
        return {
            status: 'error',
            message: 'Invalid Signature Key.'
        }
    }

    let responseData = null;
    let orderStatus = data.transaction_status;
    let fraudStatus = data.fraud_status;

    if (orderStatus == 'capture') {
        if (fraudStatus == 'accept') {
            const order = await orderServices.UpdateOrderStatus(orderId, PAID, data.payment_type);
            responseData = order;

            // update user status
            // const userId = await getUserIdByEmail(order.customer_email);
            const userId = orderServices.GetUserIdByOrderId(orderId).toString();
            const plan = data.plan;             // data.plan == product.name (?)

            let expireAt = null;
            if (plan === 'Paket Pembahasan Soal 6 Bulan' || plan === 'Paket Lengkap 6 Bulan') {
                const currentDate = new Date();
                expireAt = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate());
            }
    
            const updatedUser = await UpdateUserStatus(userId, plan, expireAt);
            console.log(updatedUser);
        }
    } else if (orderStatus == 'settlement') {
        const order = await orderServices.UpdateOrderStatus(orderId, PAID, data.payment_type);
        responseData = order;
    } else if (orderStatus == 'cancel' || orderStatus == 'deny' || orderStatus == 'expire') {
        const order = await orderServices.UpdateOrderStatus(orderId, CANCELLED);
        responseData = order;
    } else if (orderStatus == 'pending') {
        const order = await orderServices.UpdateOrderStatus(orderId, PENDING_PAYMENT);
        responseData = order;
    }

    return {
        status: 'success',
        data: responseData,
    }
}

export const orderNotification = async (req: express.Request, res: express.Response) => {
    const data = req.body;

    orderServices.GetOrderById(data.order_id).then((order) => {
        if (order) {
            updateStatusBasedOnMidtransResponse(data.order_id, data).then(result => {
                console.log('result: ', result);                
            })
        }
    })

    res.status(200).json({
        status: 'success',
        message: 'OK',
    })
}
