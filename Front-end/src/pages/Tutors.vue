<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import { tutors } from '@/db';

const splideOptions = {
    perPage: 1,
    pagination: false,
    rewind: true,
    classes: {
        arrow : 'splide__arrow !bg-white !w-12 !h-12 [&_svg]:!w-6 [&_svg]:!h-6 [&_svg]:!fill-main_blue'
    }
}

</script>
<template>
    <div class="overflow-hidden">
        <Splide :options="splideOptions">
            <SplideSlide v-for="tutor in tutors">
                <div class="relative">
                    <div class="absolute left-36 top-10">
                        <img class="w-[30rem]" :src="tutor.img"/>
                    </div>
                    <div class="bg-white text-main_blue pl-[50%] pr-32 pt-24 pb-8">
                        <h1 class="text-[48px] font-bold mr-10">{{ tutor.name }}</h1>
                        <h1 class="text-[40px] font-bold mr-10">{{ tutor.classes }}</h1>
                    </div>
                    <div class="text-white bg-main_blue pl-[50%] pr-32 pt-12 pb-36 text-lg flex flex-col items-start">
                        <ul class="list-disc list-inside">
                            <li v-for="achievement in tutor.achievs">{{ achievement }}</li>
                        </ul>
                        <div class="inline-block rounded-lg bg-main_orange text-white font-semibold mt-5 px-5 py-2 cursor-pointer self-end shadow-xl">
                            Berlangganan
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>
