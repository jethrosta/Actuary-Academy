<script setup>
import { ref, computed, watch } from 'vue';
import { RouterLink,RouterView } from 'vue-router';
import MainDropdown from '../Modules/MainDropdown.vue';
import profileDropdown from '../Modules/profileDropdown.vue';
import { useStore } from "../../store/index.js";

const store = useStore();
const isLoggedIn = computed(() => store.loginState.status.loggedIn)
const user = JSON.parse(localStorage.getItem('user'));
const isProfileMenuOpen = ref(false);

const productSubmenu = [
  { title: 'Tutor Privat', name: 'Tutor Privat' },
  { title: 'Akademi', name: 'Akademi' },
  { title: 'Company Training', name: 'Company Training' },
  { title: 'Jasa Aktuaria', name: 'Jasa Aktuaria' }
]

const accountMenu = [
  { title: 'Akun', name: 'Akun' },
  { title: 'Notifikasi', name: 'Notifikasi' },
  { title: 'Kelas Saya', name: 'Kelas Saya' },
  { title: 'Keranjang', name: 'Keranjang Saya' },
  { title: 'Pengaturan', name: 'Pengaturan' }
]

function toggleProfileMenu() {
  if (isProfileMenuOpen.value) {
    isProfileMenuOpen.value = false;
  } else {
    isProfileMenuOpen.value = true;
    
    
  } 
}

</script>
<template>
    <header class="bg-main_blue top-0 sticky shadow-xl z-30 px-4 pt-3">
      <div class="flex justify-center relative">
        <RouterLink :to="{ name: 'Landingpage' }">
          <div class="mx-auto text-center font-inter">
            <img src="/src/assets/icon/AAlogo-cropped.png" class="mx-auto w-16"/>
            <div class="text-md text-white">Actuary Academy</div>
          </div>
        </RouterLink>
        <div class="absolute right-0 my-2 mr-10 text-white cursor-pointer">
          <span class="mr-1">Bahasa Indonesia</span>
          <svg class="inline-block w-4 h-4 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div class="-mx-4 -mt-6 -mb-4">
        <img src="/src/assets/Vector 23.svg" class="w-screen"/>
      </div>
      <!-- Navbar -->
      <nav class="flex justify-between items-center text-white font-inter font-bold mx-auto px-10 xl:px-20">
        <!-- Search Bar -->
        <div class="font-normal pb-3">
          <div class="relative w-72">
            <input
              class="text-sec_blue block w-full pl-4 py-2.5 pr-10 leading-tight bg-sec_blue bg-opacity-40 rounded-md shadow-sm focus:outline-none focus:bg-white placeholder:text-white placeholder:text-opacity-50"
              type="search"
              placeholder="Cari di Actuary Academy"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 bg-white rounded-tr-md rounded-br-md pl-3">
              <svg class="h-5 w-5" preserve-aspect-ratio="none" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15.814 8.684 C 15.814 12.526 12.699 15.641 8.857 15.641 C 5.014 15.641 1.899 12.526 1.899 8.684 C 1.899 4.842 5.014 1.727 8.857 1.727 C 12.699 1.727 15.814 4.842 15.814 8.684 Z" stroke="#0D1C9F" stroke-width="2"></path>
                <path d="M 14.708 13.063 L 18.101 16.022" stroke="#0D1C9F" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- Button Navigation -->
        <div id="navbar" class="space-x-10 md:flex hidden pt-3">
          <RouterLink :to="{ name:'Tentang Kami' }" class="hover:text-sec_blue">Tentang Kami</RouterLink>
          <MainDropdown title="Produk" mainLink="Produk" :items="productSubmenu" class="hover:text-sec_blue pb-3" />
          <RouterLink :to="{ name:'Testimoni' }" class="hover:text-sec_blue">Testimoni</RouterLink>
          <RouterLink :to="{ name:'Karir' }" class="hover:text-sec_blue">Karir</RouterLink>
        </div>
        
        <div v-if="isLoggedIn" id="userButton" class="flex items-center font-normal pb-1">
          <div class="flex space-x-2 px-2 select-none items-center rounded-full cursor-pointer p-1" @click="toggleProfileMenu">
            <div class="pl-2">Hello, <span class="font-semibold">{{ user.username }}</span></div>
            <div class="w-8 h-8 rounded-full bg-gray-300 ">
              <img src="../../assets/Ellipse (1).png">
            </div>
            <div class="">
              <svg class="h-2 w-7 " preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke=" isProfileMenuOpen ? '#0D1C9F' : 'white' " stroke-width="1.57025"></path>
              </svg>
              <profileDropdown v-if="isProfileMenuOpen" :items="accountMenu" class=" translate-y-5 relative hover:text-sec_blue py-1"/>
            </div>
          </div>
        </div>

        <div v-else id="UserButton" class="flex space-x-4 pb-3">
          <div>
            <RouterLink to="/masuk"  class="bg-main_blue hover:bg-[#1a4ab3] border-sec_blue border rounded-md py-[0.625rem] px-[1.25rem]">Masuk</RouterLink>
          </div>
          <div>
            <RouterLink to="/daftar" class="bg-sec_blue hover:bg-[#15419f] rounded-md py-[0.625rem] px-[1.25rem] ">Daftar</RouterLink>
          </div>
        </div>

        
      </nav>
  </header>

  <RouterView></RouterView>

</template>
