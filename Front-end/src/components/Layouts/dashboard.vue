<script setup>
    import {ref} from 'vue';
    import {RouterLink, useRouter} from 'vue-router';
    import Dropdown from '../Dropdown.vue';
    const router = useRouter();
    const study = () => {
        router.push({ name : 'Materi'})
    }
    const sidenavbar = ref(false);
</script>

<template>
    <header class=" bg-main_blue top-0 sticky shadow-xl z-30 px-2">
      <div class=" flex justify-center">
        <RouterLink to="/"><img src="/src/assets/icon/AAlogo.png" class="lg:h-16 h-14 lg:-mb-9 -mb-8"/></RouterLink>
      </div>
      <div>
        <h1 class=" lg:text-md text-white font-inter text-center mt-4 text-sm">Actuary Academy</h1>
      </div>
      <div class="">
        <img src="/src/assets/Vector 23.svg" class=" w-screen -mb-4 lg:-mt-6 -mt-4"/>
      </div>
      <!-- Navbar -->
      <nav class=" flex justify-between text-white font-inter text-sm font-medium mx-auto px-10 xl:px-20 ">
        <!-- Search Bar -->
        <div class="pb-3 hidden md:block">
          <div class="relative">
            <input
              class=" text-black block w-full pl-2 py-2 pr-12 leading-tight bg-[#0D1C9F] opacity-[0.4] rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500  "
              type="search"
              placeholder="Cari di Actuary Academy"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 bg-white rounded-tr-md rounded-br-md pl-3">
              <svg class=" h-5 w-5"
                  preserve-aspect-ratio="none"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15.814 8.684 C 15.814 12.526 12.699 15.641 8.857 15.641 C 5.014 15.641 1.899 12.526 1.899 8.684 C 1.899 4.842 5.014 1.727 8.857 1.727 C 12.699 1.727 15.814 4.842 15.814 8.684 Z"
                    stroke="#0D1C9F"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M 14.708 13.063 L 18.101 16.022"
                    stroke="#0D1C9F"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
            </div>
          </div>
        </div>
        <!-- Side Nav Dropdown -->
        <div class="navdropdown md:hidden">
          <svg @click="sidenavbar = !sidenavbar" class="hover:cursor-pointer hover:scale-110 transform transition duration-100"
            width="22"
            height="35"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="2" rx="1.5" fill="white" />
            <rect y="8" width="25" height="2" rx="1.5" fill="white" />
            <rect y="16" width="25" height="2" rx="1.5" fill="white" />
          </svg>
          <div v-if="sidenavbar" class="navside absolute left-0 py-6 px-5 bg-main_blue shadow-lg shadow-neutral-500 rounded-r-xl">
            <!-- Search Bar -->
            <div class="pb-3">
              <div class="relative">
                <input
                  class=" text-black block w-full pl-2 py-2 pr-12 leading-tight bg-[#0D1C9F] opacity-[0.4] rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500  "
                  type="search"
                  placeholder="Cari di Actuary Academy"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 bg-white rounded-tr-md rounded-br-md pl-3">
                  <svg class=" h-5 w-5"
                      preserve-aspect-ratio="none"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 15.814 8.684 C 15.814 12.526 12.699 15.641 8.857 15.641 C 5.014 15.641 1.899 12.526 1.899 8.684 C 1.899 4.842 5.014 1.727 8.857 1.727 C 12.699 1.727 15.814 4.842 15.814 8.684 Z"
                        stroke="#0D1C9F"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M 14.708 13.063 L 18.101 16.022"
                        stroke="#0D1C9F"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                </div>
              </div>
            </div>
            aslkdjaslkdj <br> aslkdjaslkdj <br>aslkdjaslkdj <br>aslkdjaslkdj <br>aslkdjaslkdj <br>
          </div>

        </div>
        <!-- Button Navigation -->
        <div id="navbar" class="space-x-10 pl-[7%] lg:flex hidden pt-3 font-semibold">
          <RouterLink to="TentangKami" class="hover:text-sec_blue">Tentang Kami</RouterLink>
          <Dropdown title="Produk" mainlink="Produk" :items="[
              {title: 'Produk', link: 'Produk'},
              {title: 'Tutor Privat', link: 'Produk'},
              {title: 'Akademi', link: 'Produk'},
              {title: 'Company Training', link: 'Produk'},
              {title: 'Jasa Aktuaria', link: 'Produk'}
            ]" class="">
          </Dropdown>
          <RouterLink to="Testimoni" class="hover:text-sec_blue">Testimoni</RouterLink>
          <RouterLink to="Karir" class="hover:text-sec_blue">Karir</RouterLink>
        </div>
        <div id="UserButton" class="flex space-x-4 pt-2 py-3">
          <div>
            <RouterLink to="/masuk"  class=" bg-main_blue border-black border-[1px] rounded-lg py-2 px-4">Masuk</RouterLink>
          </div>
          <div>
            <RouterLink to="/daftar" class=" bg-sec_blue rounded-lg py-2 px-4 ">Daftar</RouterLink>
          </div>
        </div>
      </nav>
  </header>
  
  <RouterView/>
</template>