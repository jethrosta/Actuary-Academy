<script setup>
import Footer from '../Footer.vue';
import OtherProducts from '../OtherProducts.vue';

</script>
<template>
    <main class="bg-company-training font-inter">
        <div class="flex flex-col px-28 pb-20 relative">
            <div class="flex text-white px-32 pt-12 -mx-28">
                <div class="grow pt-6 mr-24">
                    <div class="flex items-center text-lg mb-2 cursor-pointer" @click="this.$router.go(-1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="ml-1">Kembali</span>
                    </div>
                    <h1 class="text-5xl font-bold mr-10">Company Training</h1>
                    <div class="bg-white bg-opacity-80 h-px my-6"></div>
                    <p class="text-lg text-justify">
                        Company Training memberi pelatihan khusus kepada perusahaan dengan tutor yang berkompeten untuk peningkatan pengetahuan aktuaria dan persiapan ujian sertifikasi aktuaria. Company Training dapat memberi dukungan baik kepada kualitas perusahaan maupun aktuaris di Indonesia.
                    </p> 
                </div>
                <div class="w-[33rem] shrink-0">
                    <img class="rounded-[1.5rem]" src="/src/assets/company-training/right.jpg">
                </div>
            </div>
            <div class="text-white mt-12 mx-12">
                <div class="text-xl font-bold mb-2">Fasilitas</div>
                <ul class="text-lg list-disc list-inside space-y-1">
                    <li>Zoom meeting dengan durasi 2 jam</li>
                    <li>Video rekaman dan materi dari tutor</li>
                    <li>Video pembelajaran akademi</li>
                    <li>Akses akademi <b>6 bulan</b></li>
                    <li>Try out + pembahasan (1-2 kali)</li>
                    <li><i>Request</i> materi / sesuai <i>timeline</i> tutor</li>
                    <li>Tidak ada maksimal jumlah peserta</li>
                </ul>
            </div>
            <div class="bg-sec_blue text-white p-8 mx-12 mt-12 mb-20 rounded-xl flex flex-col">
                <div class="text-4xl text-center mt-3">Start from</div>
                <div class="text-[3.6rem] font-bold text-center mt-4">IDR 15,000,000</div>
                <div class="bg-main_orange rounded-lg text-white py-3 px-7 mt-7 mx-auto flex items-center cursor-pointer">
                    <img class="w-8 h-8 mr-2" src="/src/assets/whatsapp.png" alt="WhatsApp Icon" />
                    <div class="text-3xl underline underline-offset-[5px] font-semibold">JOIN US NOW!</div>
                </div>
            </div>
            <OtherProducts exclude="company-training" />
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
