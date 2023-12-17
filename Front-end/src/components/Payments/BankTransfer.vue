<template>
    <div class="flex flex-col w-full text-black font-inter bg-white p-6 justify-between">
        <div class="w-full font-inter text-black mx-auto space-y-4">
            <div class="flex text-2xl text-sec_blue font-inter font-bold">
                Pembayaran Transfer Bank
            </div>
            <img :src="bankLogo" alt="" class="mx-auto max-w-[300px] py-4">
            <div class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                <div class="">Transfer Melalui</div>
                <div class="text-right font-bold"> {{ paymentData.channel }} Virtual Account</div>
            </div>
            <div class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                <div>Status Pembayaran</div>
                <div class="text-right font-bold" :class="paymentSuccess ? 'text-green-600' : 'text-orange-600'">{{ paymentSuccess ? 'Pembayaran Berhasil' : 'Pembayaran Tertunda'}}</div>
            </div>
            <div class="flex flex-col border-[1px] p-4 justify-between px-6 text-gray-800 text-lg border-gray-400 ">
                <div class="w-full flex font-semibold">
                    <div class="flex-1">Produk</div>
                    <div class="flex-1">Waktu</div>
                    <div class="flex-1">Harga</div>
                </div>
                <hr class="border-t-[1px] border-gray-400 my-3" />
                <div v-for="item in paymentData.items" class="w-full pb-2 ">
                    <div class="flex ">
                        <div class="flex-1">{{ item.title }}</div>
                        <div class="flex-1">{{ item.duration.current }}</div>
                        <div class="flex-1">{{ toIDR(item.price) }}</div>
                    </div>
                    <hr class="border-t-[1px] border-gray-400 mt-2" />
                </div>
            </div>
            <div
                class="flex border-[1px] p-4 justify-between text-gray-800 text-2xl font-bold border-gray-400 bg-slate-100">
                <div class="">Total</div>
                <div class="">{{ toIDR(paymentData.amount) }}</div>
            </div>
            <div class="text-red-500 py-4 pr-4">{{ errorMessage }}</div>
        </div>
        <div class="flex w-full space-x-3">
            <button v-if="!requestSuccess" @click="makePayment()" type="submit"
                class="flex flex-1 justify-center items-center p-3 bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">
                Buat Tagihan</button>
            <RouterLink v-if="requestSuccess" :to="{ name:'Pembayaran Tertunda' }" type="submit"
                class="flex flex-1 justify-center items-center p-3 bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">
                Lihat Nomor VA</RouterLink>
            <button @click="router.go(-1)" type="reset"
                class="flex flex-1 justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>
        </div>
        <div v-if="paymentSuccess" class="absolute flex flex-col top-0 left-0 h-full w-full bg-green-300 bg-opacity-70">
            <div class="flex flex-col m-auto justify-self-center self-center items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="#4CAF50"
                    class="m-4">
                    <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                    <path d="M8 12L10 15L16 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <h1 class="text-4xl font-bold text-green-900">Pembayaran Berhasil</h1>
            </div>
            <RouterLink :to="{ name: 'Keranjang Saya' }"
                class="flex p-4 m-6 items-center justify-center text-white bg-green-900 font-bold rounded-xl">
                Kembali Ke Keranjang
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import router from '../../router/index.js';
import { RouterLink, useRoute } from 'vue-router';
import axios from 'axios';
import { usePaymentStore } from '../../store';
 
const route = useRoute(); 
const paymentStore = usePaymentStore();

//For Storing Local pending payment data
const requestSuccess = ref(false);
const paymentSuccess = computed(() => paymentStore.getPaymentStatus)

const paymentData = ref({
    amount: computed(() => {
        let total = 0
        paymentStore.checkoutItems.forEach(item => {
            total += item.price
        })
        return total
    }),
    channel: route.params.channel,
    items: computed(() => paymentStore.getCheckoutItems),
    pending: null
})

onMounted(() => {
    requestSuccess.value = paymentStore.getPendingPayment.status
})

watchEffect(paymentStore.getPendingPayment, (value) => {
    requestSuccess.value = value.status
})

watch(requestSuccess, (value) => {
    if (value == true) {
        () => router.push({ name:'Keranjang Saya' })
    }
})

//Payment Request
const makePayment = async () => {
    try {
        const channel = paymentData.value.channel.toLowerCase()
        const res = await paymentStore.createOrder(channel)
        console.log(res)
        if (res.status_code === '201') {
            paymentData.value.pending = paymentStore.pendingPayment.data
            requestSuccess.value = true
            router.push({ name:'Pembayaran Tertunda' })
        }
        else {
            errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
            console.error(res)
        }
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        throw error
    }
    
}

//data for display
const errorMessage = ref('');

const bankLogo = computed(() => {
    switch (paymentData.value.channel.toLowerCase()) {
        case 'bca':
            return '/src/assets/payments/bca-full.png'
        case 'bni':
            return '/src/assets/payments/bni-full.png'
        case 'bri':
            return '/src/assets/payments/bri-full.png'
        case 'mandiri':
            return '/src/assets/payments/mandiri-full.png'
        default:
            return '/src/assets/payments/bca-full.png'
    }
})

//Helpers
function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

</script>
