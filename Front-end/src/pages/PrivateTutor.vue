<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import OtherProducts from '@/components/OtherProducts.vue';
import { privateTutorPackages, tutors } from '@/db';

const tutorsSplideOptions = {
    perPage: 1,
    pagination: false,
    rewind: true,
    classes: {
        arrow : 'splide__arrow !bg-transparent [&_svg]:!w-7 [&_svg]:!h-7 [&_svg]:!fill-main_blue'
    }
}

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
            <div class="text-white text-center mt-12">
                <div class="text-3xl font-bold mb-4">Fasilitas</div>
                <ul class="text-xl list-disc list-inside space-y-1">
                    <li>Zoom meeting dengan durasi 2 jam</li>
                    <li>Video rekaman dan materi dari tutor</li>
                    <li>Bebas memilih materi yang akan dipelajari</li>
                </ul>
            </div>
            <div class="bg-sec_blue text-white text-center text-2xl font-bold px-6 py-3 mt-14 rounded-xl">
                Meet Our Tutors!
            </div>
            <div class="mt-2">
                <Splide :options="tutorsSplideOptions">
                    <SplideSlide v-for="tutor in tutors">
                        <div class="relative py-28">
                            <div class="absolute left-28 top-10 tutor-img-bg">
                                <img class="w-[30rem]" :src="tutor.img"/>
                            </div>
                            <div class="text-main_blue ml-[50%] mr-20">
                                <h1 class="text-[48px] font-bold">{{ tutor.name }}</h1>
                                <h2 class="text-[40px] font-bold">{{ tutor.classes }}</h2>
                            </div>
                            <div class="text-sec_blue ml-[50%] mt-12 mr-20 flex flex-col items-start">
                                <ul class="list-disc list-inside text-lg">
                                    <li v-for="achievement in tutor.achievs">{{ achievement }}</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div class="flex space-x-9 mt-16">
                <div v-for="packet in privateTutorPackages" class="flex-1 flex flex-col">
                    <div class="bg-sec_blue rounded-xl text-white p-10 grow">
                        <div class="text-3xl font-semibold mb-3 text-center">{{ packet.name }}</div>
                        <div class="text-lg mb-1">Start from</div>
                        <div class="text-4xl font-semibold mb-2">{{ packet.price }}</div>
                        <div class="flex font-semibold space-x-3">
                            <div v-for="packetTag in packet.tags" class="rounded-full px-4 py-1 bg-white text-main_blue">
                                {{ packetTag }}
                            </div>
                        </div>
                        <div class="bg-white bg-opacity-40 h-px my-6"></div>
                    </div>
                </div>
            </div>
            <div class="bg-sec_blue rounded-xl text-white p-10 mt-6">
                <ul class="list-disc list-inside text-xl">
                    <li>Pembayaran oleh instansi +100k</li>
                    <li>Potongan <b>+6%</b> untuk setiap penambahan calon peserta hingga <b>42%</b></li>
                    <li>Setiap pertambahan 2 pertemuan harga satuan diskon <b>5k</b> (hingga 10 pertemuan)</li>
                </ul>
            </div>
            <div class="bg-main_orange rounded-lg text-white py-3 px-7 mt-8 mb-20 mx-auto flex items-center cursor-pointer">
                <img class="w-8 h-8 mr-2" src="/src/assets/whatsapp.png" alt="WhatsApp Icon" />
                <div class="text-3xl underline underline-offset-[5px] font-semibold">JOIN US NOW!</div>
            </div>
            <OtherProducts exclude="private-tutor" />
        </div>
    </main>
</template>
<style>
    .bg-private-tutor {
        background-image:
            url('data:image/svg+xml,<svg width="1440" height="670" viewBox="0 0 1440 670" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_45_627)"><rect width="1440" height="670" fill="white"/><path opacity="0.2" d="M316 819.804C316 819.804 795.69 579.495 1036 819.804C1276.31 1060.11 1756 819.804 1756 819.804V1986.1H316V819.804Z" fill="%230066CC"/><path opacity="0.2" d="M316 297.804C316 297.804 795.69 57.4946 1036 297.804C1276.31 538.114 1756 297.804 1756 297.804V1464.1H316V297.804Z" fill="%230066CC"/><path opacity="0.5" d="M2791 870.944C2791 870.944 2092.23 445.82 1610 870.944C1127.77 1296.07 429 870.944 429 870.944V2784H2791V870.944Z" fill="%230066CC"/><path opacity="0.5" d="M2791 348.944C2791 348.944 2092.23 -76.18 1610 348.944C1127.77 774.068 429 348.944 429 348.944V2262H2791V348.944Z" fill="%230066CC"/><path d="M-402 961.944C-402 961.944 296.775 536.82 779 961.944C1261.23 1387.07 1960 961.944 1960 961.944V5020.5H-402V961.944Z" fill="%230066CC"/><path d="M-402 439.944C-402 439.944 296.775 14.82 779 439.944C1261.23 865.068 1960 439.944 1960 439.944V4498.5H-402V439.944Z" fill="%230066CC"/></g><defs><clipPath id="clip0_45_627"><rect width="1440" height="670" fill="white"/></clipPath></defs></svg>'),
            url('data:image/svg+xml,<svg width="1440" height="710" viewBox="0 0 1440 710" fill="none" style="background-color:%230066CC" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_46_881)"><path d="M2203.08 350.957C2203.08 350.957 1466.15 -15.6963 1022.08 350.957C578 717.61 -158.925 350.957 -158.925 350.957V2942.51H2203.08V350.957Z" fill="white"/><path opacity="0.2" d="M1600.12 437.028C1600.12 437.028 950 708.663 443.934 196.225C-62.1327 -316.214 -575.667 657.166 -575.667 657.166L-575.667 2642.67L1071.71 2974.14L1600.12 437.028Z" fill="white"/><path opacity="0.5" d="M-589.515 356.205C-589.515 356.205 123.706 72.2383 588.809 435.663C1053.91 799.087 1812.06 553.6 1812.06 553.6L1592.77 3072.67L-763.875 2913.75L-589.515 356.205Z" fill="white"/></g><defs><clipPath id="clip0_46_881"><rect width="1440" height="710" fill="white"/></clipPath></defs></svg>');
        background-color: white;
        background-size: 100% auto;
        background-position:
            top 0px left 0px,
            top 700px left 0px;
        background-repeat: no-repeat;
    }
    .tutor-img-bg {
        background-image: url('data:image/svg+xml,<svg width="557" height="341" viewBox="0 0 557 341" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 278.5C0 124.689 124.689 0 278.5 0C432.311 0 557 124.689 557 278.5V320.882C557 331.515 548.38 340.135 537.747 340.135H19.2529C8.61982 340.135 0 331.515 0 320.882V278.5Z" fill="%230066CC"/></svg>');
        background-size: contain;
        background-position: bottom 0px left 0px;
        background-repeat: no-repeat;
    }
</style>
