<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import { RouterLink } from 'vue-router';
import Footer from '../Footer.vue'

const splideOptions = {
    rewind: true,
    gap: '5rem',
    padding: '4rem',
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
    <main class="bg-main_blue h-[100%] w-[100%]">
        <section id="greet" class="bg-greet bg-no-repeat bg-[100%_auto] pt-48">
            <div class="center select-none">
                <img class="w-full" src="src/assets/Group 263.png"/>
            </div>
            <div class="center">
                <p class="text-white text-7xl font-inter font-bold">From Zero to Fellow</p>
            </div>
            <div class="center mt-5">
                <p class="text-xl text-white font-inter font-bold">A head start to your Indonesian Actuarial profession certification</p>
            </div>
            <div class="center mt-10">
                <RouterLink to="register" class="bg-[#F26D0F] px-6 py-3 mb-10 rounded-md shadow-2xl text-white text-2xl font-bold">
                    REGISTER NOW
                </RouterLink>
            </div>
            <div class="center">
                <hr class="bg-white w-[50%] h-[1%]">  
            </div>
        </section>
        <section id="product">
            <div class="text-white font-inter font-bold center mt-10 text-5xl">
                Produk Kami
            </div>
            <div class="w-full px-40 flex flex-wrap justify-center  text-white font-inter mt-10">
                <div v-for="product in products" class="mb-6 px-3 md:w-1/2">
                    <div class="bg-sec_blue flex w-full h-full p-12 rounded-[20px]">
                        <div class="flex flex-col w-[26rem] justify-center mr-8">
                            <img class="mx-auto mb-5" :src="product.icon"/>
                            <h3 class="text-2xl font-bold text-center" >{{ product.name }}</h3>
                        </div>
                        <div class="flex flex-col items-start">
                            <p class="pb-8 text-justify">{{ product.desc }}</p>
                            <RouterLink :to="product.url" class="detail">Lihat Detail</RouterLink>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section id="alumni" class="mt-16">
            <div class="center">
                <h1 class="text-white text-5xl text-center font-inter font-bold font-white px-8">
                    Alumni Kami Tersebar<br>di Berbagai Perusahan dan Universitas
                </h1>
            </div>
            <div class="mt-10 center select-none">
                <img class="w-full" src="src/assets/Alumni-cropped.png"/>
            </div>
        </section>
        <section id="snapshot" class="mt-16">
            <div class="center">
                <h1 class="text-white text-5xl text-center font-inter font-bold font-white px-8">
                    Nikmati Cuplikan Eksklusif Society of<br>Actuary untuk Actuary Academy!
                </h1>
            </div>
            <div class="mt-10 center">
                <video width="900" height="520" controls>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <section id="testimoni" class="mt-16">
            <div class="center text-5xl text-white text-inter font-bold">
                <h1>Testimoni</h1>
            </div>
            <div class="w-2/3 mx-auto mt-10">
                <Splide :options="splideOptions">
                    <SplideSlide v-for="testi in testimonies">
                        <div class="shadow-xl bg-sec_blue h-fit w-fit p-10 rounded-3xl text-white font-inter">
                            <p class="text-2xl">“{{ testi.text }}”</p>
                            <p class="my-5 underline underline-offset-4 font-bold text-slate-400 mb-10">
                                Baca selengkapnya
                            </p>
                            <img :src="testi.image" class="float-left mr-10 h-28 w-28 object-cover object-top rounded-full"/>
                            <div class="flex mt-6 ml-5 space-x-6">
                                <div class="flex space-x-2 mt-5">
                                    <span v-for="_ in testi.stars">
                                        <svg class="h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                    </span>
                                </div> 
                            </div>
                            <div class="mt-2 font-inter font-bold text-xl">
                                {{ testi.name }}
                            </div>
                            <div class="text-zinc-400">
                                {{ testi.occupation }}
                            </div>
                        </div> 
                    </SplideSlide>
                </Splide>
            </div>
            <div class="flex justify-center mt-6">
                <RouterLink to="/testimonies" class="text-white font-inter font-bold text-2xl">Testimoni Lainnya</RouterLink>
            </div>
        </section>
        <section id="details" class="bg-white">
            <div class="bg-details-divider bg-no-repeat bg-[100%_auto] -mt-72">
                <div class="flex pt-96 pb-12 px-40">
                    <div class="mr-16">
                        <img class="w-[30rem]" src="src/assets/testimoni2.png"/>
                    </div>
                    <div class="pt-16 font-inter">
                        <p class="mb-1 text-5xl font-bold text-[#0066CC]"> Daftar Menjadi Tutor!</p>
                        <p class="text-justify text-2xl text-main_blue mb-8">Mari bergabung dan berkontribusi bersama Actuary Academy untuk melahirkan calon Aktuaris hebat di seluruh Indonesia dan dunia. </p>
                        <div class="font-bold text-2xl">
                            <RouterLink to="career" class="inline-block bg-main_blue text-white rounded-lg px-4 py-3 shadow-xl">
                                Detail Karir Lebih Lanjut
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </main>
</template>
