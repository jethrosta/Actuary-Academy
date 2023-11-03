<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex justify-center w-full text-white gap-x-8 py-8">
            <RouterView class="flex w-2/3" />
            
            <div class="flex w-1/3">
                <div class="bg-main_blue min w-full px-3 pt-4 pb-20">
                    <div class="py-2">
                        <div>Invoice Number: 098798403485</div>
                        <div class="flex flex-row justify-between">
                            <div>Total Payment</div>
                            <div>{{ toIDR(paymentData.amount) }}</div>
                        </div>
                    </div>
                    <div class="py-2">
                        <div>Name</div>
                        <div>J**** J****</div>
                    </div>
                    <div class="py-2">
                        <div>Email</div>
                        <div>J***@gmail.com</div>
                    </div>
                    <div class="py-2">
                        <div>Phone Number</div>
                        <div>086690746724</div>
                    </div>
                    <div class="py-2">
                        <div>Summary</div>
                        <div class="flex flex-row justify-between">
                            <div>A10 Matematika Keuangan</div>
                            <div>X1</div>
                            <div>IDR 900.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterView } from 'vue-router';
import Footer from '../Footer.vue';
import { usePaymentStore } from '../../store';

const store = usePaymentStore()

const paymentData = ref({
    amount: computed(() => store.getCurrentPayment),
    name: '',
    email: '',
    phone: '',
    summary: store.getCheckoutItems
})

function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

</script>

<style scoped>
</style>