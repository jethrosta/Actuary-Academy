<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="flex content-between justify-between items-center w-full py-4">
            <div class="w-min font-bold text-3xl">Riwayat Pembayaran</div>
            <button @click="router.go(-1)" class="flex items-center font-semibold text-lg hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H6M12 5l-7 7 7 7"></path>
                </svg>
                <u>Kembali</u>
            </button>
        </div>
        <div class="payment-list w-full space-y-4">

            <div v-for="(item, index) in data" :key="index"
                class="payment-item-container space-y-2 text-black text-sm border-[1.5px] border-main_blue rounded-xl p-4">
                <div class="flex justify-between items-center">
                    <div class="text-gray-600 font-medium">Status</div>
                    <div class="flex items-center border-2 gap-2 py-1 px-3 font-semibold first-letter:text-center rounded-lg"
                        :class="statusLabelClass(item.status)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                            <circle cx="7.5" cy="7.5" r="6" fill="currentColor" />
                        </svg>
                        <span> {{ getStatus(item.status) }}</span>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-gray-600 font-medium">Jumlah Bayar</div>
                    <div class="text-2xl text-main_blue font-semibold">{{ toIDR(item.amount) }}</div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-gray-600 font-medium">Metode</div>
                    <div class="font-medium">{{ getMethod(item.channel) }}</div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-gray-600 font-medium">Waktu</div>
                    <div v-if="item.status == 'pending'" class="grid grid-cols-2 justify-center items-center gap-2">
                        <p>{{ isoToDate(item.expiry) }}</p>
                        <div
                            class="border-2 border-red-400 text-center text-red-400 py-1 px-3 font-semibold first-letter:text-center rounded-lg">
                            {{ counters[index] ? counters[index].counter : '00:00:00' }}
                        </div>
                    </div>
                    <div v-else class="flex justify-center items-center gap-2">
                        <p>Selesai Pada : </p>
                        <p>{{ isoToDate(item.paid_at) }}</p>
                    </div>
                </div>
                <div class="flex justify-end gap-2 pt-6 text-white font-semibold">
                    <RouterLink :to="{ name: 'Pembayaran Tertunda' }"
                        v-if="item.status == 'pending'"
                        class=" col-span-1 text-lg bg-orange-500 py-1 px-4 first-letter:text-center rounded-lg">
                        Bayar
                    </RouterLink>
                    <button @click="checkPaymentStatus(item.identifier)"
                        v-if="item.status == 'pending'"
                        class="col-span-1 text-lg bg-sec_blue py-1 px-4 first-letter:text-center rounded-lg">
                        Cek Status
                    </button>
                    <button @click="router.push({ name: 'Detail Pembayaran', params: { id: item.identifier } })"
                        v-if="item.status == 'pending'"
                        class=" col-span-1 text-lg bg-sec_blue py-1 px-4 first-letter:text-center rounded-lg">
                        Detail
                    </button>
                    <button @click="router.push({ name: 'Pembayaran Tertunda' })"
                        v-else
                        class=" col-span-1 text-lg bg-sec_blue py-1 px-4 first-letter:text-center rounded-lg">
                        Detail
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import router from '@/router/index.js';
import { usePaymentStore } from '../../store';
import { ref, computed, onMounted } from 'vue';

const paymentStore = usePaymentStore();

//Payments Data
const getData = computed(() => paymentStore.getAllPayment);

const data = computed(() => {
    return getData.value ?
        getData.value.map((item) => {
            return {
                _id: item._id,
                status: item.status,
                amount: item.gross_amount,
                method: item.payment_type,
                channel: item.channel_name,
                expiry: item.expiry_time,
                identifier: item.identifier,
                paid_at: item.paid_at,
            }
        }) : [{
            _id: 'memuat...',
            status: 'memuat...',
            amount: 0,
            method: 'memuat...',
            channel: 'memuat...',
            expiry: 'memuat...',
            identifier: 'not found',
            paid_at: 'memuat...',
        }]
});

const checkPaymentStatus = (id) => {
    paymentStore.setPaymentById(id).then(() => {
        if (paymentStore.getPaymentById.status == 'settlement') {
            paymentStore.setAllPayment();
        } else {
            console.log('belum dibayar')
        }
    })
}

const getStatus = (status) => {
    switch (status) {
        case 'pending':
            return 'Menunggu Pembayaran';
        case 'success':
            return 'Pembayaran Berhasil';
        case 'canceled':
            return 'Pembayaran Dibatalkan';
        case 'deny':
            return 'Pembayaran Ditolak';
        case 'challenge':
            return 'Payment Challenged';
        default:
            return 'memuat...';
    }
}

const getMethod = (channel) => {
    switch (channel) {
        case 'mandiri':
            return 'Transfer Mandiri VA';
        case 'bni':
            return 'Transfer BNI VA';
        case 'bri':
            return 'Transfer BRI VA';
        case 'bca':
            return 'Transfer BCA VA';
        case 'gopay':
            return 'Gopay';
        case 'shopeepay':
            return 'Shopeepay';
        default:
            return 'memuat...';
    }
}

const statusLabelClass = (status) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-200 border-yellow-600 text-yellow-700';
        case 'success':
            return 'bg-green-200 border-green-600 text-green-600';
        case 'canceled' || 'challenge':
            return 'bg-gray-200 border-gray-600 text-gray-600';
        case 'deny':
            return 'bg-red-200 border-red-600 text-red-600';
        default:
            return 'bg-gray-200 border-gray-600 text-gray-600';
    }
}

const counters = computed(() => data.value ? counterFunction.value : ['00:00:00']);

const counterFunction = ref(['00:00:00']);

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
    paymentStore.setAllPayment();
    setInterval(() => {
        counterFunction.value = data.value.map((item) => {
            return {
                counter: countdownCounter(item.expiry)
            }
        })
    }, 1000)
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
