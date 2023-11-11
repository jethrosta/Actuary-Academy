<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex justify-center w-full text-white gap-x-8 py-8">
            <RouterView class="flex w-2/3" />

            <div class="flex w-1/3">
                <div class="bg-main_blue min w-full px-3 pt-4 pb-20">
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
    </div>

    <Footer />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import router from '../../router';
import { RouterView } from 'vue-router';
import Footer from '../Footer.vue';
import { useStore } from '../../store';

const store = useStore()

const paymentData = ref({
    amount: 0,
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

const checkoutItems = ref(null)

onMounted(() => {
    checkoutItems.value = store.paymentState.checkoutItems;
    if (checkoutItems.value == null) {
        router.push('/user/my-cart').then(() => router.go())
    }
    paymentData.value.amount = checkoutItems.value.map(item => item.price).reduce((sum, price) => sum + price, 0);
})

</script>

<style scoped></style>