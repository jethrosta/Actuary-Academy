<template>
    <div class="bg-slate-200 font-inter">
        <div class="grid grid-cols-5 px-28 py-20 flex-grow h-full flex-col lg:flex-row max-w-[1500px] mx-auto justify-center w-full text-white gap-x-8">
            <div class="col-span-3 h-min">
                <MethodsMenu v-if="!isMethod"
                    @select-method="(channelParam) => channel = channelParam" />
                <MethodDetails v-if="isMethod"
                    @make-payment="makePayment"
                    @cancel-method="channel = null"
                    :paymentData="paymentData"
                    :channel="channel"/>
            </div>
            <div class="col-span-2 text-base">
                <CheckoutDetails :items="items" :amount="amount" :userData="userData" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';
import Footer from '../Footer.vue';
import { usePaymentStore, useAuthStore } from '../../store';
import CheckoutDetails from './Modules/CheckoutDetails.vue';
import MethodDetails from './Modules/MethodDetails.vue';
import MethodsMenu from './Modules/MethodsMenu.vue';

const route = useRoute();
const paymentStore = usePaymentStore();
const authStore = useAuthStore();

const channel = ref(null)
const isMethod = computed(() => channel.value != null )
const items = computed(() => paymentStore.getOrderItems)
const userData = computed(() => authStore.getUser)

const amount = computed(() => items.value ?
    items.value.reduce((acc, item) => acc + (item.is_discount ? item.discount_price : item.price), 0) : 0)


//Payment Request
const makePayment = async () => {
    try {
        const res = await paymentStore.setOrder(channel.value)
        console.log(res)
    } catch (error) {
        errorMessage.value = 'Terjadi Error, Silahkan Coba Lagi Nanti'
        throw error
    }
}

//Hooks
const requestSuccess = computed(() => paymentStore.getPendingPayment.status )
watch(requestSuccess, (value) => {
    if (value) {
        router.push({ name:'Pembayaran Tertunda' }).then(router.forward())
    }
})

onMounted(() => {
    if (paymentStore.getPendingPayment.status) {
        router.push({ name:'Pembayaran Tertunda' }).then(router.forward())
    }
    paymentStore.setOrderItems(route.query.items)
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