<template>
    <div class="flex flex-col p-20 font-inter text-lg text-black max-w-[1500px] mx-auto items-center justify-center">
        <div class="flex flex-col w-2/3 gap-y-4 border-2 p-4 border-main_blue rounded-xl">
            <div class="font-bold text-xl">Detail Kartu</div>
            <div class="flex flex-col gap-1 w-full">
                <label class="text-main_blue">Nomor Kartu</label>
                <input type="text" v-model="cardInfo.card_number"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label class="text-main_blue">Nama di Kartu</label>
                <input type="text" v-model="cardInfo.card_holder"
                    class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
            </div>
            <div class="flex gap-1 justify-between w-full">
                <div class="flex flex-col">
                    <label class="text-main_blue">Tanggal Kedaluwarsa</label>
                    <div class="flex gap-2">
                        <input type="text" v-model="cardInfo.card_exp_month"
                            class="flex w-2/5 focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                        <input type="text" v-model="cardInfo.card_exp_year"
                            class="flex w-2/5 focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                    </div>
                </div>
                <div class="flex flex-col items-left">
                    <label class="text-main_blue">CVC</label>
                    <input type="text" v-model="cardInfo.card_cvv"
                        class="flex w-3/5 focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3">
                </div>

            </div>
            <div class="flex gap-3">
                <button class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">Cancel</button>
                <button class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">Update</button>
            </div>
        </div>

        <div class="py-2">
            <div class="font-bold">Metode Pembayaran: </div>
            <div>Direct Debit: {{ localPaymentData.provider }}</div>
        </div>
        <button @click="getCardToken" class="p-3 text-white font-bold bg-[#ff0000]">
            Buat Token
        </button>
        <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
            Buat Tagihan
        </button>
        <div>{{ errorMessage }}</div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import router from '../../router';
import axios from 'axios';

const loadMidtransScript = () => {
    const script = document.createElement('script');
    script.id = 'midtrans-script';
    script.type = 'text/javascript';
    script.src = 'https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js';
    script.setAttribute('data-environment', 'sandbox');
    script.setAttribute('data-client-key', 'SB-Mid-client-ZekY0nyaDfOnwd8A'); // Replace with your actual client key
    document.head.appendChild(script);
};

axios.get('http://localhost:8080/v2/card-data')
    .then((response) => {
        console.log(response.data);
        localStorage.setItem('card-data', JSON.stringify(response.data));
    })
    .catch((error) => {
        console.error(error);
    });

onMounted(() => {
    loadMidtransScript();
});

const cardInfo = ref({
    card_number: 0,
    card_holder: 'Nama',
    card_exp_month: 0,
    card_exp_year: 0,
    card_cvv: 0,
});

const options = {
    onSuccess: (response) => {
        console.log('Success:', response);
        paymentData.value.credit_card.token_id = response.token_id;
        localStorage.setItem('cardInfo', JSON.stringify(cardInfo.value));
        localStorage.setItem('cardToken', response.token_id);
    },
    onFailure: (response) => {
        console.error('Failure:', response);
    },
    onError: (response) => {
        console.error('Error:', response);
    }
}

const getCardToken = () => {
    if (typeof MidtransNew3ds !== 'undefined') {
        MidtransNew3ds.getCardToken(cardInfo.value, options);
    } else {
        console.error('Midtrans script is not loaded.');
    }
};

const paymentData = ref({
    payment_type: "debit_card",
    transaction_details: {
        gross_amount: 0,
        order_id: "test-transaction-54321",
    },
    credit_card:{
        token_id: '', 
    }
});

let localPaymentData = ref({})

onMounted(() => {
    getPendingData().then(() => {
        paymentData.value.transaction_details.gross_amount = localPaymentData.value.amount;
    })
    paymentData.value.credit_card.token_id = localStorage.getItem('cardToken');
})

async function getPendingData() {
    localPaymentData.value = await JSON.parse(localStorage.getItem('pendingPaymentData'))
}

const errorMessage = ref('');

async function makePayment() {
    
    try {
        console.log(paymentData.value)
        const paydata = JSON.stringify(paymentData.value);
        /*const response = await axios.post('http://localhost:8080/v2/payment',
            { paydata }
        );*/
        console.log(response.data);
        localStorage.setItem('paymentResponse', JSON.stringify(response.data));
        router.push({ name: "Pembayaran Saya" });
        localStorage.setItem('debitURL', response.data.redirect_url)
    } catch (error) {
        console.log(paymentData.value)
        localStorage.setItem('debitcardrequest', JSON.stringify(paymentData.value));
        //console.error(error);
        errorMessage.value = 'Terjadi Error';
    }
}

</script>