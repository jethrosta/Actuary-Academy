<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import { testimonies } from '@/db'

const splideOptions = {
    perPage: 3,
    gap: '1.25rem',
    pagination: false,
    rewind: true,
    classes: {
        arrow : 'splide__arrow !bg-main_blue !w-10 !h-10 [&_svg]:!fill-white'
    }
}

</script>
<template>
    <div class="mb-20">
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
                    <div class="flex-none relative h-[32rem] bg-[#D9D9D9] rounded-3xl overflow-hidden cursor-pointer" @click="$router.push({ name: 'testimony-profile' })">
                        <div class="bg-gradient-to-t from-main_blue to-transparent absolute h-80 bottom-0 w-full"></div>
                        <div class="absolute flex flex-col px-7 py-6">
                            <div class="text-main_blue font-bold font-inter text-xl">{{ testi.name }}</div>
                            <div class="flex items-stretch align-middle gap-2 font-semibold mt-2">
                                <div v-show="testi.product" class="py-1 px-3 bg-main_blue text-white rounded-lg text-base">{{ testi.product }}</div>
                                <div v-show="testi.grade" class="flex items-center py-1 px-3 bg-main_blue text-white rounded-lg text-sm">Nilai: {{ testi.grade }}</div>
                            </div>
                        </div>
                        <img class="h-[32rem] object-contain object-bottom" :src="testi.image || '/src/assets/testimonies/default-male.png'"/>
                        <div class="space-x-3 w-full flex justify-between items-end absolute bottom-0 z-20 px-8 py-6">
                            <div class="text-white font-inter" :class="testi.text.length > 120 ? 'text-sm' : 'text-base'">
                                “{{ testi.text }}”
                            </div>
                            <!-- <RouterLink :to="{ name: 'testimony-profile' }" class="hover:transition-transform hover:scale-125">
                                <svg class="h-full w-6" preserve-aspect-ratio="none" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 10.667 1.667 H 5 C 3.435 1.667 2.167 2.935 2.167 4.5 V 21.5 C 2.167 23.065 3.435 24.333 5 24.333 H 22 C 23.565 24.333 24.833 23.065 24.833 21.5 V 15.833 M 12.083 14.417 L 24.833 1.667 M 24.833 1.667 V 8.75 M 24.833 1.667 H 17.75" stroke="white" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </RouterLink> -->
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>
