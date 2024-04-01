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
        arrow: 'splide__arrow !bg-white !p-3 !w-12 !h-12 [&_svg]:!w-10 [&_svg]:!h-10 [&_svg]:!fill-main_blue'
    }
}

</script>
<template>
    <main class="bg-private-tutor bg-cover font-inter">
        <div class="flex flex-col py-20 px-28">
            <div class="flex flex-col md:flex-row">
                <div class="ml-12 md:w-[36%] shrink-0 self-center md:self-end mb-4 md:mb-0">
                    <img class="model-mask" src="/src/assets/private-tutor/model.png">
                </div>
                <h2 class="mt-6 mb-10 text-sec_blue font-bold text-[2rem] md:text-[2rem] lg:text-[3rem] text-center md:text-right leading-[1.5]">
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
            <div class="text-main_blue xl:text-white text-center mt-12">
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
            <div class="mt-4">
                <Splide :options="tutorsSplideOptions">
                    <SplideSlide v-for="tutor in tutors">
                        <div class="flex flex-col md:flex-row items-center justify-center relative py-16">
                            <div class="self-center relative">
                                <img class="w-[16rem] md:w-[21rem]" :src="tutor.img"/>
                            </div>
                            <div class="ml-16 mt-14">
                                <div class="text-main_blue mr-20">
                                    <h1 class="text-[36px] md:text-[48px] font-bold">{{ tutor.name }}</h1>
                                    <h2 class="text-[24px] md:text-[40px] font-bold">{{ tutor.classes }}</h2>
                                </div>
                                <div class="text-sec_blue mt-8 mr-20 flex flex-col items-start">
                                    <ul class="list-disc list-inside text-lg">
                                        <li v-for="achievement in tutor.achievs">{{ achievement }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div class="flex space-y-6 md:space-y-0 md:space-x-9 mt-12 flex-col md:flex-row">
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
        background-image: url('data:image/svg+xml,<svg width="1440" height="1200" viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_16_1335)"><rect width="1440" height="1200" fill="white"/><path opacity="0.2" d="M316 179.804C316 179.804 795.69 -60.5054 1036 179.804C1276.31 420.114 1756 179.804 1756 179.804V1346.1H316V179.804Z" fill="%230066CC"/><path opacity="0.5" d="M2791 230.944C2791 230.944 2092.23 -194.18 1610 230.944C1127.77 656.068 429 230.944 429 230.944V2144H2791V230.944Z" fill="%230066CC"/><path d="M-402 321.944C-402 321.944 296.775 -103.18 779 321.944C1261.23 747.068 1960 321.944 1960 321.944V4380.5H-402V321.944Z" fill="%230066CC"/><path d="M2198.08 933.957C2198.08 933.957 1461.15 567.304 1017.08 933.957C573.003 1300.61 -163.922 933.957 -163.922 933.957V3525.51H2198.08V933.957Z" fill="white"/><path opacity="0.2" d="M1595.12 1020.03C1595.12 1020.03 944.999 1291.66 438.933 779.225C-67.1337 266.786 -580.668 1240.17 -580.668 1240.17L-580.668 3225.67L1066.71 3557.14L1595.12 1020.03Z" fill="white"/><path opacity="0.5" d="M-594.516 939.205C-594.516 939.205 118.705 655.238 583.808 1018.66C1048.91 1382.09 1807.06 1136.6 1807.06 1136.6L1587.77 3655.67L-768.875 3496.75L-594.516 939.205Z" fill="white"/></g><defs><clipPath id="clip0_16_1335"><rect width="1440" height="1200" fill="white"/></clipPath></defs></svg>');
        background-color: white;
        background-size: 100% auto;
        background-position: top 0px left 0px;
        background-repeat: no-repeat;
    }
    .model-mask {
        mask: linear-gradient(to bottom, rgba(0,0,0,1) 0, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 95%, rgba(0,0,0,0) 0) 100% 50% / 100% 100% repeat-x;
    }
    @media (min-width: 768px) {
        .model-mask {
           mask: initial;
        }   
    }
</style>
