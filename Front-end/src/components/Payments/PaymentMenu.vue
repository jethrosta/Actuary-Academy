<template>
    <div class="bg-slate-200 font-inter">
        <div class="flex px-28 py-20 flex-grow h-full flex-col lg:flex-row max-w-[1500px] mx-auto justify-center w-full text-white gap-x-8">
            <RouterView class="flex w-full lg:w-2/3 h-min" />
            <div class="flex w-full lg:w-1/3">
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
                            <div v-for="item in checkoutItems" class="flex flex-row justify-between">
                                <div class="w-1/3">{{ item.variation }}</div>
                                <div class="w-1/3">x 1</div>
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
import router from '../../router';
import { RouterView, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import Footer from '../Footer.vue';
import { useStore } from '../../store';
import { array } from 'yup';

const store = useStore()

const paymentData = ref({
    amount: store.checkoutAmount,
    name: store.authState.loginState.user.name,
    email: store.authState.loginState.user.email,
    phone: '123456789012',
    summary: store.paymentState.checkoutItems
})

function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

const checkoutItems = ref([])

onMounted(() => {
    if (store.paymentState.checkoutItems.length == 0) {
        router.push('/user/my-cart').then(() => router.go())
    }
    else {
        checkoutItems.value = store.paymentState.checkoutItems;
    }
})

window.onbeforeunload = function () {
    return "Are you sure you want to leave?";
};

const modalError = ref(false);

const closeModal = (e) => {
    if (e.target.closest('.modal-card')) return;
    else modalError.value = false;
}

</script>

<style scoped></style>