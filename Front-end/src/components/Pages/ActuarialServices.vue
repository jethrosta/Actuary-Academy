<script setup>
import Footer from "../Footer.vue";

</script>
<template>
    <main class="bg-jasa-aktuaria font-inter items-center justify-center object-center">
        <div class="flex flex-row justify-between pt-16 pb-20 px-32">
            <div class="flex w-[45%] flex-col text-white">
                <div class="flex flex-row py-2 text-lg items-center cursor-pointer" @click="this.$router.go(-1)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071Z"
                            fill="white" />
                    </svg>
                    <span class="ml-1">Kembali</span>
                </div>
                <div class="font-bold text-5xl">Jasa Aktuaria</div>
                <hr class="mb-4 mt-7 border-white">
                <div class=" text-lg text-justify leading-relaxed">Mohon maaf, produk yang Anda cari saat ini sedang dalam tahap perbaikan.
                    Kami akan segera melakukan pembaruan dan menyediakan produk tersebut untuk Anda. Terima kasih atas
                    pengertian Anda.</div>
            </div>
            <div class="maintenance-sign">
                <div class="pl-8">
                    <svg class="" width="560" height="" viewBox="0 0 624 434" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M492 170L321.766 36.2785C316.327 32.0064 308.673 32.0064 303.234 36.2785L133 170"
                            stroke="#0066CC" stroke-width="17" stroke-linecap="round" />
                        <g filter="url(#filter0_d_575_5790)">
                            <circle cx="312.5" cy="51.5" r="26.5" fill="#0D1C9F" />
                        </g>
                        <g filter="url(#filter1_d_575_5790)">
                            <path
                                d="M30 201C30 167.863 56.8629 141 90 141H534C567.137 141 594 167.863 594 201V339C594 372.137 567.137 399 534 399H90C56.8629 399 30 372.137 30 339V201Z"
                                fill="#0066CC" />
                        </g>
                        <mask id="mask0_575_5790" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="30" y="141"
                            width="564" height="258">
                            <path
                                d="M30 201C30 167.863 56.8629 141 90 141H534C567.137 141 594 167.863 594 201V339C594 372.137 567.137 399 534 399H90C56.8629 399 30 372.137 30 339V201Z"
                                fill="#0066CC" />
                        </mask>
                        <g mask="url(#mask0_575_5790)">
                            <rect x="30" y="92.5934" width="564" height="150.813" fill="#0D1C9F" />
                            <mask id="mask1_575_5790" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="30" y="92"
                                width="564" height="152">
                                <rect x="30" y="92.5934" width="564" height="150.813" fill="#0D1C9F" />
                            </mask>
                            <g mask="url(#mask1_575_5790)">
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 -44 176.681)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 2.32812 134.597)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 48.6562 92.5129)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 94.9844 50.4291)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 141.313 8.34534)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 187.642 -33.7385)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 233.97 -75.8224)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 280.298 -117.906)" fill="white" />
                                <rect width="41.6576" height="491.011"
                                    transform="matrix(0.740201 -0.672386 0.676437 0.7365 326.626 -159.99)" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_575_5790" x="256" y="0" width="113" height="113"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="5" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_575_5790" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_575_5790"
                                        result="shape" />
                                </filter>
                                <filter id="filter1_d_575_5790" x="0" y="116" width="624" height="318"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="5" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_575_5790" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_575_5790"
                                        result="shape" />
                                </filter>
                            </defs>
                        </g>
                    
                    </svg>
                    <div class="relative w-80 text-white font-bold text-xl bg-main_blue py-4 px-5 rounded-full text-center translate-x-[120px] -translate-y-60">Maaf, produk ini sedang</div>
                    <div class="relative text-white font-bold text-[42px]  py-4 px-5 rounded-full text-center -translate-y-[210px]">DALAM PERBAIKAN</div>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<style scoped>
.bg-jasa-aktuaria {
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%221440%22%20height%3D%22700%22%20viewBox%3D%220%200%201440%20700%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20opacity%3D%220.2%22%20d%3D%22M391.09%20554.312C391.09%20554.312%20882.593%20769.431%201110.12%20516.987C1337.65%20264.542%201829.15%20479.661%201829.15%20479.661L1768.69%20-685.07L330.628%20-610.419L391.09%20554.312Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3Cpath%20opacity%3D%220.5%22%20d%3D%22M2860.82%20454.976C2860.82%20454.976%202185.03%20915.753%201681.41%20516.2C1177.8%20116.647%20501.999%20577.424%20501.999%20577.424L402.825%20-1333.06L2761.65%20-1455.51L2860.82%20454.976Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3Cpath%20d%3D%22M-332.601%20529.626C-332.601%20529.626%20387.273%20917.953%20846.811%20468.402C1306.35%2018.8505%202026.22%20407.178%202026.22%20407.178L1815.82%20-3645.92L-543%20-3523.47L-332.601%20529.626Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3C%2Fsvg%3E");
    background-color: #fff;
    background-size: 100% auto;
    background-position: top -230px left 0px;
    background-repeat: no-repeat;
}

</style>
