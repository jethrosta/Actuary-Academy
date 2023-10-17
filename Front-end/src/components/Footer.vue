<template>
    <section class="footer w-full bg-main_blue px-10 sm:px-20 py-10">
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
                        <ul class=" font-normal text-sm">
                            <li>Actuary Academy</li>
                            <li>Hak Cipta</li>
                            <li>Privacy Policy</li>
                            <li>Syarat & Ketentuan</li>
                        </ul>
                    </div>
                    <div class="flex shrink-0 flex-col">
                        <p class=" mb-5">Produk</p>
                        <div class="flex flex-col font-normal text-sm ">
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
                        <ul class=" font-normal text-sm">
                            <li>Fitur 1</li>
                            <li>Fitur 2</li>
                            <li>Fitur 3</li>
                            <li>Fitur 4</li>
                        </ul>
                    </div>
                    <div class="flex shrink-0 flex-col items-start justify-start">
                        <div class="flex mb-5">Hubungi Kami</div>
                        <ul class=" font-normal text-sm">
                            <div class=" flex">
                                <img src="/src/assets/icon/WhatsApp 1.png" class=" h-full mr-2 pt-1" />
                                <p clas>+62 812 1756 4720</p>
                            </div>
                            <div class=" flex">
                                <img src="/src/assets/icon/Instagram_logo_2016.svg.png" class=" h-full mr-2 pt-1" />
                                <p clas>actuary_academy</p>
                            </div>
                            <div class=" flex">
                                <img src="/src/assets/icon/Gmail_icon_(2020).svg.png" class=" h-full mr-2 pt-1" />
                                <p clas>actuaryacademy1st@gmail.com</p>
                            </div>
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

<script setup>
import { RouterLink } from 'vue-router';

</script>