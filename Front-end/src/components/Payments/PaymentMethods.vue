<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex text-white gap-x-8 py-8">
            <div class="w-3/5 space-y-3 payment-menu flex-grow">
                <div class="payment" v-for="(payment, index) in paymentMethods" :key="payment.id">
                    <button @click="togglePaymentMenu(payment.id)"
                        class="payment-button menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                        <div class="flex gap-4 items-center">
                            <svg class="w-8" width="26" height="16" viewBox="0 0 26 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.85743 15.2832H21.9343C24.2296 15.2832 25.4143 14.29 25.4143 12.4092V2.91699C25.4143 1.03613 24.2296 0.0517578 21.9343 0.0517578H3.85743C1.5727 0.0517578 0.377441 1.03613 0.377441 2.91699V12.4092C0.377441 14.2988 1.5727 15.2832 3.85743 15.2832ZM2.48236 3.0752C2.48236 2.23145 3.02181 1.80957 3.99493 1.80957H21.7968C22.7699 1.80957 23.3094 2.23145 23.3094 3.0752V3.70801H2.48236V3.0752ZM3.99493 13.5254C3.02181 13.5254 2.48236 13.1035 2.48236 12.2598V5.77344H23.3094V12.2598C23.3094 13.1035 22.7699 13.5254 21.7968 13.5254H3.99493ZM5.43347 11.9346H8.02495C8.64902 11.9346 9.07212 11.5918 9.07212 11.0996V9.46484C9.07212 8.97266 8.64902 8.62988 8.02495 8.62988H5.43347C4.81998 8.62988 4.39688 8.97266 4.39688 9.46484V11.0996C4.39688 11.5918 4.81998 11.9346 5.43347 11.9346Z"
                                    fill="white" />
                            </svg>
                            <div>{{ payment.name }}</div>
                        </div>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                stroke-width="1.8843" />
                        </svg>
                    </button>
                    <div :class="['payment-item', { open: payment.isOpen }]"
                        class="flex flex-col text-black border-[1px] border-main_blue">
                        <button v-for="provider in payment.providers" @click="goToPayment(payment.name, provider)"
                            class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                            {{ provider }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-2/5">
                <div class="bg-main_blue px-3 pt-4 pb-20">
                    <div class="py-2">
                        <div>Invoice Number: 098798403485</div>
                        <div class="flex flex-row justify-between">
                            <div>Total Payment</div>
                            <div>IDR 900.000</div>
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
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router/index.js';

const paymentMethods = ref([
    {
        id: 0,
        name: 'Direct Debit',
        isOpen: false,
        providers: ['BCA', 'BNI', 'Mandiri', 'BRI', 'Lainnya']
    },
    {
        id: 1,
        name: 'Digital Banking',
        isOpen: false,
        providers: ['BCA', 'BNI', 'Mandiri', 'BRI', 'Lainnya']
    },
    {
        id: 2,
        name: 'E-Money',
        isOpen: false,
        providers: ['OVO', 'DANA', 'LinkAja', 'GoPay', 'Lainnya']
    },
    {
        id: 3,
        name: 'Over the Counter',
        isOpen: false,
        providers: ['Alfamart', 'Indomaret', 'Lawson', 'Lainnya']
    },
    {
        id: 4,
        name: 'Pay Later',
        isOpen: false,
        providers: ['Kredivo', 'Akulaku', 'Lainnya']
    }
])

async function setlocal(title, value) { localStorage.setItem(`${title}`, value) }

function goToPayment(method, provider) {
    switch (method) {
        case 'Direct Debit':
            setlocal('card', provider).then(() => {
                router.push('/payments/credit-card')
                    .then(() => { router.go(); })
            });
            break;
        case 'Digital Banking':
            setlocal('bank', provider).then(() => {
                router.push({ name: 'Buat Pembayaran' })
                    .then(() => { router.go(); })
            });
        default:
            break;
    }
}

const togglePaymentMenu = id => {
    paymentMethods.value = paymentMethods.value.map(payment => payment.isOpen && payment.id !== id ? { ...payment, isOpen: false } : payment)
    paymentMethods.value = paymentMethods.value.map(payment => payment.id === id ? { ...payment, isOpen: !payment.isOpen } : payment)
}

</script>

<style scoped>
.payment .payment-item {
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 0.5s;
}

.payment .payment-item.open {
    max-height: 300px;
}
</style>