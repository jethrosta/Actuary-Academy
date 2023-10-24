<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Footer from '../Footer.vue';

const name = ref('Nama')
const occupation = ref('Jabatan Jabatan Jabatan Jabatan Jabatan Jabatan Jabatan Jabatan')
const comment = ref('Actuary Academy membantu saya dalam menentukan pricing dalam dunia asuransi. Materi pricing disajikan dengan video pembelajaran yang sangat mudah dipahami serta harga yang terjangkau. Saya menantikan Actuary Academy yang lebih baik untuk kedepannya')
const stars = ref(5)
const imgUrl = ref('/src/assets/testimonies/profile.png')

</script>
<template>
    <div class="relative overflow-hidden">
        <div>
            <div class="text-white bg-main_blue px-32">
                <div class="w-3/5 pt-14 pb-16">
                    <RouterLink to="/testimonies" class="flex items-center text-lg mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span class="ml-1">Kembali</span>
                    </RouterLink>
                    <h1 class="text-5xl font-bold mr-10">Komentar mereka tentang Actuary Academy</h1>
                    <div class="flex space-x-3 my-6">
                        <svg v-for="_ in stars" class="h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                    </div>
                    <p class=" text-xl pr-24">
                        “{{ comment }}”
                    </p> 
                </div>
            </div>
            <div class="bg-white text-main_blue px-32">
                <div class="w-3/5 py-14 text-lg">
                    <p class="font-bold">{{ name }}</p>
                    <p class="w-96">{{ occupation }}</p>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div class="absolute right-36 top-10">
                <img class="w-[32rem]" :src="imgUrl"/>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
