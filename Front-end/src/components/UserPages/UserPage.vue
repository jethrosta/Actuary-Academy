<script setup>
import { RouterView } from 'vue-router';
import Footer from '../Footer.vue';
import { useStore } from '../../store/index.js';
import router from '../../router';
import { notifCount, purchaseCount } from '@/db';

const store = useStore();

const handleLogout = async () => {
  try {
    await router.push({ name: 'dashboard' });
    await store.logout();
    router.go();
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

</script>
<template>
    <div class="container items-center justify-center mx-auto">
        <div class="flex flex-row h-full items-start px-10">
            <aside class="hidden lg:flex left-0 sticky top-44">
                <div class="flex flex-row min-w-[280px] pl-10 pb-20 items-center justify-between text-xl">
                    <div class="user-menu flex flex-col pr-8 text-gray-600  gap-y-8 pl-10 ">
                        <RouterLink :to="{ name: 'Akun' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 29 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.2167 31.4C25.2049 31.4 26.8985 29.7619 26.4478 27.8254C25.3268 23.0084 21.5781 20.6 14.2167 20.6C6.85527 20.6 3.10655 23.0084 1.98555 27.8254C1.53489 29.7619 3.22847 31.4 5.2167 31.4H23.2167Z"
                                    stroke="" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.2167 15.2C17.8167 15.2 19.6167 13.4 19.6167 8.89998C19.6167 4.39998 17.8167 2.59998 14.2167 2.59998C10.6167 2.59998 8.8167 4.39998 8.8167 8.89998C8.8167 13.4 10.6167 15.2 14.2167 15.2Z"
                                    stroke="" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Akun
                        </RouterLink>
                        <RouterLink :to="{ name: 'Notifikasi' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 30 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.1493 6.33475C20.1051 6.33475 24.1226 10.3522 24.1226 15.308V19.3272C24.1226 20.2063 24.4452 21.0548 25.0292 21.7118L27.3185 24.2874C28.8617 26.0234 27.6293 28.7678 25.3065 28.7678H4.99211C2.66936 28.7678 1.43696 26.0234 2.98011 24.2874L5.26948 21.7118C5.85349 21.0548 6.17609 20.2063 6.1761 19.3273L6.17613 15.308C6.17613 10.3522 10.1936 6.33475 15.1493 6.33475ZM15.1493 6.33475V1.84814M13.3546 34.1517H16.9439"
                                    stroke="" stroke-width="3.58929" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Notifikasi
                            <span v-if="purchaseCount > 0" class="bg-red-500 text-white font-normal text-lg text-center rounded-[50%] w-7 h-7 leading-7">
                                {{ purchaseCount }}
                            </span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Kelas Saya' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 30 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27.7909 26.9583V5.45833C27.7909 3.47931 26.1865 1.875 24.2075 1.875H8.08252C5.11399 1.875 2.70752 4.28147 2.70752 7.25V30.5417M27.7909 26.9583H6.29086C4.31184 26.9583 2.70752 28.5626 2.70752 30.5417V30.5417C2.70752 32.5207 4.31183 34.125 6.29085 34.125H27.7909V26.9583ZM11.6659 10.8333H18.8325"
                                    stroke="" stroke-width="3.58333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Kelas Saya
                        </RouterLink>
                        <RouterLink :to="{ name: 'Keranjang Saya' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 35 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.54932 5.3998H31.3476C32.7297 5.3998 33.5961 6.89287 32.9104 8.09285L28.2858 16.1859C27.6449 17.3076 26.452 17.9998 25.1602 17.9998H12.8493M12.8493 17.9998L10.0706 22.4458C9.32126 23.6447 10.1832 25.1998 11.597 25.1998H30.8493M12.8493 17.9998L5.74433 3.78984C5.13452 2.57021 3.88797 1.7998 2.52439 1.7998H2.04932M12.8493 32.3998C12.8493 33.3939 12.0434 34.1998 11.0493 34.1998C10.0552 34.1998 9.24932 33.3939 9.24932 32.3998C9.24932 31.4057 10.0552 30.5998 11.0493 30.5998C12.0434 30.5998 12.8493 31.4057 12.8493 32.3998ZM30.8493 32.3998C30.8493 33.3939 30.0434 34.1998 29.0493 34.1998C28.0552 34.1998 27.2493 33.3939 27.2493 32.3998C27.2493 31.4057 28.0552 30.5998 29.0493 30.5998C30.0434 30.5998 30.8493 31.4057 30.8493 32.3998Z"
                                    stroke="" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Keranjang
                            <span v-if="notifCount > 0" class="bg-red-500 text-white font-normal text-lg text-center rounded-[50%] w-7 h-7 leading-7">
                                {{ notifCount }}
                            </span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Pengaturan' }"
                            exact-active-class="text-main_blue stroke-main_blue font-bold"
                            class="hover:text-main_blue hover:stroke-main_blue stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 35 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.8952 4.60147C13.2679 2.96267 14.7249 1.7998 16.4056 1.7998H18.0276C19.7083 1.7998 21.1653 2.96267 21.538 4.60147L21.9158 6.26264C23.1337 6.72855 24.2613 7.37021 25.2661 8.1557L27.0188 7.61664C28.6102 7.12722 30.3296 7.79287 31.1765 9.22627L31.9148 10.4758C32.788 11.9536 32.4964 13.8423 31.2182 14.9879L29.9672 16.1091C30.0622 16.7258 30.1114 17.3572 30.1114 17.9998C30.1114 18.6424 30.0622 19.2738 29.9672 19.8905L31.2182 21.0117C32.4964 22.1573 32.788 24.046 31.9148 25.5238L31.1765 26.7733C30.3296 28.2067 28.6102 28.8724 27.0189 28.383L25.2661 27.8439C24.2613 28.6294 23.1337 29.2711 21.9158 29.737L21.538 31.3981C21.1653 33.0369 19.7083 34.1998 18.0276 34.1998H16.4056C14.7249 34.1998 13.2679 33.0369 12.8952 31.3981L12.5174 29.737C11.2996 29.2711 10.1719 28.6294 9.1671 27.8439L7.41434 28.3829C5.82298 28.8724 4.10361 28.2067 3.25667 26.7733L2.51839 25.5238C1.64523 24.046 1.93683 22.1573 3.21503 21.0117L4.466 19.8905C4.37103 19.2737 4.3218 18.6424 4.3218 17.9998C4.3218 17.3572 4.37103 16.7258 4.46601 16.1091L3.21505 14.9879C1.93685 13.8423 1.64525 11.9536 2.51841 10.4758L3.2567 9.22628C4.10364 7.79288 5.823 7.12723 7.41436 7.61665L9.16711 8.15571C10.1719 7.37022 11.2996 6.72855 12.5174 6.26264L12.8952 4.60147Z"
                                    stroke="" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M19.0587 17.9998C19.0587 18.9939 18.2339 19.7998 17.2166 19.7998C16.1992 19.7998 15.3745 18.9939 15.3745 17.9998C15.3745 17.0057 16.1992 16.1998 17.2166 16.1998C18.2339 16.1998 19.0587 17.0057 19.0587 17.9998Z"
                                    stroke="" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Pengaturan
                        </RouterLink>
                        <div @click="handleLogout"
                            class="hover:text-main_blue hover:stroke-main_blue hover:cursor-pointer stroke-inherit flex flex-row items-center gap-3">
                            <svg class="stroke-current" width="20" height="20" viewBox="0 0 35 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.8414 31.3572H5.48431C3.502 31.3572 1.89502 29.7502 1.89502 27.7679L1.89502 6.23218C1.89502 4.24987 3.502 2.64289 5.48431 2.64289H19.8414M12.6629 17H32.4039M32.4039 17L27.02 22.384M32.4039 17L27.02 11.6161"
                                    stroke="" stroke-width="3.58929" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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
            <RouterView class="pr-20 pl-16"></RouterView>
        </div>
    </div>

    <Footer class="w-screen"></Footer>
</template>
