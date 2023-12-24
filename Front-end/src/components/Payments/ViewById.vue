<template>
    <div class="bg-slate-200 font-inter">
        <div class="grid grid-cols-5 px-28 py-20 flex-grow h-full flex-col lg:flex-row max-w-[1500px] mx-auto justify-center w-full text-white gap-x-8">
            <div class="col-span-3 h-min">
                <PaymentDetails :channel="channel" :amount="amount" :time="time" :status="status" />
            </div>
            <div class="col-span-2 text-base">
                <CheckoutDetails :invoice="invoice" :amount="amount" :items="items" :userData="userData"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../Footer.vue';
import PaymentDetails from './Modules/PaymentDetails.vue';
import CheckoutDetails from './Modules/CheckoutDetails.vue';
import { ref, onMounted, computed, watch } from 'vue';
import router from '../../router';
import { usePaymentStore, useAuthStore } from '../../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const paymentStore = usePaymentStore();
const authStore = useAuthStore();

const paymentData = computed(() => paymentStore.getPaymentById)
const userData = computed(() => authStore.getUser)

const amount = computed(() => paymentData.value ? paymentData.value.gross_amount : 0)
const items = computed(() => paymentData.value ? paymentData.value.course : null)
const channel = computed(() => paymentData.value ? paymentData.value.channel_name : null)
const invoice = computed(() => paymentData.value ? paymentData.value.invoice : null)
const status =  computed(() => paymentData.value ? paymentData.value.status : null)
const time = computed(() => {
    return {
        created: paymentData.value ? paymentData.value.transaction_time : null,
        expired: paymentData.value ? paymentData.value.expiry_time : null,
        paid: paymentData.value ? paymentData.value.paid_at : null,
    }
})

onMounted(() => {
    paymentStore.setPaymentById(route.params.id)
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
