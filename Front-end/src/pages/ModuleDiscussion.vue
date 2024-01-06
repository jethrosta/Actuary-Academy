<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { modules } from '@/db';

const route = useRoute();

const moduleIdParam = computed(() => route.params.moduleId);
const videoIdParam = computed(() => route.params.videoId);

const currentMod = ref(null);
const currentModVidList = ref(null);
const currentModName = ref(null);
const currentVideo = ref(null);
const videosEl = ref(null);
const navigations = ref(null);

watchEffect(() => {
    currentMod.value = modules[moduleIdParam.value] ?? null;
    currentModVidList.value = currentMod.value?.discussionVideos ?? [];
    currentModName.value = `${moduleIdParam.value}: ${currentMod.value?.name}`;
    currentVideo.value = videoIdParam.value
        ? currentModVidList.value.find((v) => v.videoId === videoIdParam.value)
        : currentModVidList.value[0];
    navigations.value = [
        { title: 'Akademi', url: '/academy' },
        { title: currentModName.value, url: `/modules/${moduleIdParam.value}` },
        { title: 'Pembahasan Soal Ujian PAI' }
    ];
});


onMounted(() => {
    // scroll to current video view in video list sidebar
    const currentVideoIndex = currentModVidList.value?.indexOf(currentVideo.value) ?? null;
    if (currentVideoIndex !== null && currentVideoIndex > 1) {
        videosEl.value[currentVideoIndex - 1].$el.scrollIntoView();
    }
});

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
        <div class="flex">
            <div class="w-full max-w-[26rem] mr-6">
                <div class="bg-main_blue text-white rounded-xl flex items-center mb-2 px-6 py-4">
                    <div class="w-11 h-11 rounded-full bg-gray-300 mr-4">
                        <img src="">
                    </div>
                    <div class="font-semibold text-xl">{{ currentModName }}</div>
                </div>
                <div class="bg-main_blue text-white rounded-xl">
                    <div class="flex flex-col max-h-[40rem] p-6 overflow-auto custom-scrollbar">
                        <RouterLink
                            v-for="(video, index) in currentModVidList"
                            :to="{ name: 'module-discussion', params: { moduleId: moduleIdParam, videoId: video.videoId } }"
                            class="flex items-center mb-5"
                            :class="video.videoId === currentVideo.videoId && 'bg-white rounded-xl px-4 py-3 mt-4 relative'"
                            ref="videosEl"
                        >
                            <template v-if="video.videoId === currentVideo.videoId">
                                <div class="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center bg-sec_blue rounded-full p-3 font-bold h-8">
                                    {{ index + 1 }}
                                </div>
                                <img
                                    class="w-28 h-16 rounded-lg bg-gray-300 shrink-0"
                                    :src="`https://vz-0e8f7475-071.b-cdn.net/${video.videoId}/thumbnail.jpg`"
                                >
                                <div class="ml-4 text-sec_blue">
                                    <div class="font-semibold">{{ video.title }}</div>
                                    <div>{{ video.subtitle }}</div>
                                </div>
                            </template>
                            <template v-else>
                                <div class="bg-white text-sec_blue flex items-center justify-center text-xs font-bold w-6 h-6 rounded-full p-2">
                                    {{ index + 1 }}
                                </div>
                                <img
                                    class="w-24 h-14 rounded-lg bg-gray-300 ml-3 shrink-0"
                                    :src="`https://vz-0e8f7475-071.b-cdn.net/${video.videoId}/thumbnail.jpg`"
                                >
                                <div class="ml-4">
                                    <div class="font-semibold">{{ video.title }}</div>
                                    <div>{{ video.subtitle }}</div>
                                </div>
                            </template>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div v-if="currentVideo">
                <h1 class="text-[2.5rem] font-bold mb-3">{{ currentVideo.title }} {{ currentVideo.subtitle }}</h1>
                <div class="flex gap-x-4 text-main_blue mb-3">
                    <div class="flex items-center">
                        <div class="w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 22" fill="none"><path d="M16.5005 12.1598C16.211 11.8828 15.5693 11.7372 14.5947 11.7232C13.9337 11.7185 13.1376 11.7748 12.3029 11.8875C11.9266 11.6762 11.5406 11.4462 11.2367 11.1739C10.4213 10.4321 9.74101 9.40387 9.31643 8.2724C9.34538 8.16911 9.3695 8.07521 9.3888 7.98132C9.3888 7.98132 9.84715 5.44137 9.72653 4.5822C9.71206 4.46483 9.69758 4.43196 9.66864 4.33806L9.63004 4.23947C9.5046 3.95778 9.25853 3.662 8.87738 3.67608L8.64579 3.67139C8.21639 3.67139 7.86901 3.88266 7.77734 4.20191C7.4975 5.20193 7.78699 6.69491 8.30806 8.63391L8.17297 8.94847C7.80146 9.83111 7.33346 10.7231 6.91853 11.5119L6.86546 11.6152C6.43124 12.4415 6.03561 13.141 5.67858 13.7373L5.3119 13.9251C5.28295 13.9392 4.65573 14.2631 4.50616 14.3523C3.25173 15.0847 2.41705 15.911 2.27713 16.5683C2.23371 16.7796 2.26748 17.0472 2.48942 17.1693L2.84645 17.343C3.00084 17.4181 3.16489 17.4556 3.32893 17.4556C4.2215 17.4556 5.26365 16.3711 6.6966 13.9392C8.35148 13.418 10.2283 12.9814 11.8784 12.742C13.1328 13.4321 14.6815 13.9063 15.6561 13.9063C15.8298 13.9063 15.9794 13.8922 16.1 13.8593C16.2882 13.8124 16.4426 13.7091 16.5391 13.5683C16.7272 13.2913 16.7658 12.911 16.7176 12.5166C16.6983 12.3945 16.6066 12.2537 16.5005 12.1598ZM3.13594 16.7937C3.29998 16.357 3.94649 15.5026 4.90179 14.7373C4.95969 14.6903 5.10926 14.5542 5.24435 14.4274C4.24563 15.9814 3.57499 16.5965 3.13594 16.7937ZM8.79536 4.1174C9.08484 4.1174 9.24888 4.82164 9.25853 5.48362C9.27301 6.14561 9.11379 6.6104 8.91598 6.95313C8.75194 6.44608 8.67474 5.64325 8.67474 5.11742C8.67474 5.11742 8.66027 4.11271 8.79536 4.1174C8.79536 4.11271 8.79536 4.11271 8.79536 4.1174ZM7.1067 13.1504C7.30934 12.803 7.5168 12.4321 7.72909 12.0424C8.25016 11.0847 8.57825 10.3382 8.81948 9.72313C9.30678 10.5823 9.90987 11.3147 10.6191 11.9016C10.706 11.972 10.8025 12.0471 10.8989 12.1222C9.45635 12.3992 8.20674 12.7373 7.1067 13.1504ZM16.2255 13.0706C16.1386 13.1269 15.8829 13.1551 15.7237 13.1551C15.1978 13.1551 14.5513 12.9251 13.6442 12.5448C13.9916 12.5213 14.3149 12.5072 14.5995 12.5072C15.1254 12.5072 15.2798 12.5025 15.7961 12.634C16.3075 12.756 16.3123 13.0143 16.2255 13.0706Z" fill="#0262C2"/><path d="M18.1071 4.72308C17.6343 4.09866 16.9781 3.36625 16.2593 2.66671C15.5404 1.96717 14.7877 1.32866 14.146 0.868559C13.0508 0.0892032 12.5201 0 12.2161 0H1.69819C0.762187 0 -0.00012207 0.741796 -0.00012207 1.65261V19.4792C-0.00012207 20.39 0.762187 21.1318 1.69819 21.1318H17.3014C18.2374 21.1318 18.9997 20.39 18.9997 19.4792V6.59635C19.0045 6.30057 18.9129 5.78413 18.1071 4.72308ZM15.2991 3.601C15.9505 4.23481 16.4619 4.8029 16.8382 5.27708H13.5719V2.10332C14.0592 2.46952 14.6478 2.96718 15.2991 3.601ZM17.6488 19.4698C17.6488 19.6482 17.4944 19.7984 17.311 19.7984H1.70301C1.51967 19.7984 1.36528 19.6482 1.36528 19.4698V1.64791C1.36528 1.46951 1.51967 1.31927 1.70301 1.31927C1.70301 1.31927 12.2161 1.31927 12.2209 1.31927V5.93906C12.2209 6.30527 12.5249 6.60105 12.9012 6.60105H17.6488V19.4698Z" fill="#0262C2"/></svg>
                        </div>
                        <div class="font-semibold">Soal</div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="none"><path d="M10.8041 16.2733C16.9014 16.206 19.95 14.0898 19.95 8.92495C19.95 3.67495 16.8 1.57495 10.5 1.57495C4.20005 1.57495 1.05005 3.67495 1.05005 8.92495C1.05005 12.1559 2.24309 14.1938 4.62916 15.2834L3.15005 19.425L10.8041 16.2733Z" stroke="#0066CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div class="font-semibold">Diskusi</div>
                    </div>
                </div>
                <div class="relative w-[850px] h-[480px]">
                    <iframe
                        class="border-0 absolute top-0 w-full h-full rounded-xl"
                        :src="`https://iframe.mediadelivery.net/embed/186628/${currentVideo.videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`"
                        loading="lazy"
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                        allowfullscreen="true"
                    ></iframe>
                </div>
                <div class="mt-5">
                    <div class="text-sec_blue flex justify-between items-center text-lg font-bold border-b-2">
                        <div class="flex space-x-8">
                            <div class="py-4 border-b-4 border-sec_blue">Tentang</div>
                            <div class="py-4">Transkrip</div>
                        </div>
                        <div class="flex items-center border-2 border-sec_blue rounded-full px-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                <path d="M9 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H13C14.1046 19 15 18.1046 15 17V7M9 1L15 7M9 1V6C9 6.55228 9.44772 7 10 7H15M5 11H11M5 15H11" stroke="#0D1C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="ml-2">Try Out</div>
                        </div>
                    </div>
                    <div class="text-lg mt-4">
                        A brief description of what the video will discuss
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(13, 28, 159, 0.7) transparent;
}

/* Chrome, Edge and Safari */
.custom-scrollbar::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
  margin: 0.5rem 0;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(13, 28, 159, 0.7);
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgb(13, 28, 159);
}
.custom-scrollbar::-webkit-scrollbar-thumb:active {
  background-color: rgb(13, 28, 159);
}
</style>
