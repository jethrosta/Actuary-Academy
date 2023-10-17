<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1 w-full px-10 pt-12 pb-28 overflow-clip">
        <div class="font-bold text-3xl pt-4">Notifikasi</div>
        <div class="flex flex-row">
            <div class="text-ms py-1 text-black">Pemberitahuan Otomatis</div>
            <div class="flex w-14 h-8 rounded-full px-4 items-center">
                <input type="checkbox" id="sliderSwitch" name="sliderSwitch"
                    class="absolute h-4 w-4 rounded-full bg-main_blue appearance-none cursor-pointer" />
                <label for="sliderSwitch" class="block h-2 w-8 rounded-full bg-gray-400 cursor-pointer"></label>
            </div>
        </div>

        <div class="notifArea flex flex-col gap-1 w-full">
            <div class="text-black flex justify-between items-center text-md border-b-2">
                <div class="flex space-x-8">
                    <div class="py-1 border-b-2 font-bold border-black min-w-[30px] text-center">All</div>
                    <div class="py-1 font-normal text-gray-400">Mentions</div>
                </div>
                <div class="font-medium text-main_blue">
                    Tandai semua telah dibaca
                </div>
            </div>

            <div class="notif-list py-1">

                <div v-for="(notifItem, index) in notifList" :key="index"
                    class="notifItem flex flex-row text-black text-md items-center bg-main_blue bg-opacity-20 border-[1.5px] border-main_blue rounded-xl px-3 py-1 my-4">
                    <img src="/src/assets/Ellipse (1).png" alt="" class="profile-pic rounded-full w-16 h-16 p-2">
                    <div class="flex flex-col font-medium">
                        <div>Actuary Academy <span class="font-bold"> {{ notifItem.status }} </span> </div>
                        <div class=" text-gray-500">{{ notifItem.page }} • {{ notifItem.time }}</div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const notifList = [
    { status: 'mengunggah video baru!', page: 'Tutor Privat', time: '1 jam yang lalu' },
    { status: 'mengupdate video !', page: 'Company Training', time: '3 jam yang lalu' },
    { status: 'mengunggah video baru!', page: 'Tutor Privat', time: '2 hari yang lalu' },
]

</script>
