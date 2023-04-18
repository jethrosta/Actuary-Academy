<script>
import landingPage from '../Pages/landingPage.vue';
import Testimone from '../Pages/Testimone.vue';
export default{
    components:{
        landingPage,
        Testimone,
    }
}
</script>
<template>
    <header class=" bg-main_blue top-0 sticky shadow-xl z-30 px-2">
      <div class=" flex justify-center">
        <img src="/src/assets/icon/AAlogo.png" class=" -mb-10 w-20"/>
      </div>
      <div class="">
        <img src="/src/assets/Vector 23.svg" class=" w-screen"/>
      </div>
      <!-- Navbar -->
      <nav class=" flex items-center justify-between text-white font-inter font-bold mx-auto px-10 xl:px-20 h-10 pb-4">
        <!-- Search Bar -->
        <div class=" ">
          <div class=" relative ">
            <input
              class=" text-black block w-full pl-2 py-2 pr-10 leading-tight bg-[#0D1C9F] opacity-[0.4] border border-gray-400 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500  "
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
        <!-- Button Navigation -->
        <div id="navbar" class=" space-x-20 pl-[10%] flex">
          <div>
              <RouterLink to="user/TentangKami" class=" ">Tentang Kami</RouterLink>
          </div>
          <div class=" flex">
              <RouterLink to="user/Produk" class=" ">Produk</RouterLink>
              <select class=" bg-transparent"></select>
          </div>
          <div>
              <RouterLink to="user/Testimoni" class="">Testimoni</RouterLink>
          </div>
          <div class=" flex">
              <RouterLink to="user/Karir" class="">Karir</RouterLink>
              <select class=" bg-transparent"></select>
          </div>
        </div>
        <div id="User Authenticated" class=" flex items-center space-x-6">
          <div>
            <p>Hello, Barbara!</p>
          </div>
          <div class=" flex">
            <div class=" h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
            <select class=" bg-transparent"></select>
          </div>
        </div>
      </nav>
  </header>
  <landingPage></landingPage>
</template>