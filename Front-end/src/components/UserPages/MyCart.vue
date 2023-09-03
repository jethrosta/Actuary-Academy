<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Keranjang</div>

        <div class="w-full">
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" class=" h-5 w-5 mr-4">
                    <span class="ml-2 text-gray-700 font-bold">Pilih Semua</span>
                </label>
            </div>

            <!-- Cart Items -->
            <div v-for="(item, index) in cartItems" :key="index" class="flex w-full items-center justify-between py-2">

                <div class="pr-8">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600">
                    </label>
                </div>

                <div
                    class="notifItem w-full flex flex-row justify-between text-black text-xl border-[1.5px] border-main_blue rounded-2xl py-3 px-4">
                    <div class="flex flex-col gap-1 font-medium text-lg">
                        <div class="text-lg text-main_blue font-bold">
                            Akademi</div>
                        <div class="">A10 Matematika Keuangan</div>
                        <div class="">1 Bulan</div>
                    </div>
                    <div class="flex flex-col gap-1 text-base justify-between ">
                        <div class=" text-right text-main_blue font-bold">
                            Rp 1.000.000</div>
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
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600">
                    </label>

                    <div class="text-lg text-main_blue font-bold">
                        Select All (3)</div>
                </div>
                <div class="flex flex-row gap-3 items-center">
                    <div class="text-lg text-main_blue font-bold">
                        Total (2 Items)</div>
                    <div class="text-lg text-main_blue font-bold">
                        Rp 2.000.000</div>
                    <div
                        class="flex ml-auto bg-sec_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Checkout</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

const cartItems = [
    { name: 'satu' },
    { name: 'satu' },
    { name: 'satu' },
]


</script>
