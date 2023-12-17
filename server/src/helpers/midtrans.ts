import { badRequestResponse } from "./api-response";

const requestBRIBCABNI = (channel: string) => ({
    bank_transfer: {
        bank: channel,
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
        callback_url: 'https://www.actuaryacademy.com',
    },
});

const requestIndoAlfa = (channel: string) => ({
    cstore: {
        store: channel,
        message: 'Purchasing Actuary Academy online courses.'
    },
});

const summarizeItems = (items: any) => {
    return items.map((item: any) => ({
        name: 'asdasdasd',
        price: 900000,
        quantity: 1,
    }));
}

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
