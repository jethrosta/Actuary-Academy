<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex justify-between">
            <div class="font-bold text-main_blue text-3xl py-2">
                Pembayaran
            </div>
            <RouterLink :to="{ name: 'Riwayat Pembayaran' }"
                class="flex items-center font-semibold text-main_blue hover:text-blue-400">
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
            <div class="left-side text-sm">
                <div class="notifItem text-black border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                    <div class="grid grid-rows-3 space-y-1">
                        <div class="grid grid-cols-2 justify-between w-full items-center text-main_blue font-bold">
                            Total Pembayaran
                            <div class="ml-auto justify-end text-main_blue font-bold">
                                {{ toIDR(amount) }}
                            </div>
                        </div>
                        <div class="flex w-full justify-between items-center">
                            <div class="font-bold">Metode Pembayaran</div>
                            <div class="flex items-center justify-end space-x-2 ">
                                <img :src="logo" alt="" class="max-w-[80px] m-1">
                                <div class="text-sec_blue text-right">{{ method }}</div>
                            </div>
                        </div>
                        <div class="grid grid-cols-[2fr,3fr] w-full items-center">
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
            <div class="right-side grid grid-rows-2 p-4 text-sm">
                <div v-if="!isWallet" class="text-center space-y-2">
                    <div>Pembayaran dapat dilakukan melalui ATM {{ channel }} atau <i>internet banking</i></div>
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
                <div v-if="isWallet" class="text-center space-y-2">
                    <div class=" font-bold">
                        <h3 class="text-lg">Scan QR menggunakan aplikasi {{ channel }}</h3>
                        <div class="max-w-[400px] mx-auto">
                            <img :src="data.actions[0].url" alt="QR Code">
                        </div>
                        <h3 class="text-lg pb-2">atau</h3>
                        <button @click="toApp" class="text-white p-3 m-2 items-center justify-center rounded-xl"
                            :class="channel.toLowerCase() == 'gopay' ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'">
                            Ke Aplikasi {{ channel.toLowerCase() == 'gopay' ? 'Gojek' : 'Shopee' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-auto justify-end items-end gap-3 text-sm">
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
    <div v-if="modalError" tabindex="-1" @click="closeModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div class="relative w-full max-w-md max-h-full">
            <div class="modal-card relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="modalError = false"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
                <div class="p-6 text-center">
                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 class="mb-5 font-normal text-gray-500 dark:text-gray-400">
                        {{ modalMessage }}
                    </h3>
                    <button @click="modalError = false"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Tutup
                    </button>
                </div>
            </div>
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
const toApp = () => {
    window.open(data.value.actions[1].url, '_blank')
}

//Payment Data
const data = computed(() => paymentStore.getPendingPayment.data)
const identifier = computed(() => data.value ? data.value.identifier : null)
const amount = computed(() => data.value ? data.value.gross_amount : 0)
const channel = computed(() => data.value ? data.value.channel_name : 'loading...')
const vaNumber = computed(() => data.value ? data.value.bill_key || data.value.virtual_number : 0)
const expiry = computed(() => data.value ? data.value.expiry_time : null)
const isWallet = computed(() => data.value ? data.value.channel_name ? ['gopay', 'shopeepay'].includes(data.value.channel_name.toLowerCase()) : false : false)

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
            modalError.value = true
            modalMessage.value = 'Pembayaran belum berhasil, silahkan coba beberapa saat lagi'
        }
    })
}

//data for display
const modalError = ref(false)
const modalMessage = ref('');
const closeModal = (e) => {
    if (e.target.closest('.modal-card')) return;
    else modalError.value = false;
}

const method = computed(() => {
    switch (channel.value.toLowerCase()) {
        case 'bca':
            return 'BCA (VA)'
        case 'bni':
            return 'BNI (VA)'
        case 'bri':
            return 'BRI (VA)'
        case 'mandiri':
            return 'Mandiri (VA)'
        case 'gopay':
            return 'Gopay'
        case 'shopeepay':
            return 'Shopeepay'
        default:
            return 'memuat...'
    }
})

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

//Countdown Functions
const countdown = ref('00:00:00');
const countdownCounter = (targetDate) => {
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = new Date().getTime();
    const remainingTime = targetDateTime - currentDateTime;

    if (remainingTime <= 0) {
        return '00:00:00';
    }

    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return `${hours}:${minutes}:${seconds}`;
}

onMounted(() => {
    paymentStore.setPendingPayment().then(() => {
        if (paymentStore.getPendingPayment.status == false && paymentStore.getPendingPayment.message == 'not found') {
            router.push({ name: 'Riwayat Pembayaran' }).then(router.forward())
        }
    })
    setInterval(() => { countdown.value = countdownCounter(expiry.value) }, 1000)
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
