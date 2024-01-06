<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { modules } from '@/db';

const route = useRoute();

const moduleId = route.params.moduleId;
const module = modules[moduleId];
const pageTitle = `${moduleId}: ${module.name}`;

const navigations = [
    { title: 'Akademi', url: '/academy' },
    { title: pageTitle, url: `/modules/${moduleId}` },
    { title: 'Soal Try Out & Pembahasan' }
]

</script>
<template>
    <div class="bg-white px-24 py-16 font-inter">
        <div class="flex items-center space-x-1 mb-6">
            <template v-for="(nav, index) in navigations">
                <div>
                    <RouterLink v-if="nav.url" :to="nav.url" class="text-main_blue">
                        {{ nav.title }}
                    </RouterLink>
                    <span v-else>{{ nav.title }}</span>
                </div>
                <div v-if="index !== navigations.length - 1" class="text-sec_blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
            </template>
        </div>
        <div class="flex justify-between items-start mx-10">
            <div class="flex flex-col mt-6">
                <div class="text-3xl font-bold mb-5">KUIS</div>
                <ul class="text-2xl text-sec_blue font-semibold list-disc list-outside">
                    <li>Single Payment Interest</li>
                    <li>Multi Payment Interest</li>
                    <li>General Annuity</li>
                    <li>Arithmetic & Geometric Annuity</li>
                    <li>Deferred Annuity</li>
                    <li>Metode Pengembalian Utang</li>
                    <li>Obligasi</li>
                    <li>Dollar & Weighted Interest</li>
                    <li>Inflasi</li>
                </ul>
                <div class="mt-7 self-center text-2xl uppercase text-sec_blue font-semibold px-8 py-3 border-[2.5px] border-sec_blue rounded-xl cursor-pointer">
                    Try Out
                </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
                <div class="w-[370px] mb-8">
                    <img src="/src/assets/tryout.png">
                </div>
                <div class="flex justify-center items-end font-semibold text-3xl text-white absolute inset-0 bg-module-tryout">
                    <div class="mx-6 mb-8">Uji Pengetahuanmu!</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bg-module-tryout {
        background-image: linear-gradient(to top, #0066CC 20%, transparent);
    }
</style>
