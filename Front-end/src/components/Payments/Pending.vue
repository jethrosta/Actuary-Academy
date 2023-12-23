<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex justify-between">
            <div class="font-bold text-main_blue text-3xl py-2">
                Pembayaran
            </div>
            <RouterLink :to="{ name: 'Riwayat Pembayaran' }"
                class="flex items-center font-semibold text-lg text-main_blue hover:text-blue-400">
                <u>Lihat Semua Pembayaran</u>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="rotate-180">
                    <path d="M19 12H6M12 5l-7 7 7 7"></path>
                </svg>
            </RouterLink>
        </div>
        <div class="grid grid-cols-2 py-5 space-x-1">
            <!-- Left Side Grid -->
            <div class="left-side">
                <div class="notifItem text-black text-xl border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                    <div class="grid grid-rows-3 space-y-1 font-medium text-lg">
                        <div class="grid grid-cols-2 justify-between w-full items-center text-main_blue font-bold">
                            Total Pembayaran
                            <div class="ml-auto justify-end text-main_blue font-bold">
                                {{ toIDR(amount) }}
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full items-center">
                            <div class="font-bold">Metode Pembayaran</div>
                            <div class="flex items-center justify-end space-x-2 ">
                                <img :src="logo" alt="" class="max-w-[80px] m-1">
                                <div class="uppercase text-right">{{ channel }} (VA)</div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full items-center">
                            Waktu Pembayaran
                            <div class="flex space-x-2 justify-end items-center">
                                <div class="">{{ expiry ? isoToDate(expiry) : 'memuat...' }}</div>
                                <div
                                    class="bg-main_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                                    {{ countdown }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment-tutorial py-4">
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
            <!-- Right Side Grid -->
            <div class="right-side grid grid-rows-2 p-4">
                <div class="text-center space-y-2">
                    <div>Pembayaran dapat dilakukan melalui ATM BNI atau <i>internet banking</i></div>
                    <div class="font-bold">Nomor Virtual Account </div>
                    <div class="flex gap-4 font-semibold text-white justify-center">
                        <div class="flex relative justify-center">
                            <div class="flex bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                                {{ vaNumber }}
                            </div>
                            <div v-show="vaCopied" class="absolute -bottom-7 italic text-gray-600">
                                Nomor disalin !
                            </div>
                        </div>
                        <button @click="copyVa"
                            class="flex active:bg-sec_blue bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                            Salin
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-auto justify-end items-end gap-3">
            <button @click="checkPaymentStatus"
                class="py-2 px-4 justify-center items-center bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">
                Cek Status Pembayaran
            </button>
            <button @click=""
                class="py-2 px-4 items-center justify-center text-white bg-red-600 hover:bg-red-500 font-bold rounded-xl">
                Batalkan Pembayaran
            </button>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import Footer from '../Footer.vue';
import { usePaymentStore, useAuthStore } from '../../store';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import router from '../../router/index.js';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const paymentStore = usePaymentStore();
const authStore = useAuthStore();

//Payment States
const paymentSuccess = ref(false)

//Payment Data
const data = computed(() => paymentStore.getPendingPayment.data)
const identifier = computed(() => data.value ? data.value.identifier : null)
const amount = computed(() => data.value ? data.value.gross_amount : 0)
const channel = computed(() => data.value ? data.value.channel_name : 'loading...')
const vaNumber = computed(() => data.value ? data.value.bill_key || data.value.virtual_number : 0)
const billType = computed(() => data.value && data.value.channel == 'mandiri' ? 'bill' : null)
const expiry = computed(() => data.value ? data.value.expiry_time : null)

const items = computed(() => {
    return paymentStore.getPendingPayment.data ?
        paymentStore.getPendingPayment.data.course :
        [{ name: 'memuat...', price: 'memuat...', quantity: 'memuat...', duration: 'memuat...' }]
})

const checkPaymentStatus = () => {
    paymentStore.setPaymentById(identifier.value).then(() => {
        if (paymentStore.getPaymentById.status == 'settlement') {
            paymentSuccess.value = true
            router.push({ name: 'Riwayat Pembayaran' }).then(router.forward())
        } else {
            console.log('belum dibayar')
        }
    })
}

//data for display
const errorMessage = ref('');
const countdown = computed(() => countdownCounter(data.value.expiry_time))
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

const isExpired = ref(false)

onMounted(() => {
    paymentStore.setPendingPayment().then(() => {
        if (paymentStore.getPendingPayment.status == false && paymentStore.getPendingPayment.message == 'not found') {
            router.push({ name: 'Riwayat Pembayaran' }).then(router.forward())
        }
    })
})

//Helpers
const vaCopied = ref(false)
const copyVa = async () => {
    try {
        await navigator.clipboard.writeText(vaNumber.value);
        console.log('Content copied to clipboard');
        vaCopied.value = true
        setTimeout(() => { vaCopied.value = false }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

const countdownCounter = (targetDate) => {
    const targetDateTime = new Date(targetDate).getTime();

    const countdownInterval = setInterval(() => {
        const currentDateTime = new Date().getTime();
        const remainingTime = targetDateTime - currentDateTime;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            isExpired.value = true;
            router.push({ name: 'Riwayat Pembayaran' }).then(router.forward())
        }

        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function isoToDate(isoDate) {
    const date = new Date(isoDate);
    
    const months = [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
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
