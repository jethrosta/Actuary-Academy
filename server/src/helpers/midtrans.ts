// const placeOrder = async (userId, cartId) => {
//     const session = await mongoose.startSession();
  
//     try {
//       await session.withTransaction(async () => {
//         // Retrieve user and cart
//         const user = await UserModel.findById(userId).session(session);
//         const cart = await CartModel.findById(cartId).populate('courses').session(session);
  
//         if (!user || !cart) {
//           throw new Error('User or cart not found');
//         }
  
//         // Calculate order total
//         const orderTotal = cart.courses.reduce((total, course) => total + course.price, 0);
  
//         // Create an order
//         const order = await OrderModel.create(
//           {
//             userId: user._id,
//             courses: cart.courses.map(course => course._id),
//             total: orderTotal,
//           },
//           { session }
//         );
  
//         // Simulate a payment (you can replace this with your actual payment gateway integration)
//         const payment = await PaymentModel.create(
//           {
//             orderId: order._id,
//             amount: orderTotal,
//             status: 'success', // Simulating a successful payment
//           },
//           { session }
//         );
  
//         // Clear the user's cart after a successful order
//         await CartModel.findByIdAndDelete(cartId).session(session);
  
//         console.log('Order placed successfully!');
//       });
  
//       console.log('Transaction was successful!');
//     } catch (error) {
//       console.error('Transaction failed:', error.message);
//     } finally {
//       await session.endSession();
//     }
// };
  

import { badRequestResponse } from "./api-response";

const requestBRIBCABNI = (channel: string) => ({
    bank_transfer: {
        bank: channel,
        va_number: '',
    },
});

const requestMandiri = (invoice: any) => ({
    echannel: {
        bill_info1: `Payment for invoice: ${invoice}`,
        bill_info2: 'Purchasing Actuary Academy online courses.',
    },
});

const requestPermata = (user: any) => ({
    bank_transfer: {
        bank: 'permata',
        permata: {
            recipient_name: user.name,
        },
    },
});

const requestGopay = () => ({
    gopay: {
        enable_callback: true,
        callback_url: 'https://www.midtrans.com',   // domain web Actuary Academy (?)
    },
});

const requestIndoAlfa = (channel: string) => ({
    cstore: {
        store: channel,
        message: 'Purchasing Actuary Academy online courses.'
    },
});

const payloads = (type: string, invoice: string, summary: any, user: any, items: any, requestChannel: any) => ({
    payment_type: type,
    transaction_details: {
        order_id: invoice,
        gross_amount: summary.sub_total.raw,
    },
    customer_details: {
        first_name: user.name,
        email: user.email,
    },
    item_details: items,
    ...requestChannel,
});

export const paymentRequestPayloads = (channel: string, invoice: string, summary: any, user: any, items: any) => {
    switch (channel) {
        case 'bri':
            return payloads('bank_transfer', invoice, summary, user, items, requestBRIBCABNI(channel));
        case 'bca':
            return payloads('bank_transfer', invoice, summary, user, items, requestBRIBCABNI(channel));
        case 'bni':
            return payloads('bank_transfer', invoice, summary, user, items, requestBRIBCABNI(channel));
        case 'mandiri':
            return payloads('echannel', invoice, summary, user, items, requestMandiri(invoice));
        case 'permata':
            return payloads('bank_transfer', invoice, summary, user, items, requestPermata(user));
        case 'gopay':
            return payloads('gopay', invoice, summary, user, items, requestGopay());
        case 'alfamart':
            return payloads('cstore', invoice, summary, user, items, requestIndoAlfa(channel));
        case 'indomaret':
            return payloads('cstore', invoice, summary, user, items, requestIndoAlfa(channel));
        default:
            throw badRequestResponse('Unsupported payment channel :(');
    }
}
