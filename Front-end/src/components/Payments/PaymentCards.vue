<template>
    <div class="p-20 font-inter text-lg bg-slate-200 text-black ">
        <div class="flex gap-8 max-w-[1500px] mx-auto">
            <div class="flex flex-col w-1/3 gap-y-4 p-10  bg-white rounded-xl shadow-2xl shadow-gray-400">
                <div class="font-bold text-xl">Daftar Kartu</div>
                <div class="text-main_blue">Kartu 1</div>
                <div class="text-main_blue">Kartu 2</div>
            </div>
            <Form @submit="getCardToken" :validation-schema="cardValidationSchema"
                class="flex flex-col w-2/3 gap-y-4 p-10 shadow-2xl shadow-gray-400  bg-white rounded-xl">
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
                    <button type="reset"
                        class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">Cancel</button>
                    <button type="submit" class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">Update</button>
                </div>
            </Form>
        </div>
        <div class="flex z-30 justify-end">
            <RouterLink to="../payments" class="m-4 px-5 py-3 bg-main_blue text-white font-bold rounded-full">
                Kembali Ke Pembayaran
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup"

//Data
const errorMessage = ref('');

const cardInfo = ref({
    card_number: '',
    card_holder: '',
    card_exp_month: '',
    card_exp_year: '',
    card_cvv: '',
});

const cardValidationSchema = yup.object().shape({
    card_number: yup.string().required("Nomor Kartu diperlukan!").matches(/^\d{16}$/, "Nomor Kartu harus 16 digit!"),
    card_holder: yup.string(),
    card_exp_month: yup.string().required("Tanggal Kedaluwarsa diperlukan!").max(2, "Tanggal Kedaluwarsa tidak valid!"),
    card_exp_year: yup.string().required("Tanggal Kedaluwarsa diperlukan!").max(4, "Tanggal Kedaluwarsa tidak valid!"),
    card_cvv: yup.string().required("CVC diperlukan!").max(3, "CVC tidak valid!"),
});

//Hooks
onMounted(() => {
    loadMidtransScript();
});

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

const options = {
    onSuccess: (response) => {
        console.log('Success:', response);
        localStorage.setItem('cardToken', response.token_id);
    },
    onFailure: (response) => {
        console.error('Failure:', response);
    },
    onError: (response) => {
        console.error('Error:', response);
    }
}

</script>