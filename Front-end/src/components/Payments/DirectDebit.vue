<template>
    <div class="p-20 gap-2 font-inter text-lg text-black max-w-[1500px] mx-auto items-center justify-center">
        <div class="flex flex-col gap-8">
            <Form @submit="getCardToken" :validation-schema="cardValidationSchema"
                class="flex flex-col w-full gap-y-4 p-10 shadow-2xl shadow-gray-400 bg-white rounded-xl">
                <div class="">Detail Kartu</div>
                <div class="flex flex-col gap-1 w-full">
                    <span class="text-main_blue">Nomor Kartu</span>
                    <Field name="card_number" type="number" v-model="cardInfo.card_number" placeholder="123412341234"
                        class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" />
                    <ErrorMessage name="card_number" component="div" className="text-red-500" />
                    <span class="text-main_blue">Nama di Kartu</span>
                    <Field name="card_holder" type="text" v-model="cardInfo.card_holder" placeholder="Nama Anda"
                        class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" />
                    <ErrorMessage name="card_holder" component="div" className="text-red-500" />
                </div>
                <div class="flex justify-between flex-row w-full">
                    <div class="flex gap-1 flex-col w-2/3">
                        <span class="text-main_blue">Tanggal Kedaluwarsa</span>
                        <div class="flex flex-row gap-x-4">
                            <Field name="card_exp_month" type="number" v-model="cardInfo.card_exp_month" placeholder="mm"
                                class="flex w-1/3 focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" />
                            <Field name="card_exp_year" type="number" v-model="cardInfo.card_exp_year" placeholder="yyyy"
                                class="flex w-1/3 focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" />
                        </div>
                        <ErrorMessage name="card_exp_year" component="div" className="text-red-500" />
                    </div>
                    <div class="flex flex-col gap-1 w-1/3 items-left">
                        <span class="text-main_blue">CVV</span>
                        <Field name="card_cvv" type="number" v-model="cardInfo.card_cvv" placeholder="123"
                            class="flex focus:bg-gray-200 outline-1 outline-gray-400 border-[1.5px] border-gray-400 focus:text-black focus:font-bold text-gray-600 rounded-xl px-4 py-3" />
                        <ErrorMessage name="card_cvv" component="div" className="text-red-500" />
                    </div>
                </div>
                <div class="flex gap-3">
                    <button type="reset" class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">Cancel</button>
                    <button type="submit" class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">Update</button>
                </div>
            </Form>
            <div class="flex flex-col w-full gap-2 items-center gap-y-4 p-10 shadow-2xl shadow-gray-400  bg-white rounded-xl ">
                <div class="font-bold">Metode Pembayaran: </div>
                <div class="flex"> Credit Card: {{ route.params.providerName }}</div>
                <div class="text-red-500 pr-4 py-4">{{ errorMessage }}</div>
                <div class="flex gap-4">
                    <button @click="router.go(-1)" class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">
                        Cancel</button>
                    <button @click="makePayment" class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">
                        Buat Tagihan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import router from '../../router';
import axios from 'axios';
import { RouterLink, useRoute } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup"
import { usePaymentStore } from '../../store';

const route = useRoute()
const store = usePaymentStore()


// Dynamic data
const localPaymentData = ref({})
const cardToken = ref('')
const errorMessage = ref('');

const paymentData = computed(() => { store.getCurrentPayment() }) 

async function makePayment() {
    try {
        const bank = route.params.providerName.toLowerCase()
        const response = await store.makePayment('creditCard', bank, paymentData.value.amount)
        console.log(response)
        router.push('/payments/pending-payment').then(() => router.go(0))
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        console.error(error)
    }
}

//Setup Functions
onMounted(() => {
    loadMidtransScript();
})

//Card Data & Functions
const cardInfo = ref({
    card_number: '',
    card_holder: '',
    card_exp_month: '',
    card_exp_year: '',
    card_cvv: '',
});

const getCardToken = () => {
    if (typeof MidtransNew3ds !== 'undefined') {
        const cardData = {
            card_number: parseInt(cardInfo.value.card_number, 10),
            card_holder: cardInfo.value.card_holder,
            card_exp_month: parseInt(cardInfo.value.card_exp_month, 10),
            card_exp_year: parseInt(cardInfo.value.card_exp_year, 10),
            card_cvv: parseInt(cardInfo.value.card_cvv, 10)
        }
        MidtransNew3ds.getCardToken(cardData, options);
    } else {
        console.error('Midtrans script is not loaded.');
    }
};

//Helpers
const loadMidtransScript = () => {
    const script = document.createElement('script');
    script.id = 'midtrans-script';
    script.type = 'text/javascript';
    script.src = 'https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js';
    script.setAttribute('data-environment', 'sandbox');
    script.setAttribute('data-client-key', 'SB-Mid-client-ZekY0nyaDfOnwd8A'); // Replace with your actual client key
    document.head.appendChild(script);
};

const options = {
    onSuccess: (response) => {
        console.log('Success:', response);
        cardToken.value = response.token_id;
    },
    onFailure: (response) => {
        console.error('Failure:', response);
    },
    onError: (response) => {
        console.error('Error:', response);
    }
}

const cardValidationSchema = yup.object().shape({
    card_number: yup.string().required("Nomor Kartu diperlukan!").matches(/^\d{16}$/, "Nomor Kartu harus 16 digit!"),
    card_holder: yup.string(),
    card_exp_month: yup.string().required("Tanggal Kedaluwarsa diperlukan!").max(2, "Tanggal Kedaluwarsa tidak valid!"),
    card_exp_year: yup.string().required("Tanggal Kedaluwarsa diperlukan!").max(4, "Tanggal Kedaluwarsa tidak valid!"),
    card_cvv: yup.string().required("CVC diperlukan!").max(3, "CVC tidak valid!"),
});

</script>