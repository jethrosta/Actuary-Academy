<template>
    <div class="flex flex-col w-full text-black font-inter bg-white p-6 justify-between">
        <div class="w-full font-inter text-black mx-auto space-y-4">
            <div class="flex text-2xl text-sec_blue font-inter font-bold">
                Pembayaran Transfer Bank
            </div>
            <img :src="bankLogo" alt="" class="mx-auto max-w-[300px] py-4">
            <div class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                <div class="">Transfer Melalui</div>
                <div class="text-right font-bold"> {{ paymentData.providerName }} Virtual Account</div>
            </div>
            <div class="flex flex-col border-[1px] p-4 justify-between px-6 text-gray-800 text-lg border-gray-400 ">
                <div class="w-full flex font-semibold"> 
                    <div class="flex-1">Produk</div>    
                    <div class="flex-1">Waktu</div>    
                    <div class="flex-1">Harga</div>    
                </div>
                <hr class="border-t-[1px] border-gray-400 my-3"/>
                <div v-for="item in paymentData.items" class="w-full pb-2 "> 
                    <div class="flex ">
                        <div class="flex-1">{{ item.variation }}</div>
                        <div class="flex-1">{{ item.duration }}</div>
                        <div class="flex-1">{{ toIDR(item.price) }}</div>
                    </div>
                    <hr class="border-t-[1px] border-gray-400 mt-2"/>
                </div>
            </div>
            <div class="flex border-[1px] p-4 justify-between text-gray-800 text-2xl font-bold border-gray-400 bg-slate-100">
                <div class="">Total</div>
                <div class="">{{ toIDR(paymentData.amount) }}</div>
            </div>
            <div class="text-red-500 py-4 pr-4">{{ errorMessage }}</div>
        </div>
        <div class="flex w-full space-x-3">
            <button @click="makePayment()" type="submit"
                class="flex flex-1 justify-center items-center p-3 bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">Buat
                Tagihan</button>
            <button @click="router.go(-1)" type="reset"
                class="flex flex-1 justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import router from '../../router/index.js';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useStore } from '../../store';

const route = useRoute();
const store = useStore();

//For Storing Local pending payment data
const paymentData = ref({
    amount: store.checkoutAmount,
    providerName: route.params.providerName,
    items: store.paymentState.checkoutItems
})

onMounted(() => {
    const checkoutItems = store.paymentState.checkoutItems
    if (checkoutItems == null) {
        router.push('/user/my-cart').then(() => router.go())
    }
})

//Payment Request
async function makePayment() {
    try {
        store.loadingStart()
        const bank = paymentData.value.providerName.toLowerCase()
        const response = await store.makePayment(bank)
        // router.push('/payments/pending-payment').then(() => router.go(0))
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        console.error(error)

    } finally {
        store.loadingEnd()
    }
}

//data for display
const errorMessage = ref('');

const bank = computed(() => paymentData.value.providerName.toLowerCase())
const bankLogo = computed(() => {
    switch (bank.value) {
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
