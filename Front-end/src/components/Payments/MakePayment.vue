<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="py-2">
            <div class="font-bold">Metode Pembayaran: </div>
            <div>Transfer Virtual Account: {{ paymentOption }}</div>
        </div>
        <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
            Buat Tagihan
        </button>
        <div>{{ errorMessage }}</div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onBeforeMount, onUpdated } from 'vue';
import router from '../../router';

const paymentOption = ref('');

const errorMessage = ref('');

onBeforeMount(() => {
    paymentOption.value = localStorage.getItem('bank');
    payData.value.credit_card.token_id = localStorage.getItem('token');
})

const payData = ref({
  	payment_type: "credit_card",
  	transaction_details: {
    	order_id: "order102",
    	gross_amount: 789000
  	},
  	credit_card: {
    	token_id: '',
    	authentication: true,
  	},
    customer_details: {
        first_name: "budi",
        last_name: "pratama",
        email: "budi.pra@example.com",
        phone: "08111222333"
    }
})

(() => {
    paymentData.value.amount = JSON.parse(localStorage.getItem('paymentData'))
    paymentData.value.provider = localStorage.getItem('bank')
})

async function makePayment(paymentInfo) {
    try {
        console.log(paymentInfo)
        const response = await axios.post('http://localhost:8080/v2/payment', payData);
        console.log(response.data);
        localStorage.setItem('paymentData', JSON.stringify(response.data));
    } catch (error) {
        console.error(error);
        errorMessage.value = 'Terjadi Error';
    }
}

</script>