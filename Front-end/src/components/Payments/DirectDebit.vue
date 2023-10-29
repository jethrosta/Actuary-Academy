<template>
    <div>
        <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
            <div class="py-2">
                <div class="font-bold">Metode Pembayaran: </div>
                <div>Direct Debit: {{ theBank }}</div>
            </div>
            <button @click="makePayment" class="p-3 text-white font-bold bg-[#ff0000]">
                Buat Tagihan
            </button>
            <div>{{ errorMessage }}</div>
        </div>
    </div>
</template>

<script setup>
import router from '../../router/index.js';
import { routerKey, useRoute } from 'vue-router';
import { onMounted, computed, ref, resolveComponent } from 'vue';
import axios from 'axios';
const route = useRoute();

//For Storing Local pending payment data
const paymentData = ref({})

//Payment Data for Backend
const paymentRequest = ref({})

// Hooks
onMounted(() => {
    getPendingData()
        .then(() => {
            theAmount.value = toIDR(paymentData.value.amount);
        }).then(() => {
            setData();
        })
})

//data for display
const theAmount = ref(0)
const theBank = ref('')
const errorMessage = ref('');
const isVanumber = computed(() => {
    return paymentData.value.vaNumber !== "";
})

function setData() {
    paymentRequest.value.transaction_details.gross_amount = paymentData.value.amount;
}

async function makePayment() {
    try {
        const response = await axios.post('http://localhost:8080/v2/payment', paymentRequest.value);
        console.log(response.data);
        localStorage.setItem('PendingDirectDebitPayment', JSON.stringify(response.data))
        let redirectUrl = await response.data.redirect_url;
        router.push(redirectUrl).then(() => {
            router.go();
        })
    } catch (error) {
        console.error(error);
        errorMessage.value = 'Terjadi Error';
    } finally {
        console.log(JSON.stringify(paymentRequest.value))
        //localStorage.setItem('pendingPaymentData', JSON.stringify(paymentData.value))
        //router.go();
    }
}

//Helpers
async function getPendingData() {
    paymentData.value = await JSON.parse(localStorage.getItem('pendingPaymentData'))
    let bank = route.params.providerName;
    theBank.value = bank;
    selectRequestSchema(bank);
}

function setVaNumber(responseVaNumber) {
    paymentData.value.vaNumber = responseVaNumber;
}

function toIDR(num) {
    // Add a dot as a thousands separator
    let formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // Remove trailing zeros (including those after the decimal point)
    formattedNum = formattedNum.replace(/(\.\d*?[1-9])0+$/, '$1');
    return formattedNum;
}

function selectRequestSchema(bankParam) {
    let bank = bankParam.toLowerCase();
    switch (bank) {
        case 'bca':
            paymentRequest.value = {
                payment_type: "bca_klikpay",
                transaction_details: {
                    order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
                    gross_amount: 0
                },
                item_details: [
                    {
                        id: "1",
                        price: 3100000,
                        quantity: 1,
                        name: "Mobil"
                    }
                ],
                customer_details: {
                    first_name: "John",
                    last_name: "Baker",
                    email: "john.baker@email.com",
                    phone: "08123456789"
                },
                bca_klikpay: {
                    description: "Pembelian Barang"
                }
            };
            break;
        case 'bni':
            paymentRequest.value = {
                payment_type: 'bank_transfer',
                transaction_details: {
                    order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
                    gross_amount: 0
                },
                bank_transfer: {
                    bank: 'bni'
                },
                customer_details: {
                    first_name: 'Toni',
                    last_name: 'Dev',
                    email: 'tonidev@example.com',
                },
            };
            break;
        case 'bri':
            paymentRequest.value = {
                payment_type: "bri_epay",
                transaction_details: {
                    order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
                    gross_amount: 0
                },
                item_details: [
                    {
                        id: "1",
                        price: 3100000,
                        quantity: 1,
                        name: "Mobil"
                    }
                ],
                customer_details: {
                    first_name: "Andri",
                    last_name: "Litani", // Optional
                    email: "andri@litani.com",
                    phone: "081122334455"
                }
            };
            break;
        case 'mandiri':
            paymentRequest.value = {
                payment_type: 'echannel',
                transaction_details: {
                    order_id: 'order-id-node-' + Math.round((new Date()).getTime() / 1000),
                    gross_amount: 0
                },
                echannel: {
                    bill_info1: 'test Payment',
                    bill_info2: 'pake mandiri'
                },
                customer_details: {
                    first_name: 'Toni',
                    last_name: 'Dev',
                    email: 'tonidev@example.com'
                },
            };
            break;
        default: break;
    }
}

</script>
