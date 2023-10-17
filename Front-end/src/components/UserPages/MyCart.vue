<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Keranjang</div>

        <div v-if="!toCheckout" class="w-full">
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" @click="toggleCheckAll" v-model="isCheckAll" class=" h-5 w-5 mr-4">
                    <span class="ml-2 text-gray-700 font-bold">Pilih Semua</span>
                </label>
            </div>

            <!-- Cart Items -->
            <div v-for="(item, index) in cartItems" :key="index" class="flex w-full items-center justify-between py-2">

                <div class="pr-8">
                    <label class="inline-flex items-center">
                        <input type="checkbox" v-model="cartItems[index].isChecked"
                            class="form-checkbox h-5 w-5 text-indigo-600">
                    </label>
                </div>

                <div
                    class="notifItem w-full flex flex-row justify-between text-black text-xl border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                    <div class="flex flex-col gap-1 font-medium text-lg">
                        <div class="text-lg text-main_blue font-bold">
                            {{ cartItems[index].name }}</div>
                        <div class="">A10 Matematika Keuangan</div>
                        <div class="">1 Bulan</div>
                    </div>
                    <div class="flex flex-col gap-1 text-base justify-between ">
                        <div class=" text-right text-main_blue font-bold">
                            {{ toIDR(cartItems[index].price) }}</div>
                        <div
                            class="flex ml-auto bg-orange-500 py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                            Lihat Detail</div>
                    </div>
                </div>

            </div>

            <div
                class="checkout w-full flex flex-row justify-between text-lg text-black border-[1.5px] border-main_blue rounded-2xl py-3 px-4 my-3">
                <div class="flex flex-row gap-3 items-center">

                    <label class="inline-flex items-center pr-2">
                        <input type="checkbox" @click="toggleCheckAll" v-model="isCheckAll" class=" h-5 w-5">
                    </label>

                    <div class="text-lg text-main_blue font-bold">
                        Select All (3)</div>
                </div>
                <div class="flex flex-row gap-3 items-center">
                    <div class="text-lg text-main_blue font-bold">
                        Total (2 Items)</div>
                    <div class="text-lg text-main_blue font-bold">
                        {{ toIDR(totalPrice) }}</div>
                    <div @click="toCheckout = true"
                        class="flex hover:cursor-pointer ml-auto bg-sec_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Checkout</div>
                </div>
            </div>
        </div>

        <div v-if="toCheckout" class="w-full border-[1.5px] border-main_blue rounded-2xl">
            <div class="w-full flex flex-col justify-between text-black text-x py-3 px-4">
                <div class="py-2">
                    <div class="text-lg text-slate-500">
                        Pilihan produk</div>
                    <div class="relative">
                        <button @click="toggle(0)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            Akademi
                            <svg :class="menuProduk ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[0]"
                            class="select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="text-lg text-slate-500">
                        Pilihan Variasi</div>
                    <div class="relative">
                        <button @click="toggle(1)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            Akademi
                            <svg :class="menuProduk ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[1]"
                            class="select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="text-lg text-slate-500">
                        Lama durasi berlangganan</div>
                    <div class="relative">
                        <button @click="toggle(2)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            Akademi
                            <svg :class="menuVariasi ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[2]"
                            class="select-none absolute left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                            <div class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                Dropdown List 1
                            </div>
                        </div>
                    </div>
                </div>


                <div class="font-bold">
                    Rincian Pembayaran</div>

                <div class="flex gap-1 text-base justify-between ">
                    <div class="">
                        Harga</div>
                    <div class="">
                        Rp 1.000.000</div>
                </div>
                <div class="flex gap-1 text-base justify-between ">
                    <div class="">
                        Diskon 10%</div>
                    <div class="">
                        - Rp 100.000</div>
                </div>
                <div class="flex gap-1 text-base justify-between ">
                    <div class="text-main_blue font-bold">
                        Total Pembayaran</div>
                    <div class="text-main_blue font-bold">
                        Rp 900.000</div>
                </div>

                <div class="flex gap-1 text-base justify-between ">
                    <div class="font-bold py-4">
                        Metode Pembayaran</div>
                    <div class="font-bold py-4 text-main_blue">
                        Pilih Metode Pembayaran ></div>
                </div>
                <div @click="makePayment"
                    class="flex w-full hover:cursor-pointer justify-center ml-auto bg-orange-500 py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                    Bayar</div>
            </div>
        </div>



    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import router from '../../router';
import axios from 'axios';

const cartItems = ref([
    { name: 'Akademi', price: '1000000', isChecked: false },
    { name: 'Tutor Privat', price: '900000', isChecked: false },
    { name: 'Jasa Aktuaria', price: '1200000', isChecked: false },
])

function toIDR(num) {
    return 'Rp. ' + num
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const toCheckout = ref(false);

const allMenu = ref([false, false, false])

function toggle(index) {
    if (allMenu.value[index]) {
        allMenu.value[index] = false;
        document.removeEventListener('click', close);
        return;
    }
    else {
        allMenu.value[index] = true;
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

const isCheckAll = computed(() => {
    return cartItems.value.every(items => items.isChecked === true);
})

const toggleCheckAll = () => {
    if (isCheckAll.value) {
        cartItems.value.forEach(item => {
            item.isChecked = false;
        });
    }
    else {
        cartItems.value.forEach(item => {
            item.isChecked = true;
        });
    }
}

const selectedItems = computed(() => {
    return cartItems.value.filter(item => item.isChecked);
})

const totalPrice = computed(() => {
    return selectedItems.value.reduce((acc, item) => {
        return acc + parseInt(item.price);
    }, 0);
})

const paymentData = ref(totalPrice)

async function makePayment() {
    try {
        const response = await axios.post('http://localhost:8080/v2/payment',
            {amount: paymentData.value}
        ); 
        console.log(response.data);
        localStorage.setItem('paymentData', JSON.stringify(response.data));
    } catch (error) {
        console.error(error);
    } finally {
        router.push({ name: "Pembayaran Saya" });
    }
}

</script>
