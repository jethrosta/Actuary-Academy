import axios from 'axios';

export default new class MidtransService {

  async makePayment(request) {
    try {
        const response = await axios.post('http://localhost:8080/v2/payment', request);
        if (response.status !== 200) {
          throw new Error(error);
        }
        else { return response }
    } catch (error) {
        throw new Error(error);
    }
  };

  selectPayment(method, provider, orderId, grossAmount, token) {
    switch (method) {
      case 'bankTransfer':
        return this.selectBankTransfer(provider, orderId, grossAmount);
      case 'eWallet':
        return this.selectEwallet(provider, orderId, grossAmount);
      case 'directDebit':
        return this.selectDirectDebit(provider, orderId, grossAmount);
      case 'creditCard':
        return this.selectCreditCard(provider, orderId, grossAmount);
      case 'overTheCounter':
        return this.selectOverTheCounter(provider, orderId, grossAmount);
      default: break;
      }
  };

  selectBankTransfer(bank, orderId, grossAmount) {
    switch (bank) {
      case 'bca': {
        let req = midtransRequests.bankVa.bca;
        req.transaction_details.order_id = orderId;
        req.transaction_details.gross_amount = grossAmount;
        return req;
      }
      case 'bni': {
        let req = midtransRequests.bankVa.bni;
        req.transaction_details.order_id = orderId;
        req.transaction_details.gross_amount = grossAmount;
        return req;
      }
      case 'briva': {
        let req = midtransRequests.bankVa.bni;
        req.transaction_details.order_id = orderId;
        req.transaction_details.gross_amount = grossAmount;
        return req;
      }
      case 'mandiri': {
        let req = midtransRequests.bankVa.mandiri;
        req.transaction_details.order_id = orderId;
        req.transaction_details.gross_amount = grossAmount;
        return req;
      }
      default: return 'Invalid Bank';
    }
  }

  selectEwallet(ewallet) {
    switch (ewallet) {
      case 'shopeePay':
        return midtransRequests.eWallet.shopeePay;
      case 'gopay':
        return midtransRequests.eWallet.gopay;
      default: break;
    }
  }

  selectDirectDebit(directDebit) {
    switch (directDebit) {
      case 'bcaKlikPay':
        return midtransRequests.directDebit.bcaKlikPay;
      case 'briMo':
        return midtransRequests.directDebit.briMo;
      default: break;
    }
  }

  selectCreditCard(creditCard) {
    return midtransRequests.creditCard;
  }

  selectOverTheCounter(overTheCounter) {
    switch (overTheCounter) {
      case 'indomart':
        return midtransRequests.overTheCounter.indomart;
      case 'alfamart':
        return midtransRequests.overTheCounter.alfamart;
      default: break;
    }
  }
}

const midtransRequests = {
  bankVa: {
    'bca': {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: "",
        gross_amount: 0
      },
      bank_transfer: {
        bank: "bca"
      }
    },
    'bni': {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: "",
        gross_amount: 0
      },
      bank_transfer: {
        bank: "bni"
      }
    },
    'bri': {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: "",
        gross_amount: 0
      },
      bank_transfer: {
        bank: "bri"
      }
    },
    'mandiri': {
      payment_type: "echannel",
      transaction_details: {
        order_id: "",
        gross_amount: 0
      },
      echannel: {
        bill_info1: "Payment",
        bill_info2: ""
      }
    }
  },
  eWallet: {
    'shopeePay': {
      payment_type: "shopeepay",
      transaction_details: {
        order_id: "",
        gross_amount: 0
      },
      item_details: [
        {
          id: "",
          price: 0,
          quantity: 1,
          name: ""
        }
      ],
      customer_details: {
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
      },
      shopeepay: {
        callback_url: "http://actuary.com/payments/pending-payment"
      }
    },
    'gopay': {
      payment_type: "gopay",
      transaction_details: {
        order_id: "order03",
        gross_amount: 275000
      },
      item_details: [
        {
          id: "id1",
          price: 275000,
          quantity: 1,
          name: "Bluedio H+ Turbine Headphone with Bluetooth 4.1 -"
        }
      ],
      customer_details: {
        first_name: "Budi",
        last_name: "Utomo",
        email: "budi.utomo@midtrans.com",
        phone: "081223323423"
      },
      gopay: {
        enable_callback: true,
        callback_url: "someapps://callback"
      }
    },
  },
  directDebit: {
    'bcaKlikPay': {
      payment_type: "bca_klikpay",
      transaction_details: {
        order_id: "orderid-01",
        gross_amount: 11000
      },
      item_details: [
        {
          id: "1",
          price: 11000,
          quantity: 1,
          name: "Mobil"
        }
      ],
      customer_details: {
        first_name: "John",
        last_name: "Baker",
        email: "john.baker@email.com",
        phone: "08123456789"
      },
      bca_klikpay: {
        description: "Pembelian Barang"
      }
    },
    'briMo': {
      payment_type: "bri_epay",
      transaction_details: {
        order_id: "2014111702",
        gross_amount: 11000
      },
      item_details: [
        {
          id: "1",
          price: 11000,
          quantity: 1,
          name: "Mobil"
        }
      ],
      customer_details: {
        first_name: "Andri",
        last_name: "Litani", // Optional
        email: "andri@litani.com",
        phone: "081122334455"
      }
    }
  },
  creditCard: {
    payment_type: "credit_card",
    transaction_details: {
      order_id: "C17550",
      gross_amount: 0
    },
    credit_card: {
      token_id: "<your token ID>"
    },
    item_details: [
      {
        id: "a1",
        price: 145000,
        quantity: 2,
        name: "Apel",
        brand: "Fuji Apple",
        category: "Fruit",
        merchant_name: "Fruit-store"
      }
    ],
    customer_details: {
      first_name: "BUDI",
      last_name: "UTOMO",
      email: "test@midtrans.com",
      phone: "+628123456",
      billing_address: {
        first_name: "BUDI",
        last_name: "UTOMO",
        email: "test@midtrans.com",
        phone: "081 2233 44-55",
        address: "Sudirman",
        city: "Jakarta",
        postal_code: "12190",
        country_code: "IDN"
      },
      shipping_address: {
        first_name: "BUDI",
        last_name: "UTOMO",
        email: "test@midtrans.com",
        phone: "0 8128-75 7-9338",
        address: "Sudirman",
        city: "Jakarta",
        postal_code: "12190",
        country_code: "IDN"
      }
    }
  },
  overTheCounter: {
    'indomart': {
      payment_type: "cstore",
      transaction_details: {
        gross_amount: 162500,
        order_id: "order04"
      },
      cstore: {
        store: "Indomaret",
        message: "Tiket1 transaction"
      },
      customer_details: {
        first_name: "Budi",
        last_name: "Utomo",
        email: "budi.utomo@midtrans.com",
        phone: "0811223344"
      },
      item_details: [
        {
          id: "id1",
          price: 162500,
          quantity: 1,
          name: "tiket1"
        }
      ]
    },
    'alfamart': {
      payment_type: "cstore",
      transaction_details: {
        gross_amount: 162500,
        order_id: "order05"
      },
      cstore: {
        store: "alfamart",
        alfamart_free_text_1: "Thanks for shopping with us!",
        alfamart_free_text_2: "Like us on our Facebook page,",
        alfamart_free_text_3: "and get 10% discount on your next purchase."
      },
      customer_details: {
        first_name: "Budi",
        last_name: "Utomo",
        email: "budi.utomo@midtrans.com",
        phone: "0811223344"
      },
      item_details: [
        {
          id: "id1",
          price: 162500,
          quantity: 1,
          name: "tiket2"
        }
      ]
    }
  }
}

