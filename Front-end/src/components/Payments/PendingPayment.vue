<template>
    <div class="bg-slate-200 font-inter">
        <div
            class="flex px-28 py-20 flex-grow h-full flex-col lg:flex-row max-w-[1500px] mx-auto justify-center w-full text-white gap-x-8">
            <div class="flex w-full lg:w-2/3 h-min">
                <div class="relative flex flex-col w-full text-black font-inter bg-white p-6 justify-between">
                    <div class="w-full font-inter text-black mx-auto space-y-4">
                        <div class="flex text-2xl text-sec_blue font-inter font-bold">
                            Pembayaran Transfer Bank
                        </div>
                        <img :src="bankLogo" alt="" class="mx-auto max-w-[300px] py-4">
                        <div
                            class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                            <div class="">Transfer Melalui</div>
                            <div class="text-right font-bold"> {{ paymentData.channel }} Virtual Account</div>
                        </div>
                        <div
                            class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                            <div>Status Pembayaran</div>
                            <div class="text-right font-bold"
                                :class="paymentSuccess ? 'text-green-600' : 'text-orange-600'">{{ paymentSuccess ?
                                    'Pembayaran Berhasil' : 'Pembayaran Tertunda' }}</div>
                        </div>
                        <div
                            class="flex flex-col border-[1px] p-4 justify-between px-6 text-gray-800 text-lg border-gray-400 ">
                            <div class="w-full flex font-semibold">
                                <div class="flex-1">Produk</div>
                                <div class="flex-1">Waktu</div>
                                <div class="flex-1">Harga</div>
                            </div>
                            <hr class="border-t-[1px] border-gray-400 my-3" />
                            <div v-for="item in paymentData.items" class="w-full pb-2 ">
                                <div class="flex ">
                                    <div class="flex-1">{{ item.name }}</div>
                                    <div class="flex-1">{{ item.duration }}</div>
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
                    <div class="space-y-3 text-center">
                        <RouterLink :to="{ name: 'Lihat Nomor VA' }" type="submit"
                            class="w-full p-3 items-center justify-center text-sec_blue border-2 border-sec_blue font-bold bg-slate-100 rounded-xl">
                            Lihat Nomor VA</RouterLink>
                        <div class="grid grid-cols-2 gap-3">
                            <button @click=""
                                class="p-3 justify-center items-center bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">
                                Cek Status Pembayaran
                            </button>
                            <button @click=""
                                class="p-3 items-center justify-center text-white bg-red-600 hover:bg-red-500 font-bold rounded-xl">
                                Batalkan Pembayaran
                            </button>
                        </div>
                        <button @click="router.go(-1)" type="reset"
                            class="w-full justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>

                    </div>
                    <div v-if="paymentSuccess"
                        class="absolute flex flex-col top-0 left-0 h-full w-full bg-green-300 bg-opacity-70">
                        <div
                            class="flex flex-col m-auto justify-self-center self-center items-center justify-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120"
                                fill="#4CAF50" class="m-4">
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
            </div>
            <div class="flex w-full lg:w-1/3 text-sm">
                <div class="bg-main_blue mb-auto min w-full px-6 pt-4 pb-20 bottom-20">
                    <div class="py-2">
                        <div class="pb-4">Invoice Number: 098798403485</div>
                        <div class="flex flex-row justify-between">
                            <div class="font-semibold">Total Payment</div>
                            <div>{{ toIDR(paymentData.amount) }}</div>
                        </div>
                    </div>
                    <div class="py-2">
                        <div class="font-semibold">Name</div>
                        <div>{{ paymentData.name }}</div>
                    </div>
                    <div class="py-2">
                        <div class="font-semibold">Email</div>
                        <div>{{ paymentData.email }}</div>
                    </div>
                    <div class="py-2">
                        <div class="font-semibold">Phone Number</div>
                        <div>{{ paymentData.phone }}</div>
                    </div>
                    <div class="space-y-2">
                        <div class="font-semibold">Summary</div>
                        <div class="space-y-2">
                            <div v-for="item in paymentData.items" class="flex flex-row justify-between">
                                <div class="w-1/3">{{ item.name }}</div>
                                <div class="w-1/3 text-center">x {{ item.quantity }}</div>
                                <div class="w-1/3">{{ toIDR(item.price) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
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

//For Storing payment data
const paymentSuccess = ref(false)

const pending = computed(() => paymentStore.getPendingPayment.data);

const paymentData = ref({
    amount: computed(() => pending.value.gross_amount),
    channel: computed(()=> pending.value.channel_name),
    items: computed(()=> pending.value.course),
    name: authStore.loginState.user.name,
    email: authStore.loginState.user.email,
    phone: 345657567,
})

//data for display
const errorMessage = ref('');
const channel = computed(() => paymentData.value.channel.toLowerCase())
const bankLogo = computed(() => {
    switch (channel) {
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

const getData = () => {

    // paymentStore.get(['656336da48fea86fb70f1552']).then(() => {
    //     items.value = paymentStore.getCheckoutItems;
    //     paymentData.value.summary = items.value.map(item => {
    //         return {
    //             title: item.title,
    //             price: item.price,
    //             quantity: 1,
    //         }

    //     })
    // })
}

onMounted(() => {
    // getData();
})


//Helpers
const modalError = ref(false);

const closeModal = (e) => {
    if (e.target.closest('.modal-card')) return;
    else modalError.value = false;
}

function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

</script>

<style scoped></style>