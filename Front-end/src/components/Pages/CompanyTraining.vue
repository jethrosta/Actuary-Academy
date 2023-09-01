<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../Footer.vue';

const packets = [
    {
        name: 'Paket Privat + Akademi Lengkap',
        price: 'IDR17,000,000',
        tags: ['1 mata ujian', '10 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Video pembelajaran akademi',
            'Akses akademi 6 bulan',
            'Try out + pembahasan (1-2 kali)',
            'Request materi / sesuai timeline tutor',
            'Tidak ada maksimal jumlah peserta'
        ]
    },
    {
        name: 'Paket Privat + Akademi',
        price: 'IDR15,000,000',
        tags: ['1 mata ujian', '10 pertemuan'],
        facilities: [
            'Zoom meeting dengan durasi 2 jam',
            'Video rekaman dan materi dari tutor',
            'Video pembelajaran akademi',
            'Akses akademi 6 bulan',
            'Bebas memilih materi yang dipelajari',
            'Tidak ada maksimal jumlah peserta'
        ]
    }
]

</script>
<template>
    <main class="bg-company-training font-inter">
        <div class="flex flex-col px-28 pb-20 relative">
            <div class="flex text-white px-32 pt-12 -mx-28">
                <div class="grow pt-6 mr-16">
                    <RouterLink to="/products" class="flex items-center text-lg mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="ml-1">Kembali</span>
                    </RouterLink>
                    <h1 class="text-5xl font-bold mr-10">Company Training</h1>
                    <div class="bg-white bg-opacity-80 h-px my-6"></div>
                    <p class="text-lg text-justify">
                        Company Training memberi pelatihan khusus kepada perusahaan dengan tutor yang berkompeten untuk peningkatan pengetahuan aktuaria dan persiapan ujian sertifikasi aktuaria. Company Training dapat memberi dukungan baik kepada kualitas perusahaan maupun aktuaris di Indonesia.
                    </p> 
                </div>
                <div class="w-[33rem] shrink-0">
                    <img class="rounded-[1.5rem]" src="src/assets/company-training/right.jpg">
                </div>
            </div>
            <div class="flex items-stretch mt-20 space-x-9">
                <div v-for="packet in packets" class="flex-1 flex flex-col">
                    <div class="bg-white text-sec_blue text-4xl font-bold self-start rounded-t-lg px-6 py-4 max-w-[60%]">
                        {{ packet.name }}
                    </div>
                    <div class="bg-sec_blue rounded-xl rounded-tl-none text-white p-10 grow">
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
                        <div class="inline-block rounded-lg bg-[#F26D0F] text-white font-semibold mt-5 px-3 py-2">
                            Berlangganan
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mt-20 justify-between">
                <div class="text-main_blue text-4xl font-semibold">Produk Lainnya</div>
                <div class="flex space-x-4">
                    <div class="flex items-center bg-main_blue text-white font-semibold px-4 py-2 rounded-xl cursor-pointer">
                        <div class="inline-block w-4 h-4 mr-3">
                            <svg viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.53802 2.17804H27.6619" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.53802 18.5001H27.6619" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M25.4929 2.17834H3.71921V18.5114H25.4929V2.17834Z" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.5998 19.5904V27.2118" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.2497 27.2116V26.1212L14.5999 22.8614" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.95 27.2116V26.1212L14.5998 22.8614" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>Jasa Aktuaria</div>
                    </div>
                    <div class="flex items-center bg-main_blue text-white font-semibold px-4 py-2 rounded-xl cursor-pointer">
                        <div class="inline-block w-4 h-4 mr-3">
                            <svg viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.475 7.50739H4.97498C3.45619 7.50739 2.22498 8.7386 2.22498 10.2574V22.6324C2.22498 24.1512 3.45619 25.3824 4.97498 25.3824H24.225C25.7438 25.3824 26.975 24.1512 26.975 22.6324V10.2574C26.975 8.7386 25.7438 7.50739 24.225 7.50739H18.725M10.475 7.50739V4.75739C10.475 3.2386 11.7062 2.00739 13.225 2.00739H15.975C17.4938 2.00739 18.725 3.2386 18.725 4.75739V7.50739M10.475 7.50739H18.725" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>Company Training</div>
                    </div>
                    <div class="flex items-center bg-main_blue text-white font-semibold px-4 py-2 rounded-xl cursor-pointer">
                        <div class="inline-block w-4 h-4 mr-3">
                            <svg viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5947 8.77906L13.8473 2.25275L2.09998 8.77906L6.01577 10.9545M25.5947 8.77906L21.6789 10.9545M25.5947 8.77906V8.77906C26.3947 9.17904 26.9 9.99665 26.9 10.891V17.9157M6.01577 10.9545L13.8473 15.3054L21.6789 10.9545M6.01577 10.9545V18.7861L13.8473 23.137L21.6789 18.7861L21.6789 10.9545" stroke="white" stroke-width="2.76" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>Academy</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<style>
.bg-company-training {
    background-image: 
        url('data:image/svg+xml,<svg width="1440" height="810" viewBox="0 0 1440 810" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M391.09 554.312C391.09 554.312 882.593 769.431 1110.12 516.987C1337.65 264.542 1829.15 479.661 1829.15 479.661L1768.69 -685.07L330.628 -610.419L391.09 554.312Z" fill="%230D1C9F"/><path opacity="0.5" d="M2860.82 454.976C2860.82 454.976 2185.03 915.753 1681.41 516.2C1177.8 116.647 501.999 577.424 501.999 577.424L402.825 -1333.06L2761.65 -1455.51L2860.82 454.976Z" fill="%230D1C9F"/><path d="M-332.601 529.626C-332.601 529.626 387.273 917.953 846.811 468.402C1306.35 18.8505 2026.22 407.178 2026.22 407.178L1815.82 -3645.92L-543 -3523.47L-332.601 529.626Z" fill="%230D1C9F"/></svg>'),
        url('data:image/svg+xml,<svg width="1440" height="1658" viewBox="0 0 1440 1658" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M399 0.738123C202.481 -16.1002 -34 260.738 -34 260.738V909.738C-34 909.738 199.079 620.058 399 634.238C654.432 652.356 399 1244.74 788.5 1161.74C1178 1078.74 1453.5 1657.24 1453.5 1657.24L1473.5 634.238C1473.5 634.238 1344.53 348.216 1178 315.738C1014.01 283.757 954.897 507.815 788.5 492.738C544.44 470.624 643.165 21.6589 399 0.738123Z" fill="%230066CC"/></svg>');
    background-size: 100% auto;
    background-position:
        top -200px left 0px,
        top 200px left 0px;
    background-repeat: no-repeat;
}
</style>
