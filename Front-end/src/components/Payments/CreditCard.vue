<template>
    <div class="flex flex-col p-20 gap-2 font-inter text-lg text-black max-w-[1500px] mx-auto items-center justify-center">
        <div class="flex flex-col py-2 gap-2 items-center">
            <div class="font-bold">Metode Pembayaran: </div>
            <div class="flex"> Credit Card: {{ route.params.providerName }}</div>
            <div class="text-red-600 flex flex-col">
                <h2 class="text-center">Kartu :</h2>
                <RouterLink to="../../payment-cards"
                    class="px-5 py-3 border-2 border-red-600 text-center font-bold rounded-full">
                    Masukkan Kartu Kredit
                </RouterLink>
            </div>
        </div>
        <div>{{ errorMessage }}</div>
        <div class="flex gap-4">
            <button @click="router.go(-1)" class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">
                Cancel</button>
            <button @click="makePayment" class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">
                Buat Tagihan</button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import router from '../../router';
import axios from 'axios';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()

// Main Request Based on Bank Route Param
const paymentRequest = ref({
    payment_type: 'credit_card',
    transaction_details: {
        order_id: '',
        gross_amount: 0
    },
    credit_card: {
        token_id: '',
        authentication: true
    }
});

// Dynamic data
const localPaymentData = ref({})
const cardToken = ref('')
const isToken = ref(false)
const errorMessage = ref('');

async function makePayment() {
    try {
        const response = await axios.post('http://localhost:8080/v2/payment', paymentRequest.value );
        console.log(response.data);
        localStorage.setItem('creditCardResponse', JSON.stringify(response.data));
        localStorage.setItem('pendingPaymentRequest', JSON.stringify(paymentRequest.value))

    } catch (error) {
        console.error(error);
        errorMessage.value = 'Terjadi Error';
    }
}

//Setup Functions
onMounted(() => {
    getPendingData()
        .then(() => {
            setPaymentRequest()
            isToken.value = true
        })
        .catch((err) => {
            console.log('some data not found!')
            console.log(err)
        })

})

async function getPendingData() {
    localPaymentData.value = await JSON.parse(localStorage.getItem('pendingPaymentData'))
    cardToken.value = localStorage.getItem('cardToken')
}

async function setPaymentRequest() {
    paymentRequest.value.credit_card.token_id = cardToken.value
    paymentRequest.value.transaction_details.gross_amount = localPaymentData.value.amount
    paymentRequest.value.transaction_details.order_id = 'order-id-node-' + Math.round((new Date()).getTime() / 1000)
}
</script>