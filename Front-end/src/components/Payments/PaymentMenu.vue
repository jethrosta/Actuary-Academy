<template>
    <div class="bg-slate-200 font-inter">
        <div class="flex px-28 py-20 flex-grow h-full flex-col lg:flex-row max-w-[1500px] mx-auto justify-center w-full text-white gap-x-8">
            <RouterView class="flex w-full lg:w-2/3 h-min" />
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
                            <div v-for="item in paymentData.summary" class="flex flex-row justify-between">
                                <div class="w-1/3">{{ item.title }}</div>
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
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouterView, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import Footer from '../Footer.vue';
import { usePaymentStore, useAuthStore } from '../../store';

const store = usePaymentStore();
const authStore = useAuthStore();
const route = useRoute();

const items = ref([])

const paymentData = ref({
    amount: 0,
    name: authStore.loginState.user.name,
    email: authStore.loginState.user.email,
    phone: 240989790 || authStore.loginState.user.name,
    summary: null,
})

const getData = () => {
    const itemIds = route.query.items;
    store.getOrderItems(itemIds).then(() => {
        items.value = store.getCheckoutItems;
        paymentData.value.amount = items.value.reduce((acc, item) => acc + item.price, 0);
        paymentData.value.summary = items.value.map(item => {
            return {
                title: item.title,
                price: item.price,
                quantity: 1,
            }
        
        })
    })
}

onMounted(() => {
    getData();
})

// window.onbeforeunload = function () {
//     return "Are you sure you want to leave?";
// };

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