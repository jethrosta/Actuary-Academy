<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import { RouterLink } from 'vue-router';

const testiSplideOptions = {
    rewind: true,
    gap: '5rem',
    padding: '4rem',
    classes: {
        arrow : 'splide__arrow !bg-white [&_svg]:!fill-main_blue'
    }
}

const products = [
    {
        name: 'Tutor Privat',
        url: '/private-tutor',
        desc: 'Actuary Academy menyediakan Tutor Privat untuk mata kuliah aktuaria dan mata ujian PAI.',
        icon: 'src/assets/Iconbook.png'
    },
    {
        name: 'Akademi',
        url: '/academy',
        desc: 'Actuary Academy menyediakan video pembelajaran, pembahasan soal, dan pelaksanaan try out.',
        icon: 'src/assets/IconToga.png'
    },
    {
        name: 'Company Training',
        url: '/company-training',
        desc: 'Actuary Academy menyediakan Tutor Privat pembelajaran mata ujian PAI untuk perusahaan.',
        icon: 'src/assets/Iconsuitcase.png'
    },
    {
        name: 'Jasa Aktuaria',
        url: '/actuarial-services',
        desc: 'Actuary Academy menyediakan jasa yang membantu proyek-proyek seputar aktuaria.',
        icon: 'src/assets/Presentation.png'
    }
]

const testimonies = [
    {
        name: 'Lilis Hermawanti',
        occupation: 'Dosen Statistika - Universitas Harapan',
        image: 'src/assets/testimonies/lilis.jpg',
        stars: 5,
        text: 'Sebuah testimoni yang menggambarkan apa yang dipikirkan orang tersebut tentang layanan, produk, atau startup ini secara umum. Sebuah testimoni yang menggambarkan pendapat orang',
    },
    {
        name: 'Iqbal Andriansyah',
        occupation: 'Mahasiswa Ilmu Aktuaria - Universitas Ujung Negeri',
        image: 'src/assets/testimonies/iqbal.jpg',
        stars: 5,
        text: 'Sebuah testimoni yang menggambarkan apa yang dipikirkan orang tersebut tentang layanan, produk, atau startup ini secara umum. Sebuah testimoni yang menggambarkan pendapat orang',
    },
    {
        name: 'Diki Prasetya',
        occupation: 'Manajer Perusahaan Manajemen Aset',
        image: 'src/assets/testimonies/diki.jpg',
        stars: 5,
        text: 'Sebuah testimoni yang menggambarkan apa yang dipikirkan orang tersebut tentang layanan, produk, atau startup ini secara umum. Sebuah testimoni yang menggambarkan pendapat orang',
    }
]

</script>
<template>
    <main class="bg-main_blue h-[100%] w-[100%] overflow-hidden">
        <section id="greet" class="bg-greet bg-no-repeat bg-[100%_auto] text-center pt-48 px-4">
            <div class="center select-none">
                <img class="w-full" src="src/assets/Group 263.png" />
            </div>
            <div class="center">
                <p class="header-1 text-white font-inter font-bold">From Zero to Fellow</p>
            </div>
            <div class="center mt-5">
                <p class="text-xl text-white font-inter font-bold">A head start to your Indonesian Actuarial profession
                    certification</p>
            </div>
            <div class="center mt-10">
                <RouterLink to="register"
                    class="bg-main_orange px-6 py-3 mb-10 rounded-md shadow-2xl text-white text-2xl font-bold">
                    REGISTER NOW
                </RouterLink>
            </div>
            <div class="center">
                <hr class="bg-white w-[50%] h-[1%]">
            </div>
        </section>
        <section id="product">
            <div class="header-2 text-white font-inter font-bold center mt-10">
                Produk Kami
            </div>
            <div class="w-full max-w-[1500px] mx-auto px-20 flex flex-wrap justify-center text-white font-inter mt-10">
                <div v-for="product in products" class="p-4 md:w-1/2">
                    <div
                        class="bg-sec_blue flex lg:flex-nowrap flex-wrap w-full h-full items-center px-4 py-6 lg:px-12 sm:p-8 md:p-10 rounded-[20px] gap-6">
                        <div class="flex flex-col w-[16rem] mx-auto justify-center pt-4">
                            <img class="mx-auto mb-5" :src="product.icon" />
                            <h3 class="header-3 font-bold text-center">{{ product.name }}</h3>
                        </div>
                        <div class="flex flex-col pl-4 lg:pl-0 lg:h-full justify-between lg:py-6 gap-6">
                            <p class="text-left xl:text-justify">{{ product.desc }}</p>
                            <RouterLink :to="product.url" class="w-full lg:w-fit text-center detail">Lihat Detail
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="alumni" class="mt-16">
            <div class="center">
                <h1 class="header-2 text-white text-center font-inter font-bold font-white px-8">
                    Alumni Kami Tersebar<br>di Berbagai Perusahan dan Universitas
                </h1>
            </div>
            <div class="mt-10 center select-none">
                <img class="w-full max-w-[1500px]" src="src/assets/Alumni-cropped.png" />
            </div>
        </section>
        <section id="snapshot" class="mt-16">
            <div class="center">
                <h1 class="header-2 text-white text-center font-inter font-bold font-white px-8">
                    Nikmati Cuplikan Eksklusif Society of<br>Actuary untuk Actuary Academy!
                </h1>
            </div>
            <div class="mt-10 center px-4">
                <video width="900" height="520" controls>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <section id="testimoni" class="mt-16">
            <div class="header-2 center text-white text-inter font-bold">
                <h1>Testimoni</h1>
            </div>
            <div class="w-full md:w-4/5 lg:w-2/3 mx-auto mt-10 max-w-[1200px]">
                <Splide :options="testiSplideOptions">
                    <SplideSlide v-for="testi in testimonies">
                        <div
                            class="shadow-xl flex md:block flex-col flex-wrap md:flex-nowrap bg-sec_blue h-fit w-fit p-8 md:p-14 rounded-3xl text-white font-inter">
                            <p class="lg:text-xl">“{{ testi.text }}”</p>
                            <p class="my-4 underline underline-offset-4 font-bold text-slate-400 md:mb-10">
                                Baca selengkapnya
                            </p>
                            <div class="flex flex-wrap md:items-center justify-center sm:justify-start gap-x-8 gap-y-4 p-4 md:p-1">
                                <img :src="testi.image"
                                class="w-16 h-16 lg:w-24 lg:h-24 object-cover object-top rounded-full" />
                                <div class="flex flex-col text-center sm:text-left">
                                    <div class="flex space-x-2 mx-auto sm:mx-0">
                                        <span v-for="_ in testi.stars">
                                            <svg class="h-5 lg:h-7 justify-self-center-center " version="1.1" id="_x32_"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00"
                                                xml:space="preserve" fill="#FBBC05">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke="#CCCCCC" stroke-width="11.264"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path class="st0"
                                                            d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="mt-2 font-inter font-bold text-md lg:text-xl">
                                        {{ testi.name }}
                                    </div>
                                    <div class="text-zinc-400 text-sm lg:text-lg">
                                        {{ testi.occupation }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div class="flex justify-center mt-6">
                <RouterLink to="/testimonies" class="text-sec_blue lg:text-white font-inter font-bold text-2xl">Testimoni Lainnya
                </RouterLink>
            </div>
        </section>
        <section id="details" class="bg-white max-w-[1500px] mx-auto pb-10">
            <div class="bg-details-divider bg-no-repeat bg-[100%_auto] -mt-72">
                <div class="flex flex-col lg:flex-row pt-96 pb-12 px-8 lg:px-20 max-w-[1500px] mx-auto">
                    <div class="mr-16">
                        <img class="w-40 lg:w-auto" src="src/assets/testimoni2.png" />
                    </div>
                    <div class="pt-6 font-inter">
                        <p class="header-2 mb-1 font-bold text-[#0066CC]"> Daftar Menjadi Tutor!</p>
                        <p class="text-left md:text-justify text-lg md:text-2xl text-main_blue mb-8">Mari bergabung dan
                            berkontribusi bersama Actuary Academy untuk melahirkan calon Aktuaris hebat di seluruh Indonesia
                            dan dunia. </p>
                        <div class="font-bold text-2xl">
                            <RouterLink to="career"
                                class="inline-block bg-main_blue text-white rounded-lg px-4 py-3 shadow-xl">
                                Detail Karir Lebih Lanjut
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
@media (min-width: 768px) {
    .header-1 {
        font-size: 72px;
    }

    .header-2 {
        font-size: 48px;
    }

    .header-3 {
        font-size: 26px;
    }

    .text-1 {
        font-size: 24px;
    }
}

@media (max-width: 767px) {
    .header-1 {
        font-size: 48px;
    }

    .header-2 {
        font-size: 24px;
    }

    .header-3 {
        font-size: 20px;
    }

    .text-1 {
        font-size: 16px;
    }
}
</style>
