<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../Footer.vue';

</script>
<template>
    <main class="bg-career bg-cover font-inter">
        <div class="flex flex-col items-center pt-14 pb-20 px-28">
            <div class="-mb-14">
                <img src='data:image/svg+xml,<svg width="377" height="181" viewBox="0 0 377 181" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M368 172L197.766 38.2785C192.327 34.0064 184.673 34.0064 179.234 38.2785L9 172" stroke="white" stroke-width="17" stroke-linecap="round"/><g filter="url(%23filter0_d_1_697)"><circle cx="188.5" cy="51.5" r="26.5" fill="%230D1C9F"/></g><defs><filter id="filter0_d_1_697" x="132" y="0" width="113" height="113" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="5"/><feGaussianBlur stdDeviation="15"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_697"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_697" result="shape"/></filter></defs></svg>'>
            </div>
            <div class="bg-sec_blue border-white border-4 px-10 py-6 text-center font-bold rounded-[3rem]">
                <div class="text-xl text-white mb-3">Halaman ini</div>
                <div class="text-4xl bg-white px-10 py-4 text-main_blue rounded-full">SEGERA HADIR!</div>
            </div>
            <div class="bg-main_blue w-64 h-[2px] mt-9 mb-6"></div>
            <div class="text-main_blue max-w-lg text-center">
                Kami sedang dalam tahap pengembangan halaman ini untuk memberikan pengalaman yang lebih baik kepada Anda!
            </div>
            <RouterLink to="/" class="bg-sec_blue text-white font-bold px-6 py-2 rounded-full mt-8">
                Kembali ke Halaman Utama
            </RouterLink>
        </div>
    </main>
    <Footer></Footer>
</template>
<style>
    .bg-career {
        background-image: url('data:image/svg+xml,<svg width="1440" height="625" viewBox="0 0 1440 625" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_23_1249)"><rect width="1440" height="625" fill="white"/><path opacity="0.2" d="M82.0896 480.312C82.0896 480.312 573.593 695.431 801.121 442.987C1028.65 190.542 1520.15 405.661 1520.15 405.661L1459.69 -759.07L21.6276 -684.419L82.0896 480.312Z" fill="%230066CC"/><path opacity="0.5" d="M2551.82 380.976C2551.82 380.976 1876.03 841.753 1372.41 442.2C868.795 42.6466 192.999 503.424 192.999 503.424L93.8243 -1407.06L2452.65 -1529.51L2551.82 380.976Z" fill="%230066CC"/><path d="M-641.601 455.626C-641.601 455.626 78.2734 843.953 537.811 394.402C997.349 -55.1494 1717.22 333.178 1717.22 333.178L1506.82 -3719.92L-852 -3597.47L-641.601 455.626Z" fill="%230066CC"/><path opacity="0.2" d="M1528.12 667.028C1528.12 667.028 878.001 938.664 371.934 426.225C-134.132 -86.2136 -647.666 887.166 -647.666 887.166L-647.666 2872.67L999.713 3204.14L1528.12 667.028Z" fill="white"/><path opacity="0.5" d="M-661.515 586.205C-661.515 586.205 51.7065 302.238 516.809 665.663C981.912 1029.09 1740.06 783.6 1740.06 783.6L1520.77 3302.67L-835.874 3143.75L-661.515 586.205Z" fill="white"/></g><defs><clipPath id="clip0_23_1249"><rect width="1440" height="625" fill="white"/></clipPath></defs></svg>');
        background-color: #fff;
        background-size: 100% auto;
        background-position: top -150px left 0px;
        background-repeat: no-repeat;
    }
</style>
