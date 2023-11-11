<template>
    <div>
        <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
            <div class="py-2">
                <div class="font-bold">Metode Pembayaran: </div>
                <div>Transfer Virtual Account: {{ paymentData.providerName }}</div>
                <div>Jumlah: {{ toIDR(paymentData.amount) }}</div>
            </div>
            <div class="space-x-2">
                <button @click="makePayment()" type="submit"
                    class="px-5 py-3 bg-main_blue text-white font-bold rounded-full">Buat Tagihan</button>
                <button @click="router.go(-1)" type="reset"
                    class="px-5 py-3 border-2 border-main_blue text-main_blue rounded-full">Kembali</button>
            </div>
            <div class="text-red-500 py-4 pr-4">{{ errorMessage }}</div>
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
    amount: 0,
    providerName: route.params.providerName
})

onMounted(() => {
    const checkoutItems = store.paymentState.checkoutItems
    if (checkoutItems == null) {
        router.push('/user/my-cart').then(() => router.go())
    }
    paymentData.value.amount = checkoutItems.map(item => item.price).reduce((sum, price) => sum + price, 0);
})

//Payment Request
async function makePayment() {
    try {
        store.loadingStart()
        const bank = paymentData.value.providerName.toLowerCase()
        const response = await store.makePayment('bankTransfer', bank, paymentData.value.amount)
        router.push('/payments/pending-payment').then(() => router.go(0))
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        console.error(error)

    } finally {
        store.loadingEnd()
    }
}

//data for display
const errorMessage = ref('');

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
