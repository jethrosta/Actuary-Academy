<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="flex text-white gap-x-8 py-8">
            <div class="w-3/5 space-y-3">
                <div class="flex-grow">
                    <div class="faqs">
                        <div class="faq text-black" v-for="faq in data" :key="faq.id">
                            <div class="header" @click="() => toggleAnswer(faq.id)">
                                <div class="question">
                                    {{ faq.question }}
                                </div>
                            </div>
                            <div :class="['answer', { open: faq.isOpen }]">
                                <p> {{ faq.answer }} </p>
                            </div>
                        </div>
                    </div>
                    <button @click="toggle(0)"
                        class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                        <div class="flex gap-4 items-center">
                            <svg class="w-8" width="26" height="16" viewBox="0 0 26 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.85743 15.2832H21.9343C24.2296 15.2832 25.4143 14.29 25.4143 12.4092V2.91699C25.4143 1.03613 24.2296 0.0517578 21.9343 0.0517578H3.85743C1.5727 0.0517578 0.377441 1.03613 0.377441 2.91699V12.4092C0.377441 14.2988 1.5727 15.2832 3.85743 15.2832ZM2.48236 3.0752C2.48236 2.23145 3.02181 1.80957 3.99493 1.80957H21.7968C22.7699 1.80957 23.3094 2.23145 23.3094 3.0752V3.70801H2.48236V3.0752ZM3.99493 13.5254C3.02181 13.5254 2.48236 13.1035 2.48236 12.2598V5.77344H23.3094V12.2598C23.3094 13.1035 22.7699 13.5254 21.7968 13.5254H3.99493ZM5.43347 11.9346H8.02495C8.64902 11.9346 9.07212 11.5918 9.07212 11.0996V9.46484C9.07212 8.97266 8.64902 8.62988 8.02495 8.62988H5.43347C4.81998 8.62988 4.39688 8.97266 4.39688 9.46484V11.0996C4.39688 11.5918 4.81998 11.9346 5.43347 11.9346Z"
                                    fill="white" />
                            </svg>
                            <div class="">Direct Debit</div>
                        </div>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                stroke-width="1.8843" />
                        </svg>
                    </button>
                    <div v-if="allMenu[0]" :class="['menu-items', { open: allMenu[0] }]"
                        class="flex flex-col text-black border-[1px] border-main_blue py-3">
                        <button v-for="method in paymentMethods.directDebit" @click="goToPayment('creditCard', method)"
                            class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                            {{ method }}
                        </button>
                    </div>
                </div>
                <button @click="toggle(1)"
                    class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <svg class="w-8" width="14" height="23" viewBox="0 0 14 23" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.07254 22.5841H10.9676C12.6752 22.5841 13.8103 21.4692 13.8103 19.8118V3.37877C13.8103 1.7214 12.6752 0.606445 10.9676 0.606445H3.07254C1.34487 0.606445 0.179688 1.7214 0.179688 3.37877V19.8118C0.179688 21.4692 1.34487 22.5841 3.07254 22.5841ZM3.40402 20.5651C2.61049 20.5651 2.14844 20.1232 2.14844 19.3598V3.83078C2.14844 3.06738 2.61049 2.63546 3.40402 2.63546H10.596C11.3895 2.63546 11.8516 3.06738 11.8516 3.83078V19.3598C11.8516 20.1232 11.3895 20.5651 10.596 20.5651H8.62723V20.2136C8.62723 19.7716 8.33594 19.4803 7.90402 19.4803H6.10603C5.66406 19.4803 5.38281 19.7716 5.38281 20.2136V20.5651H3.40402Z"
                                fill="white" />
                        </svg>
                        <div class="">Digital Banking</div>
                    </div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div v-if="allMenu[1]" class="flex flex-col text-black border-[1px] border-main_blue py-3">
                    <button v-for="method in paymentMethods.digitalBanking"
                        class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                        {{ method }}
                    </button>
                </div>
                <button @click="toggle(2)"
                    class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <svg class="w-8" width="16" height="13" viewBox="0 0 16 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 1.6C0 0.72 0.72 0 1.6 0H13.6C13.8122 0 14.0157 0.0842854 14.1657 0.234315C14.3157 0.384344 14.4 0.587827 14.4 0.8V1.6H1.6V2.4H15.2C15.4122 2.4 15.6157 2.48429 15.7657 2.63431C15.9157 2.78434 16 2.98783 16 3.2V11.2C16 11.6243 15.8314 12.0313 15.5314 12.3314C15.2313 12.6314 14.8243 12.8 14.4 12.8H1.6C1.17565 12.8 0.768687 12.6314 0.468629 12.3314C0.168571 12.0313 0 11.6243 0 11.2V1.6ZM13.2 8.8C13.5183 8.8 13.8235 8.67357 14.0485 8.44853C14.2736 8.22348 14.4 7.91826 14.4 7.6C14.4 7.28174 14.2736 6.97652 14.0485 6.75147C13.8235 6.52643 13.5183 6.4 13.2 6.4C12.8817 6.4 12.5765 6.52643 12.3515 6.75147C12.1264 6.97652 12 7.28174 12 7.6C12 7.91826 12.1264 8.22348 12.3515 8.44853C12.5765 8.67357 12.8817 8.8 13.2 8.8Z"
                                fill="white" />
                        </svg>
                        <div class="">E-Money</div>
                    </div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div v-if="allMenu[2]" class="flex flex-col text-black border-[1px] border-main_blue py-3">
                    <button v-for="method in paymentMethods.eMoney"
                        class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                        {{ method }}
                    </button>
                </div>
                <button @click="toggle(3)"
                    class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <svg class="w-8" width="16" height="18" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.9573 8.58307V17.3922H1.04349V8.58307C1.92421 8.79648 2.85263 8.67888 3.65233 8.25262V12.1746H12.3484V8.26132C13.1495 8.68386 14.0776 8.79832 14.9573 8.58307ZM1.9131 0H5.39155L4.80891 5.24376C4.71363 5.9489 4.36941 6.59675 3.83838 7.07037C3.30735 7.54399 2.62451 7.81217 1.9131 7.82651C0.469545 7.82651 -0.330499 6.7221 0.130396 5.34812L1.9131 0ZM6.26116 0H9.73961L10.3483 5.47856C10.4962 6.78298 9.55699 7.82651 8.24388 7.82651H7.7569C7.45711 7.83429 7.15922 7.77682 6.88384 7.6581C6.60846 7.53938 6.36216 7.36223 6.16201 7.13891C5.96185 6.9156 5.81262 6.65146 5.72463 6.36477C5.63665 6.07809 5.61201 5.7757 5.65243 5.47856L6.26116 0ZM10.6092 0H14.0877L15.8704 5.34812C16.3313 6.7221 15.5225 7.82651 14.0877 7.82651C13.3757 7.81395 12.6919 7.54638 12.1606 7.07244C11.6292 6.59849 11.2854 5.94963 11.1919 5.24376L10.6092 0Z"
                                fill="white" />
                        </svg>
                        <div class="">Convenience Store</div>
                    </div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div v-if="allMenu[3]" class="flex flex-col text-black border-[1px] border-main_blue py-3">
                    <button v-for="method in paymentMethods.convenienceStore"
                        class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                        {{ method }}
                    </button>
                </div>
                <button @click="toggle(4)"
                    class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <svg class="w-8" width="26" height="21" viewBox="0 0 26 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.76855 16.1875C2.76855 15.9459 3.00429 15.75 3.29508 15.75H23.3029C23.5937 15.75 23.8295 15.9459 23.8295 16.1875V18.8125C23.8295 19.0541 23.5937 19.25 23.3029 19.25H3.29508C3.00429 19.25 2.76855 19.0541 2.76855 18.8125V16.1875ZM3.8216 16.625V18.375H22.7764V16.625H3.8216Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.0538 1.80035C13.2073 1.73322 13.3907 1.73322 13.5442 1.80035L23.5482 6.17535C23.7212 6.251 23.8295 6.40006 23.8295 6.5625V8.3125C23.8295 8.55412 23.5937 8.75 23.3029 8.75H3.29508C3.00429 8.75 2.76855 8.55412 2.76855 8.3125V6.5625C2.76855 6.40006 2.87686 6.251 3.04985 6.17535L13.0538 1.80035ZM3.8216 6.82663V7.875H22.7764V6.82663L13.299 2.6819L3.8216 6.82663Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.6663 7.875C10.9571 7.875 11.1929 8.07088 11.1929 8.3125L11.1929 16.1875C11.1929 16.4291 10.9571 16.625 10.6663 16.625H5.40112C5.11033 16.625 4.8746 16.4291 4.8746 16.1875L4.8746 8.3125C4.8746 8.07088 5.11033 7.875 5.40112 7.875L10.6663 7.875ZM10.1398 8.75H5.92764L5.92764 15.75H10.1398L10.1398 8.75Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.1971 7.875C21.4879 7.875 21.7236 8.07088 21.7236 8.3125L21.7236 16.1875C21.7236 16.4291 21.4879 16.625 21.1971 16.625H15.9319C15.6411 16.625 15.4054 16.4291 15.4054 16.1875L15.4054 8.3125C15.4054 8.07088 15.6411 7.875 15.9319 7.875L21.1971 7.875ZM20.6706 8.75H16.4584V15.75H20.6706V8.75Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.299 4.8125C12.7174 4.8125 12.2459 5.20425 12.2459 5.6875C12.2459 6.17075 12.7174 6.5625 13.299 6.5625C13.8805 6.5625 14.352 6.17075 14.352 5.6875C14.352 5.20425 13.8805 4.8125 13.299 4.8125ZM11.1929 5.6875C11.1929 4.721 12.1358 3.9375 13.299 3.9375C14.4621 3.9375 15.4051 4.721 15.4051 5.6875C15.4051 6.654 14.4621 7.4375 13.299 7.4375C12.1358 7.4375 11.1929 6.654 11.1929 5.6875Z"
                                fill="white" />
                        </svg>
                        <div class="">ATM/Bank Transfer</div>
                    </div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div v-if="allMenu[4]" class="flex flex-col text-black border-[1px] border-main_blue py-3">
                    <button v-for="method in paymentMethods.atmBankTransfer" @click="goToPayment('bankTransfer', method)"
                        class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                        {{ method }}
                    </button>
                </div>
                <button @click="toggle(5)"
                    class="menu-button flex items-center w-full justify-between bg-main_blue px-5 py-3">
                    <div class="flex gap-4 items-center">
                        <svg class="w-8 -mx-[1px]" width="30" height="24" viewBox="0 0 30 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.1041 3C9.12217 3 4.27282 7.02944 4.27282 12C4.27282 16.9706 9.12217 21 15.1041 21C21.0861 21 25.9355 16.9706 25.9355 12C25.9355 7.02944 21.0861 3 15.1041 3ZM3.06934 12C3.06934 6.47715 8.4575 2 15.1041 2C21.7508 2 27.1389 6.47715 27.1389 12C27.1389 17.5228 21.7508 22 15.1041 22C8.4575 22 3.06934 17.5228 3.06934 12Z"
                                fill="white" />
                            <path
                                d="M17.6796 15.14C17.1741 15.52 16.44 15.73 15.4652 15.77V17H14.8273V15.79C14.2015 15.76 13.6118 15.66 13.0703 15.49C12.5167 15.32 12.0834 15.09 11.7705 14.83L12.1436 14.22C12.4445 14.46 12.8296 14.66 13.311 14.83C13.7924 14.99 14.2978 15.09 14.8273 15.12V12.32C14.2376 12.2 13.7442 12.07 13.3591 11.93C12.962 11.79 12.637 11.59 12.3843 11.32C12.1195 11.05 11.9871 10.69 11.9871 10.26C11.9871 9.71 12.2278 9.25 12.7092 8.88C13.1906 8.51 13.9007 8.29 14.8394 8.23V7H15.4772V8.21C15.9586 8.22 16.44 8.29 16.8973 8.41C17.3547 8.53 17.7518 8.68 18.0767 8.87L17.7518 9.5C17.4028 9.32 17.0297 9.17 16.6326 9.06C16.2354 8.95 15.8503 8.89 15.4652 8.88V11.7C16.091 11.83 16.6085 11.96 17.0177 12.09C17.4148 12.22 17.7518 12.42 18.0286 12.69C18.3054 12.96 18.4378 13.31 18.4378 13.75C18.4378 14.3 18.1851 14.76 17.6796 15.14ZM13.4193 11.07C13.7442 11.26 14.2136 11.42 14.8273 11.56V8.9C14.2015 8.95 13.7201 9.09 13.3952 9.33C13.0703 9.58 12.9138 9.87 12.9138 10.23C12.9258 10.6 13.0823 10.88 13.4193 11.07ZM16.9936 14.69C17.3306 14.46 17.5111 14.16 17.5111 13.8C17.5111 13.42 17.3306 13.13 16.9816 12.94C16.6326 12.75 16.1271 12.59 15.4652 12.45V15.11C16.1391 15.06 16.6446 14.92 16.9936 14.69Z"
                                fill="white" />
                        </svg>
                        <div class="">Pay Later</div>
                    </div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                            stroke-width="1.8843" />
                    </svg>
                </button>
                <div v-if="allMenu[5]" class="flex flex-col text-black border-[1px] border-main_blue py-3">
                    <button v-for="method in paymentMethods.payLater"
                        class="flex hover:bg-gray-200 flex-col w-full px-5 py-3">
                        {{ method }}
                    </button>
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
import { routerKey } from 'vue-router';
import router from '../../router/index.js';
import Accordion from './Accordion.vue';

const paymentMethods = {
    directDebit: ['BCA', 'BNI', 'Mandiri', 'BRI', 'Lainnya'],
    digitalBanking: ['BCA', 'BNI', 'Mandiri', 'BRI', 'Lainnya'],
    eMoney: ['OVO', 'DANA', 'LinkAja', 'GoPay', 'Lainnya'],
    convenienceStore: ['Alfamart', 'Indomaret', 'Lawson', 'Lainnya'],
    atmBankTransfer: ['BCA', 'BNI', 'Mandiri', 'BRI', 'Lainnya'],
    payLater: ['Kredivo', 'Akulaku', 'Lainnya'],
}

const allMenu = ref([false, false, false, false, false, false])

function toggle(index) {
    if (allMenu.value[index]) {
        allMenu.value[index] = false;
        document.removeEventListener('click', close);
        return;
    }
    else {
        allMenu.value.forEach((item, i) => {
            if (i !== index) {
                allMenu.value[i] = false;
            }
            else {
                allMenu.value[i] = true;
            }
        });
        document.addEventListener('click', close);
    }
};
const close = (e) => {
    if (e.target.closest('.menu-button')) return;
    allMenu.value[0] = false;
    allMenu.value[1] = false;
    allMenu.value[2] = false;
    document.removeEventListener('click', close);
};

async function setlocal(title, value) { localStorage.setItem(`${title}`, value) }

function goToPayment(option, provider) {
    switch (option) {
        case 'creditCard':
            setlocal('card', provider).then(() => {
                router.push('/payments/credit-card')
                    .then(() => { router.go(); })
            });
            break;
        case 'bankTransfer':
            setlocal('bank', provider).then(() => {
                router.push({ name: 'Buat Pembayaran' })
                    .then(() => { router.go(); })
            });
        default:
            break;
    }
}

const toggleAnswer = id => {
    data.value = data.value.map(faq => faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq)
    data.value = data.value.map(faq => faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)
}

const data = ref([
    {
        "id": 1,
        "question": "What is the capital of Australia?",
        "answer": "The capital of Australia is Canberra. It is a relatively new city, established in 1913, and is located between Sydney and Melbourne. Canberra is home to numerous national institutions and landmarks, including Parliament House, the Australian War Memorial, and the National Gallery of Australia. The city is known for its modern architecture and urban planning, and has a population of over 400,000 people. Despite not being one of the country's largest cities, Canberra is an important political and cultural center, and has a significant impact on the nation's economy and development.",
        "isOpen": false
    },
    {
        "id": 2,
        "question": "What is the tallest animal on earth?",
        "answer": "The tallest animal on earth is the giraffe, which can grow up to 18 feet tall. Giraffes are known for their long necks, which can reach up to 6 feet in length, and are used to reach leaves and fruits from tall trees. Giraffes are found in savannas and grasslands in Africa, and are herbivorous, feeding on leaves, fruits, and flowers. Despite their size, giraffes are social animals and live in groups called towers. They are also known for their distinctive spotted coat, which helps them blend in with their environment and avoid predators.",
        "isOpen": false
    },
    {
        "id": 3,
        "question": "What is the largest country in the world by area?",
        "answer": "The largest country in the world by area is Russia, which covers over 17 million square kilometers. Russia is located in northern Eurasia, and is bordered by Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, North Korea, and Mongolia. Russia has a population of over 144 million people, and is known for its rich history and culture, as well as its natural resources, such as oil, gas, and minerals. The country is also home to numerous landmarks and tourist attractions, including the Red Square, the Kremlin, and the Hermitage Museum.",
        "isOpen": false
    },
    {
        "id": 4,
        "question": "What is the largest animal on earth?",
        "answer": "The largest animal on earth is the blue whale, which can grow up to 100 feet in length and weigh up to 200 tons. Blue whales are found in all the world's oceans, and are known for their distinctive blue-gray coloration and long, slender bodies. They are filter feeders, feeding on tiny shrimp-like creatures called krill, and can consume up to 4 tons of krill in a single day. Despite their enormous size, blue whales are graceful swimmers and can travel at speeds of up to 30 miles per hour.",
        "isOpen": false
    },
    {
        "id": 5,
        "question": "What is the capital of France?",
        "answer": "The capital of France is Paris. It is one of the most famous cities in the world, known for its beautiful architecture, rich history, and world-class museums and landmarks. Paris is home to iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral, and is famous for its cuisine and fashion. The city has a population of over 2 million people, and is a global center for art, fashion, and culture. Despite its cosmopolitan character, Paris has retained much of its historic charm, with narrow streets",
        "isOpen": false
    }
])

</script>

<style scoped>
.main .faqs {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.faq {
    flex-grow: 1;
}

.faq .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid antiquewhite;
    padding: 10px;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
}

.faq .header .question {
    font-weight: 700;
}

.faq .header .icon {
    width: 30px;
    height: 30px;
    transition: transform 0.5s;
}

.faq .header .icon img {
    width: 100%;
    height: auto;
}

.faq .header .icon.open {
    transform: rotate(180deg);
}

.faq .answer {
    height: 0;
    overflow-y: scroll;
    line-height: 1.5;
    background-color: antiquewhite;
    transition: height 0.5s;
}

.faq .answer::-webkit-scrollbar {
    width: 5px;
}

.faq .answer::-webkit-scrollbar-track {
    appearance: none;
    background-color: transparent;
}

.faq .answer::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(232, 210, 182);
    border-radius: 50px;
}

.faq .answer p {
    padding: 10px;
}

.faq .answer.open {
    height: 200px;
}


</style>