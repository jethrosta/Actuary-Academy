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
                    <div>{{ channel.toUpperCase() }} Virtual Account</div>
                </div>
                <div class="py-2 text-gray-800 space-y-1">
                    <div class="font-bold"> Status Pembayaran</div>
                    <div>{{ statusBahasa }}</div>
                </div>
                <div class="py-2 text-gray-800 space-y-1">
                    <div class="font-bold"> Waktu Pembayaran</div>
                    <div>{{ time ? time.paid ? isoToDate(time.paid) : isoToDate(time.expired) : 'memuat...'  }}</div>
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
            <button @click="router.go(-1)"
                class="flex flex-1 justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import router from '@/router/';

const props = defineProps({
    channel: String,
    amount: Number,
    time: Object,
    status: String
})

//Display Data
const amount = computed(() => props.amount ? props.amount : 0)
const channel = computed(() => props.channel ? props.channel : 'memuat...')
const time = computed(() => props.time ? props.time : null)
const status = computed(() => props.status ? props.status : 'not found')
const statusBahasa = computed(() => {
    switch (status.value.toLowerCase()) {
        case 'pending':
           return 'Pembayaran Tertunda'
        case 'canceled':
            return 'Pembayaran Dibatalkan'
        case 'success':
            return 'Pembayaran Berhasil'
        default:
            return 'memuat...'
    }
})

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

function isoToDate(isoDate) {
    const date = new Date(isoDate);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const customFormat = `${day} ${month} ${year} - ${hours}:${minutes}`;
    return customFormat;
}

</script>
