<template>
  <div class="menu-item font-inter text-sm " @click="toggle">
    <div class="flex flex-row items-center px-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white-700 dark:text-white" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>

    <transition>
      <div class="absolute font-medium p-6 rounded-r-xl bg-main_blue drop-shadow-lg left-0 top-16 shadow-xl -translate-y-2.5"
        v-if="isOpen">
        <div class="main-logo flex flex-row py-3 px-1 justify-center border-b-[1.5px] border-[#1747b1]">
          <img src="/src/assets/icon/AAlogo-cropped.png" class="w-10" />
          <div class="font-inter text-sm text-white p-1">Actuary Academy</div>
        </div>

        <div class="search flex flex-row py-4 font-normal">
          <input
            class="text-sec_blue block pl-4 py-2 leading-tight bg-sec_blue bg-opacity-40 rounded-md shadow-sm focus:outline-none focus:bg-white placeholder:text-white placeholder:text-opacity-50"
            type="search" placeholder="Cari di Actuary Academy">
          <div class="bg-white flex items-center px-2 rounded-r-lg -ml-6">
            <svg class="h-5 w-5" preserve-aspect-ratio="none" viewBox="0 0 20 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 15.814 8.684 C 15.814 12.526 12.699 15.641 8.857 15.641 C 5.014 15.641 1.899 12.526 1.899 8.684 C 1.899 4.842 5.014 1.727 8.857 1.727 C 12.699 1.727 15.814 4.842 15.814 8.684 Z"
                stroke="#0D1C9F" stroke-width="2"></path>
              <path d="M 14.708 13.063 L 18.101 16.022" stroke="#0D1C9F" stroke-width="2" stroke-linecap="round">
              </path>
            </svg>
          </div>
        </div>

        <div class="menu flex flex-col py-4 gap-y-4 font-semibold">
          <RouterLink :to="{ name: 'Tentang Kami' }" class="hover:text-sec_blue">Tentang Kami</RouterLink>
          <div class="flex flex-col">
            <RouterLink :to="{ name: 'Produk' }" class="hover:text-sec_blue">Produk</RouterLink>
            <div class="submenu flex flex-col p-2 font-light gap-2">
              <RouterLink :to="{ name: 'Tutor Privat' }" class="hover:text-sec_blue">Tutor Privat</RouterLink>
              <RouterLink :to="{ name: 'Akademi' }" class="hover:text-sec_blue">Akademi</RouterLink>
              <RouterLink :to="{ name: 'Company Training' }" class="hover:text-sec_blue">Company Training</RouterLink>
              <RouterLink :to="{ name: 'Jasa Aktuaria' }" class="hover:text-sec_blue">Jasa Aktuaria</RouterLink>
            </div>
          </div>
          <RouterLink :to="{ name: 'Testimoni' }" class="hover:text-sec_blue">Testimoni</RouterLink>
          <RouterLink :to="{ name: 'Karir' }" class="hover:text-sec_blue">Karir</RouterLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, defineProps } from 'vue';
import router from '../../router';
import { useStore } from '../../store/index.js';
import NavDropdown from './NavDropdown.vue';

const props = defineProps({
  title: String,
  items: Array
});

const store = useStore();

const isOpen = ref(false);

const toggle = () => {
  if (isOpen.value) {
    isOpen.value = false;
    document.removeEventListener('click', close);
    return;
  }
  else {
    isOpen.value = true;
    document.addEventListener('click', close);
  }
};

const close = (e) => {
  if (e.target.closest('.menu-item')) return;
  isOpen.value = false;
  document.removeEventListener('click', close);
};


</script>
