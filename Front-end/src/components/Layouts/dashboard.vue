<script setup>
import { ref, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import NavDropdown from '../Modules/NavDropdown.vue';
import UserDropdown from '../Modules/UserDropdown.vue';
import NavSideMenu from '../Modules/NavSideMenu.vue';
import { useStore } from "../../store/index.js";

const store = useStore()
const isLoggedIn = computed(() => store.loginState.status.loggedIn)
const user = JSON.parse(localStorage.getItem('user'))

const langSetting = ref({ long: "Bahasa Indonesia", short: "INA" })

const switchLang = (index) => {
  langSetting.value = languageList[index]
}
const languageList = [
  { long: "Bahasa Indonesia", short: "INA" },
  { long: "English", short: "EN" }
]

const langMenuOpen = ref(false);
const toggle = () => {
  if (langMenuOpen.value) {
    langMenuOpen.value = false;
    document.removeEventListener('click', close);
    return;
  }
  else {
    langMenuOpen.value = true;
    document.addEventListener('click', close);
  }
};
const close = (e) => {
  if (e.target.closest('.menu-item')) return;
  isOpen.value = false;
  document.removeEventListener('click', close);
};

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

</script>
<template>
  <header class="top-0 sticky z-30 select-none">
    <!--Big Screen Dashboard-->
    <div class="full-size bg-main_blue lg:block hidden shadow-xl lg:text-lg md:text-md text-xs lg:px-4 px-1 pt-3">
      <div class="flex justify-center relative">
        <RouterLink :to="{ name: 'Landingpage' }">
          <div class="main-logo flex flex-col mx-auto">
            <img src="/src/assets/icon/AAlogo-cropped.png" class="mx-auto lg:w-16 w-10" />
            <div class="font-inter lg:text-md md:text-xs text-[8px] text-white md:py-1 py-0">Actuary Academy</div>
          </div>
        </RouterLink>
        <langMenu class="language-button absolute right-0 my-2 mr-8 text-sm cursor-pointer" @click="toggle">
          <div class="flex flex-row items-center cursor-pointer" :class="langMenuOpen ? 'text-sec_blue' : 'text-white'">
            <div>{{ langSetting.long }}</div>
            <svg class="h-2 w-7 mt-1 inline-block" preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke="langMenuOpen ? '#0D1C9F' : 'white'" stroke-width="1.57025">
              </path>
            </svg>
          </div>
          <div class="relative translate-y-3 font-medium" v-if="langMenuOpen">
            <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
            </svg>
            <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 ">
              <div @click="switchLang(0)"
                class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
                Bahasa Indonesia
              </div>
              <div @click="switchLang(1)"
                class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
                English
              </div>
            </div>
          </div>
        </langMenu>
      </div>
      <div class="-mx-4 lg:-mt-6 md:-mt-5 -mt-4 -mb-5 ">
        <img src="/src/assets/Vector 23.svg" class="w-screen" />
      </div>
      <!-- Navbar -->
      <nav class="flex justify-between items-center text-white font-inter font-bold mx-auto lg:px-10 px-4">
        <div class="flex flex-row items-center pb-3">
          <!-- Search Bar -->
          <div class="font-normal hidden lg:w-80 md:w-56 lg:flex">
            <div class="relative w-72">
              <input
                class="text-sec_blue block w-full pl-4 py-2.5 pr-10 leading-tight bg-sec_blue bg-opacity-40 rounded-md shadow-sm focus:outline-none focus:bg-white placeholder:text-white placeholder:text-opacity-50"
                type="search" placeholder="Cari di Actuary Academy">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 bg-white rounded-tr-md rounded-br-md pl-3">
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
          </div>
        </div>
        <!-- Button Navigation -->
        <div id="navbar" class="xl:gap-x-10 lg:gap-x-5 lg:flex hidden pt-3 lg:text-base text-sm">
          <RouterLink :to="{ name: 'Tentang Kami' }" class="hover:text-sec_blue">Tentang Kami</RouterLink>
          <NavDropdown title="Produk" mainLink="Produk" :items="productSubmenu" class="hover:text-sec_blue pb-3" />
          <RouterLink :to="{ name: 'Testimoni' }" class="hover:text-sec_blue">Testimoni</RouterLink>
          <RouterLink :to="{ name: 'Karir' }" class="hover:text-sec_blue">Karir</RouterLink>
        </div>

        <div v-if="isLoggedIn" id="userButton" class="flex items-center font-normal pb-1">
          <div class="flex space-x-2 px-2 select-none items-center rounded-full cursor-pointer p-1">
            <div class="pl-2">Hello, <span class="font-semibold">{{ user.username }}</span></div>
            <UserDropdown :items="accountMenu" class="hover:text-sec_blue py-1" />
          </div>
        </div>

        <div v-else id="UserButton" class="flex space-x-4 pb-3">
          <div>
            <RouterLink to="/login"
              class="bg-main_blue hover:bg-[#1a4ab3] border-sec_blue border rounded-md py-[0.625rem] px-[1.25rem]">Masuk
            </RouterLink>
          </div>
          <div class="">
            <RouterLink to="/register" class="bg-sec_blue hover:bg-[#15419f] rounded-md py-[0.625rem] px-[1.25rem] ">
              Daftar
            </RouterLink>
          </div>
        </div>


      </nav>
    </div>

    <!--Small Screen Dashboard-->
    <div
      class="small-size select-none text-white items-start lg:hidden px-1 pt-1 pb-8 -mb-16 flex flex-row md:text-md text-xs ">

      <div class="flex flex-1 items-start pt-3 pl-3">
        <NavSideMenu class="" :items="productSubmenu" />
      </div>

      <RouterLink :to="{ name: 'Landingpage' }" class="main-logo flex flex-col justify-center flex-1 py-2">
        <img src="/src/assets/icon/AAlogo-cropped.png" class="mx-auto w-12" />
        <div class="font-inter text-center text-sm text-white md:py-1">Actuary Academy</div>
      </RouterLink>

      <div class="flex flex-row flex-1 justify-end md:gap-x-2 pr- pt-3">
        <div class="flex flex-row items-center cursor-pointer py-1">
          <langMenu class="language-button flex cursor-pointer" @click="toggle">
            <div class="flex flex-row items-center cursor-pointer" :class="langMenuOpen ? 'text-sec_blue' : 'text-white'">
              <div>{{ langSetting.short }}</div>
              <svg class="h-2 w-7 mt-1 inline-block" preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke="langMenuOpen ? '#0D1C9F' : 'white'" stroke-width="1.57025">
                </path>
              </svg>
            </div>
            <div class="relative translate-y-8 font-medium" v-if="langMenuOpen">
              <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
              </svg>
              <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 ">
                <div @click="switchLang(0)"
                  class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
                  Bahasa Indonesia
                </div>
                <div @click="switchLang(1)"
                  class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
                  English
                </div>
              </div>
            </div>
          </langMenu>
        </div>

        <div v-if="isLoggedIn" id="userButton" class="flex items-center font-normal">
          <div class="flex space-x-2 select-none items-center rounded-full cursor-pointer">
            <div class="hidden sm:flex px-2">Hello, <span class="font-semibold">{{ user.username }}</span></div>
            <UserDropdown :items="accountMenu" class="hover:text-sec_blue -my-2" />
          </div>
        </div>

        <div v-else id="UserButton" class="flex space-x-2 py-1">
          <div>
            <RouterLink to="/login" class="bg-main_blue hover:bg-[#1a4ab3] border-sec_blue border rounded-md py-1 px-2">
              Masuk
            </RouterLink>
          </div>
          <div class="hidden lg:flex">
            <RouterLink to="/register" class="bg-sec_blue hover:bg-[#15419f] rounded-md py-1 px-2">
              Daftar
            </RouterLink>
          </div>
        </div>



      </div>

    </div>

  </header>


  <RouterView></RouterView>
</template>

<style>
.small-size {
  background-image: url("data:image/svg+xml,%3Csvg class='w-full' width='' height='' viewBox='46 46 1400 170' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 129H580.159C589.308 129 597.726 133.997 602.107 142.029L608.893 154.471C613.274 162.503 621.692 167.5 630.841 167.5H877.159C886.308 167.5 894.726 162.503 899.107 154.471L905.894 142.029C910.274 133.997 918.692 129 927.841 129H1481.5V27H32V129Z' fill='%230066CC' /%3E%3Cpath d='M32 129H580.159C589.308 129 597.726 133.997 602.107 142.029L608.893 154.471C613.274 162.503 621.692 167.5 630.841 167.5H877.159C886.308 167.5 894.726 162.503 899.107 154.471L905.894 142.029C910.274 133.997 918.692 129 927.841 129H1481.5V27H32V129Z' stroke='%230D1C9F' stroke-width='3' stroke-linecap='round' /%3E%3C/svg%3E");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}</style>