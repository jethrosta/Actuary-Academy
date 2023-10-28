<template>
    <div v-if="!isVanumber">
        <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
            <div class="py-2">
                <div class="font-bold">Metode Pembayaran: </div>
                <div>Transfer Virtual Account: {{ paymentData.provider }}</div>
            </div>
            <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
                Buat Tagihan
            </button>
            <div>{{ errorMessage }}</div>
        </div>
    </div>
    <div v-else class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="font-bold text-main_blue text-3xl py-2">
            Pembayaran
        </div>
        <div class="flex gap-x-10 items-center py-4">
            <div
                class="notifItem flex flex-1 flex-row justify-between text-black text-xl border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                <div class="flex flex-col gap-2 font-medium text-lg">
                    <div class="text-lg text-main_blue font-bold">
                        Total Pembayaran</div>
                    <div class="font-bold">Metode Pembayaran</div>
                    <div>Waktu Pembayaran</div>
                </div>
                <div class="flex flex-col gap-2 text-right text-base justify-between ">
                    <div class="text-main_blue font-bold">
                        <span>Rp </span>{{ theAmount }}
                    </div>
                    <div>{{ theBank }} (VA)</div>
                    <div class="flex flex-row gap-x-2 items-center">
                        <div>5 Juni 2023</div>
                        <div
                            class="flex ml-auto bg-main_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                            23:59:40</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-1 flex-col text-center gap-y-1">
                <div>Pembayaran dapat dilakukan melalui ATM BNI atau <i>internet banking</i></div>
                <div class="font-bold">Nomor Virtual Account </div>
                <div class="flex gap-4 font-semibold text-white justify-center">
                    <div class="flex bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                        {{ paymentData.vaNumber }}</div>
                    <div class="flex bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                        Salin</div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div>Petunjuk Pembayaran</div>
            <div>
                1. Buka aplikasi m-banking di smartphone. <br>
                2. Masukkan username dan password. <br>
                3. Pilih menu Transfer > Bank Lain Dalam Negeri. <br>
                4. Masukkan Kode Bank dan Nomor Virtual Accout Tujuan. <br>
                5. Masukkan nominal yang harus dibayarkan. <br>
                6. Layar akan menunjukkan konfirmasi. <br>
                7. Masukkan PIN transaksi. <br>
                8. Selesai. <br>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import router from '../../router';
import Footer from '../Footer.vue';
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

//For Storing Local pending payment data
let paymentData = ref({})

// Hooks
onMounted(() => {
    getPendingData().then(setDisplay)
})

//data for display
const theAmount = ref(0)
const theBank = ref('')
const errorMessage = ref('');
const isVanumber = computed(() => {
    return paymentData.value.vaNumber !== "";
})

function setDisplay() {
    theAmount.value = toIDR(paymentData.value.amount);
    theBank.value = paymentData.value.provider;
    paymentRequest.value.transaction_details.gross_amount = paymentData.value.amount;
}

async function makePayment() {
    //paymentData.value.vaNumber = ''
    try {
        const response = await axios.post('http://localhost:8080/v2/payment', paymentRequest.value);
        console.log(response.data);
        localStorage.setItem('currentPayment', JSON.stringify(response.data))
        setVaNumber(response.data);
    } catch (error) {
        console.error(error);
        errorMessage.value = 'Terjadi Error';
    } finally {
        console.log(JSON.stringify(paymentRequest.value))
        //localStorage.setItem('pendingPaymentData', JSON.stringify(paymentData.value))
        //router.go();
    }
}

//Payment Data for Backend
const paymentRequest = ref({
    payment_type: 'bank_transfer',
    transaction_details: {
        order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
        gross_amount: 0
    },
    bank_transfer: {
        bank: 'bca'
    },
    customer_details: {
        first_name: 'Toni',
        last_name: 'Dev',
        email: 'tonidev@example.com',
    },
})

//Helpers
async function getPendingData() {
    paymentData.value = await JSON.parse(localStorage.getItem('pendingPaymentData'))
}

function setVaNumber(response) {
    paymentData.value.vaNumber = response.va_numbers[0].va_number;
}

function toIDR(num) {
    // Add a dot as a thousands separator
    let formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // Remove trailing zeros (including those after the decimal point)
    formattedNum = formattedNum.replace(/(\.\d*?[1-9])0+$/, '$1');
    return formattedNum;
}


</script>
