<template>
    <div
        class="content-area max-w-[1500px] font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div v-if="modalError" tabindex="-1" @click="closeModal"
            class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div class="relative w-full max-w-md max-h-full">
                <div class="modal-card relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button @click="modalError = false"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div class="p-6 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 class="mb-5 font-normal text-gray-500 dark:text-gray-400">
                            tidak ada item yang dipilih!
                        </h3>
                        <button @click="modalError = false"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Tutup
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="font-bold text-3xl py-4">Keranjang</div>

        <!-- Cart Items List -->
        <div v-if="!toEditProduct" class="w-full">
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" @click="toggleCheckAll" :checked="isCheckAll" class=" h-5 w-5 mr-4">
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
                            {{ item.data.category }}</div>
                        <div class="text-md">{{ item.data.variation.current }}</div>
                        <div class="text-md">{{ item.data.duration.current }}</div>
                    </div>
                    <div class="flex flex-col gap-1 text-base justify-between ">
                        <div class=" text-right text-main_blue font-bold">
                            {{ toIDR(cartItems[index].data.price) }}</div>
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
                        <input type="checkbox" @click="toggleCheckAll" :checked="isCheckAll" class=" h-5 w-5">
                    </label>
                    <div class="text-lg text-main_blue font-bold">
                        Select All ({{ cartItems.length }})</div>
                </div>
                <div class="flex flex-row gap-3 items-center">
                    <div class="text-lg text-main_blue font-bold">
                        Total ({{ totalItems }} Items)</div>
                    <div class="text-lg text-main_blue font-bold">
                        {{ toIDR(totalPrice) }}</div>
                    <div @click="cartCheckout"
                        class="flex hover:cursor-pointer ml-auto bg-sec_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Checkout </div>

                </div>
            </div>
        </div>

        <!-- Edit Cart Item -->
        <div v-if="toEditProduct" class="w-full border-[1.5px] border-main_blue rounded-2xl">
            <div class="w-full flex flex-col gap-4 justify-between text-black text-x py-3 px-4">
                <div class="">
                    <div class="text-lg text-slate-500">
                        Pilihan produk</div>
                    <div class="relative">
                        <button @click="toggle(0)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            {{ cartItems[currentItemEdit].data.title }}
                            <svg :class="allMenu[0] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[0]"
                            class="hover:cursor-pointer select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div>
                                <div v-for="(item, index) in cartItems"
                                    class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200">
                                    {{ item.data.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="text-lg text-slate-500">
                        Pilihan Variasi</div>
                    <div class="relative">
                        <button @click="toggle(1)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            {{ cartItems[currentItemEdit].data.variation.current }}
                            <svg :class="allMenu[1] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[1]"
                            class="hover:cursor-pointer select-none absolute z-50 left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div v-for="(variation, options) in cartItems[currentItemEdit].data.variation.options"
                                class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200"
                                @click="setItemDetail('variation', options)">
                                {{ variation }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="text-lg text-slate-500">
                        Lama durasi berlangganan</div>
                    <div class="relative">
                        <button @click="toggle(2)"
                            class="menu-button flex items-center justify-between w-4/5 bg-main_blue font-bold rounded-lg text-white px-3 py-1">
                            {{ cartItems[currentItemEdit].data.duration.current }}
                            <svg :class="allMenu[2] ? 'rotate-180' : ''" width="16" height="10" viewBox="0 0 16 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3198 0.999894L7.81654 8.09082L0.878023 0.999894" stroke="white"
                                    stroke-width="1.8843" />
                            </svg>
                        </button>
                        <div v-if="allMenu[2]"
                            class="hover:cursor-pointer select-none absolute left-0 w-4/5 py-2 mt-2 bg-gray-300 text-gray-500 rounded-md shadow-xl">
                            <div v-for="(duration, options) in cartItems[currentItemEdit].data.duration.options"
                                class="block px-4 py-2 text-sm hover:bg-gray-400 hover:text-gray-200"
                                @click="setItemDetail('duration', options)">
                                {{ duration }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-1">
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
                </div>
                <div class="space-y-3">
                    <div class=""> Kode Promo </div>
                    <input type="text" placeholder="Masukkan kode promo"
                        class="flex w-full hover:cursor-pointer outline-gray-500 activeoutline-[1px] text-center justify-center ml-auto border-2 border-gray-400 py-1 px-3 font-semibold first-letter:text-center rounded-lg" />
                    <div @click="toEditProduct = false"
                        class="flex w-full hover:cursor-pointer justify-center ml-auto bg-orange-500 py-2 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Bayar</div>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { usePaymentStore } from '../../store';
import { RouterLink, onBeforeRouteLeave } from 'vue-router';
import router from '../../router';

const store = usePaymentStore();

//Cart
const cartItems = ref([])

onMounted(() => {
    store.getCart().then(() =>
        cartItems.value = store.cartItems.userCart.map(item => {
            return {
                isChecked: false,
                data: item
            }
        })
    )
})

const selectedItems = computed(() => {
    return cartItems.value.filter(item => item.isChecked).map(item => item.data);
})
const totalItems = computed(() => {
    return selectedItems.value.length;
})
const totalPrice = computed(() => {
    return selectedItems.value.reduce((priceSum, item) => {
        return priceSum + parseInt(item.price);
    }, 0);
})

//Cart edit functions
const currentItemEdit = ref(0);

function setItemDetail(options, optionsIndex) {
    switch (options) {
        case 'variation':
            cartItems.value[currentItemEdit.value].data.variation.current = cartItems.value[currentItemEdit.value].data.variation.options[optionsIndex];
            break;
        case 'duration':
            cartItems.value[currentItemEdit.value].data.duration.current = cartItems.value[currentItemEdit.value].data.duration.options[optionsIndex];
            break;
        default:
            break;
    }
}

//Display functions
const toEditProduct = ref(false);

const allMenu = ref([false, false, false])

const toggle = (index) => {
    if (allMenu.value[index]) {
        allMenu.value[index] = false;
        document.removeEventListener('click', close);
        return;
    }
    else {
        allMenu.value[index] = true
        allMenu.value.forEach((_, i) => {
            if (i !== index) { allMenu.value[i] = false }
        });
        document.addEventListener('click', close);
    }
};

const close = (e) => {
    if (e.target.closest('.menu-button')) return;
    allMenu.value.forEach((_, index) => allMenu.value[index] = false);
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

const modalError = ref(false);

const closeModal = (e) => {
    if (e.target.closest('.modal-card')) return;
    else modalError.value = false;
}

const isEmpty = computed(() => {
    return selectedItems.value.length === 0 ? true : false;
})

//Checkout functions
const cartCheckout = () => {
    if (isEmpty.value) {
        modalError.value = true;
        console.log('No item selected');
    }
    else {
        modalError.value = false;
        const items = selectedItems.value.map(item => item._id);
        router.push({ name: 'Buat Pembayaran', query: { items: items } });
    }
}

//Helpers
onBeforeRouteLeave((to, from, next) => {
    next();
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
