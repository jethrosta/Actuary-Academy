<template>
    <div class="flex flex-col text-black font-inter">
        <div class="w-full flex text-3xl text-main_blue font-inter font-bold">
            {{ route.params.providerName }}
        </div>
        <div class="gap-4">
            <div class="flex flex-col py-20 pr-10 font-inter text-black gap-4 mx-auto">
                <div class=" font-bold">Metode Pembayaran: {{ route.params.providerName }}</div>
                <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
                    QR Code (Desktop Website)
                </button>
                <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
                    Ke Aplikasi {{ provider }}
                </button>
                <div class="text-red-500">{{ errorMessage }}</div>
            </div>
        </div>
        <div v-if="requestSuccess" class="flex flex-col">
            <div v-for="action in paymentData.actions" class="flex flex-col">
                <div class="font-bold">
                    Pembayaran: {{ action.name }}</div>
                <button @click="loadUrl(action.url)">
                    URL: <a :href="`${action.url}`"> {{ action.url }}</a></button>
            </div>
        </div>
        <div v-if="urlContent">
            <!--utk nampilin qr code-->
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from '../../store';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import router from '../../router';
const route = useRoute();

const store = useStore()

//data for display
const errorMessage = ref('');
const paymentData = ref(JSON.parse(localStorage.getItem('eWalletPayment')))
const urlContent = ref(null)
const requestSuccess = ref(true);
const provider = ref(route.params.providerName)

//Payment Request
async function makePayment() {
    try {
        store.loadingStart()
        const channel = route.params.providerName.toLowerCase()
        const response = await store.makePayment('eWallet', channel, paymentData.value.amount)
        paymentData.value = response.data;
        requestSuccess.value = true;
        localStorage.setItem('eWalletResponseRaw', JSON.stringify(paymentData.value))
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi'
        console.error(error)
    } finally {
        store.loadingEnd()
    }
}

</script>
