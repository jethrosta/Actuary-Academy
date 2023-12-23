<template>
    <div class="font-inter text-white flex-col">
        <div class="flex font-bold text-sec_blue text-2xl pb-4">
            Metode Pembayaran
        </div>
        <div class="space-y-3 payment-menu flex-grow">
            <div class="payment" v-for="payment in paymentMethods" :key="payment.id">
                <button @click="togglePaymentMenu(payment.id)"
                    class="payment-button menu-button flex items-center w-full justify-between bg-main_blue gap-x-4 px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <div class="flex w-8">
                            <div class="mx-auto menu-icon" :class="`menu-icon-${payment.menuIcon}`"></div>
                        </div>
                        <div>{{ payment.title }}</div>
                    </div>
                    <svg class="arrow-down" :class="payment.isOpen ? 'rotate-180' : ''" width="16" height="10"
                        viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div :class="['payment-item', { open: payment.isOpen }]"
                    class="flex flex-col text-black border-[1px] border-main_blue">
                    <div v-for="channel in payment.channels" class="flex hover:bg-gray-200 flex-col w-full px-4">
                        <button @click="selectMethod(channel.name.toLowerCase())"
                            class="grid grid-cols-[1fr,19fr] py-3 items-center justify-center ">
                            <div class="">
                                <img :src="channel.logo" alt="" class="h-6">
                            </div>
                            <div class="px-4 mr-auto">{{ channel.name }}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const emit = defineEmits(['selectMethod'])

function selectMethod(channel) {
    emit('selectMethod', channel)
}

const paymentMethods = ref([
    {
        id: 0,
        name: 'bankTransfer',
        title: 'ATM/Bank Transfer (Virtual Account)',
        isOpen: false,
        channels: [
            { name: 'BCA', logo: '/src/assets/payments/bca.png' },
            { name: 'BRI', logo: '/src/assets/payments/bri.png' },
            { name: 'BNI', logo: '/src/assets/payments/bni.png' },
            { name: 'Mandiri', logo: '/src/assets/payments/mandiri-full.png' }
        ],
        menuIcon: 'bank',
    },
    {
        id: 1,
        name: 'eWallet',
        title: 'E-Wallet',
        isOpen: false,
        channels: [
            { name: 'Gopay', logo: '/src/assets/payments/gopay.png' },
            { name: 'ShopeePay', logo: '/src/assets/payments/shopeepay.png' },
        ],
        menuIcon: 'wallet',
    },
])

const togglePaymentMenu = id => {
    paymentMethods.value = paymentMethods.value.map(payment => payment.isOpen && payment.id !== id ? { ...payment, isOpen: false } : payment)
    paymentMethods.value = paymentMethods.value.map(payment => payment.id === id ? { ...payment, isOpen: !payment.isOpen } : payment)
}

const items = ref(useRoute().query.items)

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

.menu-icon-card {
    background-image: url("data:image/svg+xml,%3Csvg width='26' height='16' viewBox='0 0 26 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.85743 15.2832H21.9343C24.2296 15.2832 25.4143 14.29 25.4143 12.4092V2.91699C25.4143 1.03613 24.2296 0.0517578 21.9343 0.0517578H3.85743C1.5727 0.0517578 0.377441 1.03613 0.377441 2.91699V12.4092C0.377441 14.2988 1.5727 15.2832 3.85743 15.2832ZM2.48236 3.0752C2.48236 2.23145 3.02181 1.80957 3.99493 1.80957H21.7968C22.7699 1.80957 23.3094 2.23145 23.3094 3.0752V3.70801H2.48236V3.0752ZM3.99493 13.5254C3.02181 13.5254 2.48236 13.1035 2.48236 12.2598V5.77344H23.3094V12.2598C23.3094 13.1035 22.7699 13.5254 21.7968 13.5254H3.99493ZM5.43347 11.9346H8.02495C8.64902 11.9346 9.07212 11.5918 9.07212 11.0996V9.46484C9.07212 8.97266 8.64902 8.62988 8.02495 8.62988H5.43347C4.81998 8.62988 4.39688 8.97266 4.39688 9.46484V11.0996C4.39688 11.5918 4.81998 11.9346 5.43347 11.9346Z' fill='white'/%3E%3C/svg%3E%0A");
    width: 26px;
    height: 16px;
}

.menu-icon-bank {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M2.76855 16.1875C2.76855 15.9459 3.00429 15.75 3.29508 15.75H23.3029C23.5937 15.75 23.8295 15.9459 23.8295 16.1875V18.8125C23.8295 19.0541 23.5937 19.25 23.3029 19.25H3.29508C3.00429 19.25 2.76855 19.0541 2.76855 18.8125V16.1875ZM3.8216 16.625V18.375H22.7764V16.625H3.8216Z" fill="white"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M13.0538 1.80035C13.2073 1.73322 13.3907 1.73322 13.5442 1.80035L23.5482 6.17535C23.7212 6.251 23.8295 6.40006 23.8295 6.5625V 8.3125C23.8295 8.55412 23.5937 8.75 23.3029 8.75H3.29508C3.00429 8.75 2.76855 8.55412 2.76855 8.3125V 6.5625C2.76855 6.40006 2.87686 6.251 3.04985 6.17535L13.0538 1.80035ZM3.8216 6.82663V7.875H22.7764V6.82663L13.299 2.6819L3.8216 6.82663Z" fill="white"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M10.6663 7.875C10.9571 7.875 11.1929 8.07088 11.1929 8.3125L11.1929 16.1875C11.1929 16.4291 10.9571 16.625 10.6663 16.625H5.40112C5.11033 16.625 4.8746 16.4291 4.8746 16.1875L4.8746 8.3125C4.8746 8.07088 5.11033 7.875 5.40112 7.875L10.6663 7.875ZM10.1398 8.75H5.92764L5.92764 15.75H10.1398L10.1398 8.75Z" fill="white"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M21.1971 7.875C21.4879 7.875 21.7236 8.07088 21.7236 8.3125L21.7236 16.1875C21.7236 16.4291 21.4879 16.625 21.1971 16.625H15.9319C15.6411 16.625 15.4054 16.4291 15.4054 16.1875L15.4054 8.3125C15.4054 8.07088 15.6411 7.875 15.9319 7.875L21.1971 7.875ZM20.6706 8.75H16.4584V15.75H20.6706V8.75Z" fill="white"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M13.299 4.8125C12.7174 4.8125 12.2459 5.20425 12.2459 5.6875C12.2459 6.17075 12.7174 6.5625 13.299 6.5625C13.8805 6.5625 14.352 6.17075 14.352 5.6875C14.352 5.20425 13.8805 4.8125 13.299 4.8125ZM11.1929 5.6875C11.1929 4.721 12.1358 3.9375 13.299 3.9375C14.4621 3.9375 15.4051 4.721 15.4051 5.6875C15.4051 6.654 14.4621 7.4375 13.299 7.4375C12.1358 7.4375 11.1929 6.654 11.1929 5.6875Z" fill="white"/%3E%3C/svg%3E');
    width: 26px;
    height: 21px;
}

.menu-icon-wallet {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='16' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1.6C0 0.72 0.72 0 1.6 0H13.6C13.8122 0 14.0157 0.0842854 14.1657 0.234315C14.3157 0.384344 14.4 0.587827 14.4 0.8V1.6H1.6V2.4H15.2C15.4122 2.4 15.6157 2.48429 15.7657 2.63431C15.9157 2.78434 16 2.98783 16 3.2V11.2C16 11.6243 15.8314 12.0313 15.5314 12.3314C15.2313 12.6314 14.8243 12.8 14.4 12.8H1.6C1.17565 12.8 0.768687 12.6314 0.468629 12.3314C0.168571 12.0313 0 11.6243 0 11.2V1.6ZM13.2 8.8C13.5183 8.8 13.8235 8.67357 14.0485 8.44853C14.2736 8.22348 14.4 7.91826 14.4 7.6C14.4 7.28174 14.2736 6.97652 14.0485 6.75147C13.8235 6.52643 13.5183 6.4 13.2 6.4C12.8817 6.4 12.5765 6.52643 12.3515 6.75147C12.1264 6.97652 12 7.28174 12 7.6C12 7.91826 12.1264 8.22348 12.3515 8.44853C12.5765 8.67357 12.8817 8.8 13.2 8.8Z' fill='white'/%3E%3C/svg%3E%0A");
    width: 20px;
    height: 16px;
}

.menu-icon-mobile {
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.07254 22.5841H10.9676C12.6752 22.5841 13.8103 21.4692 13.8103 19.8118V3.37877C13.8103 1.7214 12.6752 0.606445 10.9676 0.606445H3.07254C1.34487 0.606445 0.179688 1.7214 0.179688 3.37877V19.8118C0.179688 21.4692 1.34487 22.5841 3.07254 22.5841ZM3.40402 20.5651C2.61049 20.5651 2.14844 20.1232 2.14844 19.3598V3.83078C2.14844 3.06738 2.61049 2.63546 3.40402 2.63546H10.596C11.3895 2.63546 11.8516 3.06738 11.8516 3.83078V19.3598C11.8516 20.1232 11.3895 20.5651 10.596 20.5651H8.62723V20.2136C8.62723 19.7716 8.33594 19.4803 7.90402 19.4803H6.10603C5.66406 19.4803 5.38281 19.7716 5.38281 20.2136V20.5651H3.40402Z' fill='white'/%3E%3C/svg%3E%0A");
    width: 14px;
    height: 23px;
}
</style>