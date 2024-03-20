import express from "express";
import { nanoid } from "nanoid";
import crypto from "crypto";

import { orderServices } from "../services/order";
import { productServices } from "../services/academyPackages";
import { getUserByEmail } from "../services/users";
import { ProductModel } from "../db/academyPackages";

import { FRONT_END_URL, MIDTRANS_APP_URL, MIDTRANS_SERVER_KEY, PENDING_PAYMENT, PAID, CANCELLED } from "../helpers/constant";

export const createOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { products, customer_email } = req.body;

        // ObjectId().toString() somehow doesnt work
        // const productsFromDB = await productServices.GetProductById(products);
        const productsFromDB = await ProductModel.find({ 
            _id: { 
                $in: products.map((product: { id: string; }) => product.id) 
            } 
        });

        if (productsFromDB.length === 0) {
            return res.status(400).json({ message: "Product not found." });
        }

        const user = await getUserByEmail(customer_email);
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        const orderCode = `ORDER-AA-${nanoid(4)}-${nanoid(8)}`;

        const grossAmount = productsFromDB.reduce((acc, product) => acc + product.price, 0);
        
        const authString = btoa(`${MIDTRANS_SERVER_KEY}:`)

        const payload = {
            transaction_details: {
                order_id: orderCode,
                gross_amount: grossAmount
            },
            item_details: productsFromDB.map((products) => ({
                id: products._id,
                name: products.name,
                quantity: products.quantity,
            })),
            customer_details: {
                first_name: user.name,
                email: user.email,
            },
            callbacks: {
                finish: `${FRONT_END_URL}/order-status?order-id=${orderCode}`,
                error: `${FRONT_END_URL}/order-status?order-id=${orderCode}`,
                pending: `${FRONT_END_URL}/order-status?order-id=${orderCode}`,
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
        })

        const data = await response.json();
        if (response.status !== 201) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to create transaction'
            })
        }

        // Create order
        const order = await orderServices.CreateOrder(
            grossAmount,
            user.email,
            data.token,
            data.redirect_url,
        );

        // Create order items
        const orderItems = productsFromDB.map((product) => ({
            order_id: orderCode,
            product_id: product._id,
            product_name: product.name,
            product_price: product.price,
        }));
        const createdOrderItems = await orderServices.CreateOrderItem(orderItems);

        res.status(201).json({
            message: "Order created successfully",
            data: {
                order_id: orderCode,
                total: grossAmount,
                customer_name: user.name,
                customer_email: user.email,
                products: createdOrderItems,
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

export const getOrderByOrderCode = async (req: express.Request, res: express.Response) => {
    try {
        const { order_id } = req.params
        const order = await orderServices.GetOrderByOrderCode(order_id);

        
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
        const orderId = req.params.id;
        const orderStatus = req.body.order_status;

        const order = await orderServices.UpdateOrderStatus(orderId, orderStatus);
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

const updateStatusBasedOnMidtransResponse = async (orderCode: string, data: any) => {
    const hash = crypto.createHash('sha512').update(`${orderCode}${data.status_code}${data.gross_amount}${MIDTRANS_SERVER_KEY}`).digest('hex');
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
            const order = await orderServices.UpdateOrderStatus(orderCode, PAID, data.payment_type);
            responseData = order;
        }
    } else if (orderStatus == 'settlement') {
        const order = await orderServices.UpdateOrderStatus(orderCode, PAID, data.payment_type);
        responseData = order;
    } else if (orderStatus == 'cancel' || orderStatus == 'deny' || orderStatus == 'expire') {
        const order = await orderServices.UpdateOrderStatus(orderCode, CANCELLED);
        responseData = order;
    } else if (orderStatus == 'pending') {
        const order = await orderServices.UpdateOrderStatus(orderCode, PENDING_PAYMENT);
        responseData = order;
    }

    return {
        status: 'success',
        data: responseData,
    }
}

export const orderNotification = async (req: express.Request, res: express.Response) => {
    const data = req.body;

    orderServices.GetOrderByOrderCode(data.order_id).then((order) => {
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
