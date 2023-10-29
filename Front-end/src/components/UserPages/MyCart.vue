<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Keranjang</div>

        <div v-if="!toEditProduct" class="w-full">
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
                            {{ item.name }}</div>
                        <div class="text-md">{{ item.variation }}</div>
                        <div class="text-md">{{ item.duration }}</div>
                    </div>
                    <div class="flex flex-col gap-1 text-base justify-between ">
                        <div class=" text-right text-main_blue font-bold">
                            {{ toIDR(cartItems[index].price) }}</div>
                        <button @click="toEditProduct = true, currentItemEdit = index"
                            class="flex ml-auto bg-orange-500 py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                            Lihat Detail</button>
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
                        Total ({{ totalItems }} Items)</div>
                    <div class="text-lg text-main_blue font-bold">
                        {{ toIDR(totalPrice) }}</div>
                    <div @click="toPayment()"
                        class="flex hover:cursor-pointer ml-auto bg-sec_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Checkout</div>
                </div>
            </div>
        </div>

        <div v-if="toEditProduct" class="w-full border-[1.5px] border-main_blue rounded-2xl">
            <div class="w-full flex flex-col justify-between text-black text-x py-3 px-4">
                <div class="py-2">
                    <div class="text-lg text-slate-500">
                        Pilihan produk</div>
                    <div class="relative">
                        <button @click="toggle(0)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            {{ cartItems[currentItemEdit].name }}
                            <svg :class="allMenu[0] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[0]"
                            class="hover:cursor-pointer select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div>
                                <div v-for="(item, index) in cartItems" @click=" currentItemEdit = index;"
                                    class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                    {{ item.name }}
                                </div>
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
                            {{ cartItems[currentItemEdit].variation }}
                            <svg :class="allMenu[1] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[1]"
                            class="hover:cursor-pointer select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div v-for="(variation, index) in getCurrentItem(currentItemEdit).variationOptions"
                                class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200"
                                @click="setItemDetail({ option: 'variation' }, currentItemEdit, index)">
                                {{ variation }}
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
                            {{ cartItems[currentItemEdit].duration }}
                            <svg :class="allMenu[2] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[2]"
                            class="hover:cursor-pointer select-none absolute left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div v-for="(duration, index) in getCurrentItem(currentItemEdit).durationOptions"
                                class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200"
                                @click="setItemDetail({ option: 'duration' }, currentItemEdit, index)">
                                {{ duration }}
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
                <div @click="toEditProduct = false"
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
    {
        name: 'Akademi',
        price: '1000000',
        variation: 'A10 Matematika Keuangan',
        duration: '1 Bulan',
        isChecked: false,
        isEditing: false,
        variationOptions: [
            'A10 Matematika Keuangan',
            'A11 Statistika',
            'A12 Matematika Diskrit',
        ],
        durationOptions: [
            '1 Bulan',
            '2 Bulan',
            '4 Bulan',
        ]
    },
    {
        name: 'Tutor Privat',
        price: '900000',
        variation: 'A Tutor 1',
        duration: '1 Bulan',
        isChecked: false,
        isEditing: false,
        variationOptions: [
            'A Tutor 1',
            'A Tutor 2',
            'A Tutor 3',
        ],
        durationOptions: [
            '1 Bulan',
            '3 Bulan',
            '6 Bulan',
        ]
    },
    {
        name: 'Jasa Aktuaria',
        price: '1200000',
        variation: 'A Jasa 1',
        duration: '2 Bulan',
        isChecked: false,
        isEditing: false,
        variationOptions: [
            'A Jasa 1',
            'A Jasa 2',
            'A Jasa 3',
        ],
        durationOptions: [
            '2 Bulan',
            '3 Bulan',
            '6 Bulan',
        ]
    },
])

const currentItemEdit = ref(0);

const getCurrentItem = (index) => {
    return cartItems.value[index]
}

function setItemDetail(option, itemIndex, optionIndex) {
    switch (option.option) {
        case 'variation':
            cartItems.value[itemIndex].variation = cartItems.value[itemIndex].variationOptions[optionIndex];
            break;
        case 'duration':
            cartItems.value[itemIndex].duration = cartItems.value[itemIndex].durationOptions[optionIndex];
            break;
        default:
            break;
    }
}

function toIDR(num) {
    return 'Rp. ' + num
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const toEditProduct = ref(false);

const allMenu = ref([false, false, false])

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

const totalItems = computed(() => { return selectedItems.value.length })

const totalPrice = computed(() => {
    return selectedItems.value.reduce((acc, item) => {
        return acc + parseInt(item.price);
    }, 0);
})

const paymentData = ref({
    method: '',
    provider: '',
    vaNumber: '',
    amount: totalPrice,
})

function toPayment() {
    localStorage.setItem('pendingPaymentData', JSON.stringify(paymentData.value));
    router.push('/payments').then(() => router.go(0))
}


</script>
