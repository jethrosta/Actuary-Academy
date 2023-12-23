<template>
    <div class="flex flex-col w-full text-black font-inter bg-white p-6 justify-between">
        <div class="w-full font-inter text-black mx-auto space-y-4">
            <div class="flex text-2xl text-sec_blue font-inter font-bold">
                Pembayaran E-Wallet
            </div>
            <img :src="eWalletLogoSource" alt="" class="flex px-2 py-4 mx-auto max-w-[300px]">
            <div class="flex border-[1px] p-4 justify-between text-gray-800 text-lg border-gray-400 bg-slate-100">
                <div class="">E-Wallet</div>
                <div class="text-right font-bold"> {{ provider }}</div>
            </div>
            <div class="flex flex-col border-[1px] p-4 justify-between px-6 text-gray-800 text-lg border-gray-400 ">
                <div class="w-full flex font-semibold">
                    <div class="flex-1">Produk</div>
                    <div class="flex-1">Waktu</div>
                    <div class="flex-1">Harga</div>
                </div>
                <hr class="border-t-[1px] border-gray-400 my-3" />
                <div v-for="item in paymentData.items" class="w-full pb-2">
                    <div class="flex ">
                        <div class="flex-1">{{ item.variation }}</div>
                        <div class="flex-1">{{ item.duration }}</div>
                        <div class="flex-1">{{ toIDR(item.price) }}</div>
                    </div>
                    <hr class="border-t-[1px] border-gray-400 mt-2" />
                </div>
            </div>
            <div
                class="flex border-[1px] p-4 justify-between text-gray-800 text-2xl font-bold border-gray-400 bg-slate-100">
                <div class="">Total</div>
                <div class="">{{ toIDR(amount) }}</div>
            </div>
            <div class="text-red-500 py-4 pr-4">{{ errorMessage }}</div>
        </div>
        <div class="w-full space-y-3">
            <div v-if="!requestSuccess" class="flex w-full space-x-3">
                <button @click="makePayment()" type="submit"
                    class="flex flex-1 justify-center items-center p-3 bg-sec_blue hover:bg-[#2c2cc7] text-white font-bold rounded-xl">Buat
                    Tagihan</button>
                <button @click="router.go(-1)" type="reset"
                    class="flex flex-1 justify-center items-center p-3 border-2 hover: border-sec_blue text-sec_blue rounded-xl">Kembali</button>
            </div>
            <div v-if="requestSuccess" class="flex w-full space-x-3 text-white font-bold">
                <a :href="pendingPayment.actions[1].url"
                    class="flex flex-1 p-3 items-center justify-center rounded-xl" :class="provider == 'Gopay' ? 'bg-[#00AA13]' : 'bg-orange-600'">
                    Ke Aplikasi {{ provider }}
                </a>
                <a :href="pendingPayment.actions[0].url"
                    class="flex flex-1 p-3 items-center justify-center  bg-sec_blue rounded-xl">
                    QR Code (Desktop Website)
                </a>
            </div>
            <div v-if="requestSuccess" class="space-y-3">
                <a :href="pendingPayment.actions[2].url"
                    class="flex flex-1 p-3 items-center justify-center text-sec_blue font-bold border-2 border-sec_blue rounded-xl">
                    Cek Status Pembayaran
                </a>
                <a :href="pendingPayment.actions[3].url"
                    class="flex flex-1 p-3 items-center justify-center text-red-600 border-2 border-red-600 font-bold bg-slate-100 rounded-xl">
                    Batalkan Pembayaran
                </a>
            </div>
        </div>
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
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAuthStore } from '../../store';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import router from '../../router';
const route = useRoute();

const store = useAuthStore()

//data for display
const errorMessage = ref('');
const pendingPayment = ref(JSON.parse(localStorage.getItem('eWalletPayment')))
const urlContent = ref(null)
const requestSuccess = ref(false);
const provider = ref(route.params.providerName)
const amount = ref(store.checkoutAmount)

const paymentData = ref({
    items: ref(store.paymentState.orderItems),
})

const eWalletLogoSource = computed(() => {
    switch (provider.value.toLowerCase()) {
        case 'gopay':
            return '/src/assets/payments/gopay-full.png'
            break;
        case 'shopeepay':
            return '/src/assets/payments/shopeepay.png'
            break;
    }
})

//Payment Request
async function makePayment() {
    try {
        store.loadingStart()
        const channel = route.params.providerName.toLowerCase()
        const response = await store.makePayment('eWallet', channel, paymentData.value.amount)
        paymentData.value = response.data;
        requestSuccess.value = true;
        localStorage.setItem('eWalletPayment', JSON.stringify(paymentData.value))
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        console.error(error)
    } finally {
        store.loadingEnd()
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

</script>
