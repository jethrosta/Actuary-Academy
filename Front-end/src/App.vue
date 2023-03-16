<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" bg-main_blue sticky top-0 shadow-xl z-30">
    <div class=" flex justify-center">
      <img src="../src/assets/icon/AAlogo.png" class=" w-20"/>
    </div>
    <div class=" -mt-10">
      <img src="../src/assets/Vector 23.svg" class=" w-screen"/>
    </div>
    <div class=" flex justify-between text-white font-inter font-bold px-20 h-10">
      <div class=" flex">
        <form>
          <input placeholder="Cari di Actuary Academy" type="search" class=" bg-[#0D1C9F] w-48 h-8 rounded-tl-md rounded-bl-md text-xs pl-2 text-white font-thin">
        </form>
        <div class=" bg-white h-8 rounded-tr-md rounded-br-md">
          <img src="../src/assets/icon/search.png" class=" py-1 px-1"/>
        </div>
      </div>
      <div id="navbar" class=" space-x-20 pl-[10%]  ">
        <RouterLink to="/TentangKami" class=" ">Tentang Kami</RouterLink>
        <RouterLink to="/Produk" class=" ">Produk</RouterLink>
        <RouterLink to="/Testimoni" class="">Testimoni</RouterLink>
        <RouterLink to="/Karir" class="">Karir</RouterLink>
      </div>
      <div id="UserButton" class=" flex space-x-6">
        <div>
          <RouterLink to="/Masuk"  class=" bg-main_blue border-black border-[1px] rounded-md py-[0.625rem] px-[1.25rem]">Masuk</RouterLink>
        </div>
        <div>
          <RouterLink to="/daftar" class=" bg-sec_blue rounded-md py-[0.625rem] px-[1.25rem] ">Daftar</RouterLink>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');
</style>
