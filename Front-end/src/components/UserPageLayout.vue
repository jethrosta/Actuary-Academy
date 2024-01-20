<script setup>
import { RouterView } from 'vue-router';
import Icon from './Icon.vue';
import { useAuthStore } from '@/store';
import router from '@/router';
import { notifCount, purchaseCount } from '@/db';

const store = useAuthStore();

const handleLogout = async () => {
    try {
        store.logout().then(() => {
            router.push({ name: 'dashboard' });
        });
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

</script>
<template>
    <div class="container max-w-[1500px] items-center justify-center mx-auto">
        <div class="flex flex-row h-full items-start px-10">
            <aside class="hidden lg:flex left-0 sticky top-44 ">
                <div class="flex flex-row min-w-[280px] pl-10 pb-20 items-center justify-between text-xl">
                    <div class="user-menu flex flex-col pr-8 text-gray-600  gap-y-8 pl-10 ">
                        <RouterLink :to="{ name: 'Akun' }" exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="account" size="20" />
                            Akun
                        </RouterLink>
                        <RouterLink :to="{ name: 'Notifikasi' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="notif" size="20" />
                            Notifikasi
                            <span v-if="notifCount > 0"
                                class="bg-red-500 text-white font-normal text-lg text-center rounded-[50%] w-7 h-7 leading-7">
                                {{ notifCount }}
                            </span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Kelas Saya' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="my-class" size="20" />
                            Kelas Saya
                        </RouterLink>
                        <RouterLink :to="{ name: 'Keranjang Saya' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="purchase" size="20" />
                            Keranjang
                            <span v-if="purchaseCount > 0"
                                class="bg-red-500 text-white font-normal text-lg text-center rounded-[50%] w-7 h-7 leading-7">
                                {{ purchaseCount }}
                            </span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Pengaturan' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="settings" size="20" />
                            Pengaturan
                        </RouterLink>
                        <div @click="handleLogout"
                            class="hover:text-main_blue hover:stroke-main_blue hover:cursor-pointer stroke-inherit flex flex-row items-center gap-3">
                            <Icon name="logout" size="20" />
                            Keluar
                        </div>

                    </div>
                    <div class="bar flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="350">
                            <line x1="0" y1="0" x2="0" y2="350" stroke="#b0b0b0" stroke-width="1" />
                        </svg>
                    </div>
                </div>
            </aside>
            <div class="scroll-container h-screen w-full overflow-y-scroll my-8 px-14">
                <RouterView class="scroll-content"></RouterView>
            </div>
        </div>
    </div>
</template>

<style>
.scroll-container {
    position: relative;
    overflow: auto; /* Set overflow to auto to show scrollbar only when there's overflow */
}

/* Adjust scrollbar appearance for WebKit browsers (Chrome, Safari) */
.scroll-container::-webkit-scrollbar {
    width: auto; /* Use auto to show scrollbar only when there's overflow */
    max-width: 8px; /* Use auto to show scrollbar only when there's overflow */
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: rgb(180, 180, 180);
    border-radius: 6px;
    height: min-content;
}

.scroll-container::-webkit-scrollbar-track {
    background-color: rgb(220, 220, 220);
    border-radius: 6px;
}

</style>