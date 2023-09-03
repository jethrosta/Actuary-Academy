<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl py-4">Kelas Saya</div>
        <div class="notifArea flex flex-col gap-y-5 w-full">

            <div v-for="(myClass, index) in myClasses" :key="index"
            class="notifItem flex flex-row justify-between text-black text-sm border-[1.5px] border-main_blue rounded-xl py-3 px-4">
                <div class="flex flex-col gap-1">
                    <div class="flex text-lg mr-auto bg-main_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">Akademi</div>
                    <div class="font-medium text-lg py-1">A10 Matematika Keuangan</div>
                </div>
                <div class="flex flex-col gap-1">
                    <div class="text-xs text-gray-600 p-1">Berlangganan hingga 27 juni 2024</div>
                    <div class="flex text-lg ml-auto bg-orange-500 py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">Berhenti Langganan</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

const myClasses = [
    {name:'1'},
    {name:'1'},
    {name:'1'},
    {name:'1'},
]

</script>
