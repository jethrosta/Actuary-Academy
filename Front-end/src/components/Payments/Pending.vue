<template>
    <div class="p-20 font-inter text-black max-w-[1500px] mx-auto">
        <div class="font-bold text-main_blue text-3xl py-2">
            Pembayaran
        </div>
        <div class="flex gap-x-10 items-center py-4">
            <div
                class="notifItem flex flex-1 flex-row justify-between text-black text-xl border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                <div class="flex flex-col gap-2 font-medium text-lg">
                    <div class="text-lg text-main_blue font-bold">
                        Total Pembayaran</div>
                    <div class="font-bold">Metode Pembayaran</div>
                    <div>Waktu Pembayaran</div>
                </div>
                <div class="flex flex-col gap-2 text-right text-base justify-between ">
                    <div class="text-main_blue font-bold">
                        {{ toIDR(paymentData.data.gross_amount) }}
                    </div>
                    <div class="uppercase">{{ paymentData.data.va_numbers[0].bank.toUpperCase() }} (VA)</div>
                    <div class="flex flex-row gap-x-2 items-center">
                        <div>5 Juni 2023</div>
                        <div
                            class="flex ml-auto bg-main_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                            23:59:40</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-1 flex-col text-center gap-y-1">
                <div>Pembayaran dapat dilakukan melalui ATM BNI atau <i>internet banking</i></div>
                <div class="font-bold">Nomor Virtual Account </div>
                <div class="flex gap-4 font-semibold text-white justify-center">
                    <div class="flex bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                        {{ paymentData.data.va_numbers[0].va_number }}</div>
                    <div class="flex bg-main_blue py-1 px-3 first-letter:text-center rounded-lg">
                        Salin</div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div>Petunjuk Pembayaran</div>
            <div>
                1. Buka aplikasi m-banking di smartphone. <br>
                2. Masukkan username dan password. <br>
                3. Pilih menu Transfer > Bank Lain Dalam Negeri. <br>
                4. Masukkan Kode Bank dan Nomor Virtual Accout Tujuan. <br>
                5. Masukkan nominal yang harus dibayarkan. <br>
                6. Layar akan menunjukkan konfirmasi. <br>
                7. Masukkan PIN transaksi. <br>
                8. Selesai. <br>
            </div>
        </div>
    </div>
    
    <Footer />
</template>

<script setup>
import router from '../../router';
import Footer from '../Footer.vue';
import { computed, onBeforeMount, ref } from 'vue';
import { usePaymentStore } from '../../store';

const store = usePaymentStore()

//state Data
const paymentData = computed(() => JSON.parse(localStorage.getItem('paymentData')))

onBeforeMount(() => {
    const isPaymntExist = localStorage.getItem('paymentData')
    if (!isPaymntExist) {router.go(-1)}
})

//Helpers
function toIDR(num) {
    const idr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Set to 0 to remove decimal places
    }).format(num);
    return idr;
}

</script>
