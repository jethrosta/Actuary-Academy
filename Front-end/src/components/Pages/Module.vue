<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Icon from '../Modules/Icon.vue';
import Footer from "../Footer.vue";
import { modules } from '@/db';

const route = useRoute();

const moduleId = computed(() => route.params.moduleId);
const selectedModule = computed(() => {
    return modules[moduleId.value] ?? null;
});

</script>
<template>
    <main class="bg-module items-center justify-center object-center">
        <div class="flex flex-col px-20 py-8 bg-contain bg-no-repeat -translate-y-20 bg-scrol">
            <div class="flex max-w-[45%] flex-col text-white mt-20">
                <button class="flex flex-row py-2 text-lg items-center " @click="this.$router.push({ name: 'Akademi' })">
                    <svg class="translate-x-[-5px]" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071Z"
                            fill="white" />
                    </svg>
                    Kembali
                </button>
                <template v-if="selectedModule">
                    <div class="font-bold text-5xl py-2">{{ moduleId }}</div>
                    <div class="font-bold text-5xl">{{ selectedModule.name }}</div>
                    <hr class="mb-4 mt-7  border-white">
                    <div class="text-lg leading-relaxed text-justify">{{ selectedModule.desc }}</div>
                </template>
                <template v-else>
                    <div class="font-bold text-5xl mt-3">Module Not Found</div>
                </template>
            </div>
            <div v-if="selectedModule" class="flex flex-row flex-wrap justify-center text-main_blue p-10 gap-8 mt-[13rem]">
                <RouterLink :to="{ name: 'module-video', params: { moduleId } }" class="flex flex-row hover:bg-main_blue stroke-main_blue hover:stroke-white hover:cursor-pointer hover:text-white items-center border-main_blue border-2 rounded-2xl px-10  py-8 space-x-8">
                    <Icon name="video" size="90" />
                    <div class="font-bold text-4xl">Video dan Modul</div>
                </RouterLink>
                <RouterLink :to="{ name: 'module-tryout', params: { moduleId } }" class="flex flex-row hover:bg-main_blue stroke-main_blue hover:stroke-white hover:cursor-pointer hover:text-white items-center border-main_blue border-2 rounded-2xl px-10 py-8 space-x-8">
                    <Icon name="file" size="90" />
                    <div class="font-bold text-4xl">Soal Try Out dan Pembahasan</div>
                </RouterLink>
                <RouterLink :to="{ name: 'module-discussion', params: { moduleId } }" class="flex flex-row hover:bg-main_blue stroke-main_blue hover:stroke-white hover:cursor-pointer hover:text-white items-center border-main_blue border-2 rounded-2xl px-10 py-8 space-x-8">
                    <Icon name="file" size="90" />
                    <div class="font-bold text-4xl">Pembahasan Soal Ujian PAI</div>
                </RouterLink>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
<style scoped>
.bg-module {
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%221440%22%20height%3D%22700%22%20viewBox%3D%220%200%201440%20700%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20opacity%3D%220.2%22%20d%3D%22M391.09%20554.312C391.09%20554.312%20882.593%20769.431%201110.12%20516.987C1337.65%20264.542%201829.15%20479.661%201829.15%20479.661L1768.69%20-685.07L330.628%20-610.419L391.09%20554.312Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3Cpath%20opacity%3D%220.5%22%20d%3D%22M2860.82%20454.976C2860.82%20454.976%202185.03%20915.753%201681.41%20516.2C1177.8%20116.647%20501.999%20577.424%20501.999%20577.424L402.825%20-1333.06L2761.65%20-1455.51L2860.82%20454.976Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3Cpath%20d%3D%22M-332.601%20529.626C-332.601%20529.626%20387.273%20917.953%20846.811%20468.402C1306.35%2018.8505%202026.22%20407.178%202026.22%20407.178L1815.82%20-3645.92L-543%20-3523.47L-332.601%20529.626Z%22%20fill%3D%22%230D1C9F%22%20%2F%3E%3C%2Fsvg%3E");
    background-color: #fff;
    background-size: 100% auto;
    background-position: top -200px left 0px;
    background-repeat: no-repeat;
}
</style>
