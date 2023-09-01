<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import Dropdown from '../Dropdown.vue';

const isLoggedIn = ref(false)

const productSubmenus = [
  { title: 'Produk', link: 'products' },
  { title: 'Tutor Privat', link: 'private-tutor' },
  { title: 'Akademi', link: '#' },
  { title: 'Company Training', link: 'company-training' },
  { title: 'Jasa Aktuaria', link: '#' }
]

</script>
<template>
    <header class="bg-main_blue top-0 sticky shadow-xl z-30 px-4 py-3">
      <div class="flex justify-center relative">
        <RouterLink to="/">
          <div class="mx-auto text-center font-inter">
            <img src="/src/assets/icon/AAlogo-cropped.png" class="mx-auto w-20"/>
            <div class="text-lg text-white">Actuary Academy</div>
          </div>
        </RouterLink>
        <div class="absolute right-0 my-2 mr-10 text-white cursor-pointer">
          <span class="mr-1">Bahasa Indonesia</span>
          <svg class="inline-block w-4 h-4 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div class="-mx-4 -mt-7 -mb-1">
        <img src="/src/assets/Vector 23.svg" class="w-screen"/>
      </div>
      <!-- Navbar -->
      <nav class="flex justify-between items-center text-white font-inter font-bold mx-auto px-10 xl:px-20">
        <!-- Search Bar -->
        <div class="font-normal">
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
        <div id="navbar" class="space-x-20 md:flex hidden">
          <RouterLink to="about" class="hover:text-sec_blue">Tentang Kami</RouterLink>
          <Dropdown title="Produk" :items="productSubmenus" class="hover:text-sec_blue" />
          <RouterLink to="testimonies" class="hover:text-sec_blue">Testimoni</RouterLink>
          <RouterLink to="career" class="hover:text-sec_blue">Karir</RouterLink>
        </div>
        <div v-if="isLoggedIn" id="UserButton" class="flex space-x-4">
          <div>
            <RouterLink to="/masuk"  class="bg-main_blue border-sec_blue border rounded-md py-[0.625rem] px-[1.25rem]">Masuk</RouterLink>
          </div>
          <div>
            <RouterLink to="/daftar" class="bg-sec_blue rounded-md py-[0.625rem] px-[1.25rem] ">Daftar</RouterLink>
          </div>
        </div>
        <div v-else class="flex items-center font-normal">
          <div class="mr-3">Hello, <span class="font-semibold">Barbara!</span></div>
          <div class="flex space-x-2 items-center cursor-pointer">
            <div class="w-10 h-10 rounded-full bg-gray-300 ">
              <img src="">
            </div>
            <svg class="inline-block w-4 h-4 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </nav>
  </header>
  
  <RouterView/>
</template>
