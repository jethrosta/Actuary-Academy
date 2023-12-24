<template>
    <div class="bg-main_blue mb-auto min w-full px-6 pt-4 pb-20 bottom-20">
        <div class="py-3">
            <div class="pb-4">Invoice Number: {{ invoice }}</div>
            <div class="flex flex-row justify-between">
                <div class="font-bold">Total Payment</div>
                <div>{{ toIDR(amount) }}</div>
            </div>
        </div>
        <div class="py-3">
            <div class="font-bold">Nama</div>
            <div>{{ userData.name }}</div>
        </div>
        <div class="py-3">
            <div class="font-bold">Email</div>
            <div>{{ 'userData.email' }}</div>
        </div>
        <div class="py-3">
            <div class="font-bold">Nomor Telepon</div>
            <div>{{ 'userData.phone' }}</div>
        </div>
        <div class="space-y-2 py-3">
            <div class="font-bold">Detail Pembelian</div>
            <div class="space-y-2">
                <div v-for="item in items" class="flex flex-row justify-between">
                    <div class="w-1/3">{{ item.name }}</div>
                    <div class="w-1/3 text-center">x {{ item.quantity }}</div>
                    <div class="w-1/3">{{ toIDR(item.price) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue';

const props = defineProps({
    invoice: String,
    amount: Number,
    items: Array,
    userData: Object,
})

const invoice = computed(() => props.invoice ? props.invoice : 'Belum dibuat')

const items = computed(() => props.items ? props.items : [{name: 'memuat...', price: 0, quantity: 0}] )

const amount = computed(() => props.amount ? props.amount : 0)

const userData = ref(props.userData)

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
