<template>
    <div class="content-area font-inter flex flex-col text-main_blue gap-y-1">
        <div class="top-0 sticky bg-white w-full font-bold text-2xl py-4">Kelas Saya</div>
        <div class="flex flex-col gap-y-5 w-full">

            <div v-if="!courses" class="w-full items-center py-8 fill-gray-300">
                <svg class="mx-auto m-4" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                    <path
                        d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
                </svg>
                <div class="text-center font-semibold text-gray-300 text-2xl">Kamu belum memiliki kelas !
                </div>
            </div>

            <div v-else v-for="(course, index) in courses" :key="index"
                class="notifItem flex flex-row justify-between text-black text-sm border-[1.5px] border-main_blue rounded-xl py-3 px-4">
                <div class="flex flex-col gap-1">
                    <div class="flex text-lg mr-auto bg-main_blue py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        {{ course.category }}
                    </div>
                    <div class="font-medium text-lg py-1">{{ course.title }}</div>
                </div>
                <div class="flex flex-col gap-1">
                    <div class="text-xs text-gray-600 p-1">Berlangganan hingga 27 juni 2024</div>
                    <div
                        class="flex text-lg ml-auto bg-orange-500 py-1 px-3 text-white font-semibold first-letter:text-center rounded-lg">
                        Berhenti Langganan</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/store';
import router from '@/router';

const userStore = useUserStore();

//Courses Functions
const courses = computed(() => userStore.getAllCourses);

onMounted(() => {
    userStore.setAllcourses();
})

//Display functions
const modalError = ref(false);
const errorMessage = ref('');
const closeModal = (e) => {
    if (e.target.closest('.modal-card')) return;
    else modalError.value = false;
}

//Helpers
function isoToDate(isoDate) {
    const date = new Date(isoDate);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const customFormat = `${day} ${month} ${year} - ${hours}:${minutes}`;
    return customFormat;
}


</script>
