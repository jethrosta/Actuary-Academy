<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../Footer.vue';
import OtherProducts from '../OtherProducts.vue';

const packets = [
    {
        name: 'Paket Reguler',
        price: 'IDR180,000',
        tags: ['1 peserta', '1 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Bebas memilih materi yang akan dipelajari'
        ]
    },
    {
        name: 'Paket Eksklusif',
        price: 'IDR800,000',
        tags: ['1 kelas', '1 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Bebas memilih materi yang akan dipelajari'
        ]
    }
]

</script>
<template>
    <main class="bg-private-tutor bg-cover font-inter">
        <div class="flex flex-col py-20 px-28">
            <div class="flex">
                <div class="ml-12 w-[36rem] shrink-0">
                    <img src="/src/assets/private-tutor/model.png">
                </div>
                <h2 class="grow mt-6 text-sec_blue font-bold text-[3.25rem] text-right leading-[1.5]">
                    Elevate your educational performance with expert private tutors at Actuary Academy!
                </h2>
            </div>
            <div class="flex flex-col p-12 w-full bg-sec_blue text-white rounded-xl">
                <div class="text-3xl font-bold mb-5">
                    <span class="inline-block w-9 h-9 align-middle mr-3">
                        <svg viewBox="0 0 57 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5209 16.3748L27.1459 2.83313L2.77094 16.3748L10.8959 20.8887M51.5209 16.3748L43.3959 20.8887M51.5209 16.3748V16.3748C53.1808 17.2047 54.2293 18.9012 54.2293 20.757V35.3327M10.8959 20.8887L27.1459 29.9165L43.3959 20.8887M10.8959 20.8887V37.1387L27.1459 46.1665L43.3959 37.1387L43.3959 20.8887" stroke="white" stroke-width="5.41667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Tutor Privat</span>
                </div>
                <div class="text-lg text-justify">
                    <span class="font-bold">Tutor Privat Perkuliahan</span> menyediakan pembelajaran privat secara sinkronus dengan tutor berkompeten untuk berbagai mata kuliah yang berhubungan dengan keilmuan pada studi ilmu aktuaria, statistika, dan matematika.
                </div>
            </div>
            <div class="flex my-20 space-x-9">
                <div v-for="packet in packets" class="flex-1 flex flex-col">
                    <div class="bg-white text-sec_blue self-center text-3xl font-bold -mb-20 px-20 pt-10 pb-24 rounded-[100%]">
                        {{ packet.name }}
                    </div>
                    <div class="bg-sec_blue rounded-xl text-white p-10 grow">
                        <div class="text-4xl font-semibold mb-3">{{ packet.price }}</div>
                        <div class="flex font-semibold space-x-3">
                            <div v-for="packetTag in packet.tags" class="rounded-full px-4 py-1 bg-white text-main_blue">
                                {{ packetTag }}
                            </div>
                        </div>
                        <div class="bg-white bg-opacity-40 h-px my-6"></div>
                        <div>
                            <div class="font-bold">Fasilitas</div>
                            <ul class="list-disc list-inside">
                                <li v-for="facility in packet.facilities">{{ facility }}</li>
                            </ul>
                        </div>
                        <RouterLink :to="{ name: 'Tutors' }" class="inline-block rounded-lg bg-[#F26D0F] text-white font-semibold mt-5 px-3 py-2">
                            Berlangganan
                        </RouterLink>
                    </div>
                </div>
            </div>
            <OtherProducts exclude="private-tutor" />
        </div>
    </main>
    <Footer></Footer>
</template>
<style>
    .bg-private-tutor {
        background-image: url('data:image/svg+xml,<svg width="1440" height="1458" viewBox="0 0 1440 1458" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_16_707)"><rect width="1440" height="1458" fill="white"/><path opacity="0.2" d="M336 137.804C336 137.804 815.69 -102.505 1056 137.804C1296.31 378.114 1776 137.804 1776 137.804V1304.1H336V137.804Z" fill="%230066CC"/><path opacity="0.5" d="M2811 188.944C2811 188.944 2112.23 -236.18 1630 188.944C1147.77 614.068 449 188.944 449 188.944V2102H2811V188.944Z" fill="%230066CC"/><path d="M-382 279.944C-382 279.944 316.775 -145.18 799 279.944C1281.23 705.068 1980 279.944 1980 279.944V4338.5H-382V279.944Z" fill="%230066CC"/><path d="M2237.08 1179.96C2237.08 1179.96 1500.15 813.304 1056.08 1179.96C612 1546.61 -124.925 1179.96 -124.925 1179.96V3771.51H2237.08V1179.96Z" fill="%230066CC"/><path opacity="0.2" d="M1634.12 1266.03C1634.12 1266.03 984 1537.66 477.934 1025.22C-28.1327 512.786 -541.667 1486.17 -541.667 1486.17L-541.667 3471.67L1105.71 3803.14L1634.12 1266.03Z" fill="%230066CC"/><path opacity="0.5" d="M-555.515 1185.21C-555.515 1185.21 157.706 901.238 622.809 1264.66C1087.91 1628.09 1846.06 1382.6 1846.06 1382.6L1626.77 3901.67L-729.874 3742.75L-555.515 1185.21Z" fill="%230066CC"/><path d="M2258.08 1196.96C2258.08 1196.96 1521.15 830.304 1077.08 1196.96C633 1563.61 -103.925 1196.96 -103.925 1196.96V3788.51H2258.08V1196.96Z" fill="white"/><path opacity="0.2" d="M1655.12 1283.03C1655.12 1283.03 1005 1554.66 498.934 1042.22C-7.13275 529.786 -520.667 1503.17 -520.667 1503.17L-520.667 3488.67L1126.71 3820.14L1655.12 1283.03Z" fill="white"/><path opacity="0.5" d="M-534.515 1202.21C-534.515 1202.21 178.706 918.238 643.809 1281.66C1108.91 1645.09 1867.06 1399.6 1867.06 1399.6L1647.77 3918.67L-708.874 3759.75L-534.515 1202.21Z" fill="white"/><path d="M2256.08 1195.96C2256.08 1195.96 1519.15 829.304 1075.08 1195.96C631 1562.61 -105.925 1195.96 -105.925 1195.96V3787.51H2256.08V1195.96Z" fill="white"/><path opacity="0.2" d="M1653.12 1282.03C1653.12 1282.03 1003 1553.66 496.934 1041.22C-9.13275 528.786 -522.667 1502.17 -522.667 1502.17L-522.667 3487.67L1124.71 3819.14L1653.12 1282.03Z" fill="white"/><path opacity="0.5" d="M-536.515 1201.21C-536.515 1201.21 176.706 917.238 641.809 1280.66C1106.91 1644.09 1865.06 1398.6 1865.06 1398.6L1645.77 3917.67L-710.874 3758.75L-536.515 1201.21Z" fill="white"/><path opacity="0.2" d="M1653.12 1282.03C1653.12 1282.03 1003 1553.66 496.934 1041.22C-9.13275 528.786 -522.667 1502.17 -522.667 1502.17L-522.667 3487.67L1124.71 3819.14L1653.12 1282.03Z" fill="white"/><path opacity="0.5" d="M-536.515 1201.21C-536.515 1201.21 176.706 917.238 641.809 1280.66C1106.91 1644.09 1865.06 1398.6 1865.06 1398.6L1645.77 3917.67L-710.874 3758.75L-536.515 1201.21Z" fill="white"/></g><defs><clipPath id="clip0_16_707"><rect width="1440" height="1458" fill="white"/></clipPath></defs></svg>');
        background-size: 100% auto;
        background-position: top 140px left 0px;
        background-repeat: no-repeat;
    }
</style>
