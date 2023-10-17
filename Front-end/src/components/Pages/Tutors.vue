<script setup>
import Footer from '../Footer.vue';

const tutorsProfile = [
    {
        name: 'Firstname Lastname',
        classes: 'A10, A20, A70',
        achievs: [
            'Mahasiswa Ilmu Aktuaria UGM 2019',
            'Achievement 1',
            'Achievement 2',
            'Achievement 3',
            '...',
        ],
        img: 'src/assets/tutors/1.png'
    }
]

const tutor = tutorsProfile[0] // temporary

</script>
<template>
    <div class="relative overflow-hidden">
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
            <div class="inline-block rounded-lg bg-[#F26D0F] text-white font-semibold mt-5 px-5 py-2 cursor-pointer self-end shadow-xl">
                Berlangganan
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
