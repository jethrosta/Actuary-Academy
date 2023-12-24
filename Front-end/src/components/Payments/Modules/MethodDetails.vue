<template>
    <div class="flex flex-col w-full text-gray-900 font-inter bg-white p-6 justify-between">
        <div class="w-full font-inter text-black mx-auto space-y-4 p-4">
            <h1 class="text-lg font-bold">
                Pembayaran Transfer Bank
            </h1>
            <img :src="logo" alt="" class="max-w-[200px]">
            <div class="py-3">
                <div class="py-2 text-gray-800 space-y-1">
                    <div class="font-bold"> Metode Pembayaran</div>
                    <div v-if="isWallet">{{ channel.toUpperCase() }}</div>
                    <div v-else>{{ channel.toUpperCase() }} Virtual Account</div>
                </div>
            </div>
            <div
                class="flex border-[1px] p-4 justify-between text-gray-800 text-2xl font-semibold border-main_blue bg-blue-100">
                <div class="">Total Pembayaran</div>
                <div class="">{{ toIDR(amount) }}</div>
            </div>
            <div v-if="errorMessage != ''" class="text-red-500 border-[1px] border-red-500 bg-red-100 py-4 px-4">{{
                errorMessage }}</div>
        </div>
        <div class="flex w-full space-x-3 p-4">
            <button @click="makePayment" type="submit"
                class="flex flex-1 justify-center items-center p-3 bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">
                Buat Tagihan</button>
            <button @click="cancelMethod" type="reset"
                class="flex flex-1 justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import router from '@/router/index.js';
import { usePaymentStore, useAuthStore } from '../../../store';

const authStore = useAuthStore();
const paymentStore = usePaymentStore();
const requestSuccess = ref(false);

const props = defineProps({
    channel: String,
    paymentData: Object,
})

const emit = defineEmits(['cancelMethod', 'makePayment'])

const data = ref(props.paymentData)
const channel = ref(props.channel)
const amount = computed(() => data.value ? data.value.reduce((acc, item) => acc + (item.is_discount ? item.discount_price : item.price), 0) : 0)
const isWallet = computed(() => channel.value ? ['gopay', 'shopeepay'].includes(channel.value.toLowerCase()) : false)

//Payment Request
const cancelMethod = () => {
    emit('cancelMethod')
}
const makePayment = () => {
    emit('makePayment')
}

//data for display
const errorMessage = ref('');
const logo = computed(() => {
    switch (channel.value.toLowerCase()) {
        case 'bca':
            return '/src/assets/payments/bca-full.png'
        case 'bni':
            return '/src/assets/payments/bni-full.png'
        case 'bri':
            return '/src/assets/payments/bri-full.png'
        case 'mandiri':
            return '/src/assets/payments/mandiri-full.png'
        case 'gopay':
            return '/src/assets/payments/gopay-full.png'
        case 'shopeepay':
            return '/src/assets/payments/shopeepay.png'
        default:
            return '/src/assets/payments/bca-full.png'
    }
})

onMounted(() => {

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
