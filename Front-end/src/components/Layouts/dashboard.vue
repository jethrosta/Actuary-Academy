<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <header class=" bg-main_blue sticky top-0 shadow-xl z-30">
    <div class=" flex justify-center">
      <img src="/src/assets/icon/AAlogo.png" class=" -mb-10 w-20"/>
    </div>
    <div class="">
      <img src="/src/assets/Vector 23.svg" class=" w-screen"/>
    </div>
    <div class=" flex justify-between text-white font-inter font-bold px-20 h-10">
      <div class=" flex">
        <form>
          <input placeholder="Cari di Actuary Academy" type="search" class=" placeholder-shown:font-normal placeholder-shown:opacity-40 bg-[#0D1C9F] w-48 h-8 rounded-tl-md rounded-bl-md text-xs pl-2 font-bold text-white">
        </form>
        <div class=" bg-white h-8 rounded-tr-md rounded-br-md">
          <img src="/src/assets/icon/search.png" class=" py-1 px-1"/>
        </div>
      </div>
      <div id="navbar" class=" space-x-20 pl-[10%]  ">
        <RouterLink to="TentangKami" class=" ">Tentang Kami</RouterLink>
        <RouterLink to="Produk" class=" ">Produk</RouterLink>
        <RouterLink to="Testimoni" class="">Testimoni</RouterLink>
        <RouterLink to="Karir" class="">Karir</RouterLink>
      </div>
      <div id="UserButton" class=" flex space-x-6">
        <div>
          <RouterLink to="/masuk"  class=" bg-main_blue border-black border-[1px] rounded-md py-[0.625rem] px-[1.25rem]">Masuk</RouterLink>
        </div>
        <div>
          <RouterLink to="/daftar" class=" bg-sec_blue rounded-md py-[0.625rem] px-[1.25rem] ">Daftar</RouterLink>
        </div>
      </div>
    </div>
  </header>
  <RouterView/>
</template>