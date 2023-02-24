<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="xl sticky top-0">

    <div class="bg-[#0066CC] drop-shadow-md ">
      <div >
        <header class=" drop-shadow-md">
          <div id="icon&bahasa" class="flex justify-center items-center ">
              <div>
                <img src="../src/assets/icon/AAlogo.png" class=" w-14 m-auto" />
                <figcaption class="text-[#FFFFFF] text-2xl -mt-4 -mb-6">Actuary Academy</figcaption>
              </div>
          </div>
          <img src="../src/assets/Vector 23.svg"/>
        </header>
      </div>
      <nav class=" justify-between columns-3 text-right font-inter py-8 pt-2 text-[#FFFF] font-bold">
          <div class="pl-20 -mt-2 -mr-20">
            <label class="relative block">
              <input class=" placeholder:font-thin placeholder:font-inter placeholder:normal-case placeholder:text-slate-400 block bg-[#0D1C9F] w-1/2 border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cari di Aktuary Academy" type="text" name="search"/>
              <span class=" bg-white absolute inset-y-0 right-[52%] flex items-center pl-3 pr-4 -mr-3 rounded-[0_6px_6px_0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke-width="1.5" stroke="black" class="w-3 h-3 fill-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
            </label>
          </div>

        <div class="">
          <RouterLink to="/TentangKami" class="  px-4  hover:bg-blue-500 rounded-md py-[10px] ">Tentang Kami</RouterLink>
          <RouterLink to="/Produk" class=" px-4  hover:bg-blue-500 rounded-md py-[10px] ">Produk</RouterLink>
          <RouterLink to="/Testimoni" class=" px-4  hover:bg-blue-500 rounded-md py-[10px] ">Testimoni</RouterLink>
          <RouterLink to="/Karir" class=" px-4   hover:bg-blue-500 rounded-md py-[10px] ">Karir</RouterLink>
        </div>
        
        <div class=" justify-end items-end mx-0 ">
          <RouterLink to="/Masuk" class=" px-2 py-2 hover:bg-blue-500 rounded-md border-stone-900 border-2 ">Masuk</RouterLink>
          <RouterLink to="/daftar" class=" px-2 py-2 hover:bg-blue-500 bg-[#0D1C9F] rounded-md py-[10px] px-[12px] mx-8 mr-16">Daftar</RouterLink>
        </div>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');
</style>
