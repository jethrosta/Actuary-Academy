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
                    Ke Aplikasi Gojek
                </button>
                <div>{{ errorMessage }}</div>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import router from '../../router';
const route = useRoute();

//data for display
const errorMessage = ref('');
const requestSuccess = ref(false);
const paymentData = ref({})
const urlContent = ref(null)

//Payment Data for Backend
const paymentRequest = ref({})

async function makePayment() {
    try {
        const response = await axios.post('http://localhost:8080/v2/payment', paymentRequest.value);
        console.log(response.data);
        localStorage.setItem('eWalletPayment', JSON.stringify(response.data))
        errorMessage.value = '';
    } catch (error) {
        console.error(error);
        errorMessage.value = 'Terjadi Error';
    }
}

onMounted(() => {
    setPaymentData();
    paymentData.value = JSON.parse(localStorage.getItem('eWalletPayment'));
    let reqStatus = localStorage.getItem('eWalletPayment');
    if (reqStatus !== null) {
        requestSuccess.value = true;
    }
})

const setPaymentData = () => {
    let provider = route.params.providerName;
    paymentRequest.value = {
        payment_type: "gopay",
        transaction_details: {
            order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
            gross_amount: 20000
        },
        item_details: [
            {
                id: "id1",
                price: 20000,
                quantity: 1,
                name: "Bluedio H+ Turbine Headphone with Bluetooth 4.1"
            }
        ],
        customer_details: {
            first_name: "Budi",
            last_name: "Utomo",
            email: "budi.utomo@midtrans.com",
            phone: "081223323423"
        },
        gopay: {
            enable_callback: true,
            callback_url: "http://actuary.com/payments/pending-payment"
        }
    }
}

const loadUrl = (url) => {
    
}

</script>
