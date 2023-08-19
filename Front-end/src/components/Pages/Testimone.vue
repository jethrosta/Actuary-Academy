<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import Footer from '../Footer.vue';
import { RouterLink } from 'vue-router';

const splideOptions = {
    perPage: 3,
    gap: '1.25rem',
    pagination: false,
    classes: {
        arrow : 'splide__arrow your-class-arrow !bg-main_blue !w-10 !h-10 [&_svg]:!fill-white'
    }
}

const testimonies = [
    { name: 'Person 1', image: '/src/assets/testimone/Rectangle 64.png', stars: 5 },
    { name: 'Person 2', image: '/src/assets/testimone/Rectangle 63.png', stars: 5 },
    { name: 'Person 3', image: '/src/assets/testimone/Rectangle 57.png', stars: 5 },
    { name: 'Person 4', image: '/src/assets/testimone/Rectangle 62.png', stars: 5 },
    { name: 'Person 5', image: '/src/assets/testimone/Rectangle 61.png', stars: 5 },
    { name: 'Person 6', image: '/src/assets/testimone/Rectangle 60.png', stars: 5 },
    { name: 'Person 7', image: '/src/assets/testimone/Rectangle 59.png', stars: 5 },
    { name: 'Person 8', image: '/src/assets/testimone/Rectangle 58.png', stars: 5 }
]

</script>
<template>
    <body class="mb-20">
        <div class="mt-[4.5rem]">
            <div class="center my-5">
                <h1 class="text-sec_blue font-inter font-bold text-5xl">Lebih dari 1000 orang mempercayai kami</h1>
            </div>
            <div class="center">
                <p class="text-main_blue font-inter font-normal text-lg">Actuary Academy telah melayani berbagai instansi dan perguruan tinggi dalam menghasilkan aktuaris yang unggul</p>
            </div>
        </div>
        <div class="mt-10 mx-auto w-full max-w-[68rem]">
            <Splide :options="splideOptions">
                <SplideSlide v-for="testi in testimonies">
                    <div class="flex-none relative h-[32rem]">
                        <div class="bg-gradient-to-t from-main_blue to-transparent absolute rounded-3xl h-56 bottom-0 w-full"></div>
                        <div class="absolute flex space-x-2 px-7 py-8">
                            <svg v-for="_ in testi.stars" class="w-5 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                        </div> 
                        <img class="h-[32rem] object-cover rounded-3xl" :src="testi.image"/>
                        <div class="space-x-3 w-full flex justify-between items-end absolute bottom-0 z-20 px-8 py-6">
                            <div>
                                <p class="text-white font-bold font-inter text-base">{{ testi.name }}</p>
                                <p class="text-lg text-white">Jabatan Jabatan Jabatan<br>Jabatan Jabatan</p>
                            </div>
                            <RouterLink to="/profil" class="hover:transition-transform hover:scale-125">
                                <svg class="h-full w-6" preserve-aspect-ratio="none" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 10.667 1.667 H 5 C 3.435 1.667 2.167 2.935 2.167 4.5 V 21.5 C 2.167 23.065 3.435 24.333 5 24.333 H 22 C 23.565 24.333 24.833 23.065 24.833 21.5 V 15.833 M 12.083 14.417 L 24.833 1.667 M 24.833 1.667 V 8.75 M 24.833 1.667 H 17.75" stroke="white" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </RouterLink>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </body>
    <Footer></Footer>
</template>
