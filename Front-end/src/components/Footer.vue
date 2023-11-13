<script setup>
import { RouterLink } from 'vue-router';

const goToEmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpKbMsJZsCmRQgwFDStFdNQhqfmqMTTRVbcxbpFLqZrvZhhMsxJxLmFSWFfqScHktRBNB');
}

const goToWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=6281217564720&text=Halo%20Actuary%20Academy%2C%20saya%20ingin%20bertanya%20tentang%20Actuary%20Academy');
}

const goToInstagram = () => {
    window.open('https://www.instagram.com/actuary_academy/');
}

</script>
<template>
    <section class="relative footer w-full bg-main_blue px-10 sm:px-20 py-10 shadow-top-footer">
        <div class="container max-w-[1400px] mx-auto divide-y divide-gray-300">
            <div class="flex gap-10 flex-wrap lg:justify-center justify-start items-center text-white font-inter font-bold py-10">
                <div class="flex flex-col font-normal items-start">
                    <div class="flex flex-row items-center">
                        <img src="/src/assets/icon/AAlogo.png" class="w-16 mr-2" />
                        <p class=" text-white align-bottom text-2xl ">Actuary Academy</p>
                    </div>
                    <div class="text-xs text-justify w-72">Actuary Academy merupakan platform edukasi aktuaria PERTAMA DI
                        INDONESIA. Berdiri sejak 2019, Actuary Academy sudah melayani dan membimbing mahasiswa, dosen,
                        maupun praktisi dari berbagai instansi dan negara melalui konten berkualitas dan tutor terpercaya.
                    </div>
                </div>
                <div class="flex gap-10">
                    <div class="flex shrink-0 flex-col items-start justify-start">
                        <p class=" mb-5">Tentang Kami</p>
                        <ul class=" font-normal text-sm space-y-1">
                            <li><button class="hover:text-sec_blue">Actuary Academy</button></li>
                            <li><button class="hover:text-sec_blue">Hak Cipta</button></li>
                            <li><button class="hover:text-sec_blue">Privacy Policy</button></li>
                            <li><button class="hover:text-sec_blue">Syarat & Ketentuan</button></li>
                        </ul>
                    </div>
                    <div class="flex shrink-0 flex-col">
                        <p class=" mb-5">Produk</p>
                        <div class="flex flex-col font-normal text-sm gap-y-1">
                            <RouterLink :to="{ name: 'Tutor Privat' }" class="hover:text-sec_blue"> Tutor Privat </RouterLink>
                            <RouterLink :to="{ name: 'Akademi' }" class="hover:text-sec_blue"> Akademi </RouterLink>
                            <RouterLink :to="{ name: 'Company Training' }" class="hover:text-sec_blue"> Company Training </RouterLink>
                            <RouterLink :to="{ name: 'Jasa Aktuaria' }" class="hover:text-sec_blue"> Jasa Aktuaria </RouterLink>
                            
                        </div>
                    </div>
                </div>
                <div class="flex gap-10">
                    <div class="flex shrink-0 flex-col">
                        <p class=" mb-5">Fitur</p>
                        <ul class="font-normal text-sm space-y-1">
                            <li><button class="hover:text-sec_blue">Fitur 1</button></li>
                            <li><button class="hover:text-sec_blue">Fitur 2</button></li>
                            <li><button class="hover:text-sec_blue">Fitur 3</button></li>
                            <li><button class="hover:text-sec_blue">Fitur 4</button></li>
                        </ul>
                    </div>
                    <div class="flex shrink-0 flex-col items-start justify-start">
                        <div class="flex mb-5">Hubungi Kami</div>
                        <ul class=" font-normal text-sm space-y-1">
                            <li>
                                <button @click="goToWhatsapp" class=" flex justify-center hover:text-sec_blue">
                                    <img src="/src/assets/icon/WhatsApp 1.png" class=" h-full mr-2" />
                                    <p clas>+62 812 1756 4720</p>
                                </button>
                            </li>
                            <li>
                                <button @click="goToInstagram" class=" flex justify-center hover:text-sec_blue">
                                    <img src="/src/assets/icon/Instagram_logo_2016.svg.png" class=" h-full mr-2" />
                                    <p clas>actuary_academy</p>
                                </button>
                            </li>
                            <li>
                                <button @click="goToEmail" class=" flex justify-center hover:text-sec_blue">
                                    <img src="/src/assets/icon/Gmail_icon_(2020).svg.png" class=" h-full mr-2" />
                                    <p clas>actuaryacademy1st@gmail.com</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="center text-gray-300 font-inter font-light py-4">
                <p>Copyright © 2023 Actuary Academy. All rights reserved</p>
            </div>

        </div>

    </section>
</template>
<style>
    .shadow-top-footer {
        box-shadow: 0px -5px 30px rgba(0, 0, 0, 0.2);
    }
</style>
