<template>
  <div class="bg-[#0066CC] pb-[10px] mt-4">
    <div class=" h-16 columns-2 flex  pl-80 space-x-48">
    <div class="  inline-flex b ml-4">
        <img src="../assets/AAlogo.png" class=" h-20 w-h-20 m-auto" />
        <div class="  text-2xl font-inter text-white flex"><span class=" m-auto">Actuary Academy</span> </div>
    </div>
    <div class=" flex  space-x-16 font-i~ter text-white">
        <button>About</button>
        <button>Product</button>
        <button>Features</button>
    </div>
    </div>
    <div class=" h-8  inline-flex min-w-full">
      <div class="mx-auto inline-flex">
        <hr class="w-96 h-[2px] my-3 bg-gray-200 border-0 rounded dark:bg-white">
        <p class=" pl-3 pr-3 text-white">Contact Us</p>
        <hr class="w-96 h-[2px] my-3 bg-gray-200 border-0 rounded dark:bg-white">
      </div>
    </div>
    <div class=" text-center space-x-8 pl-24">
      <div class="inline-flex  space-x-3">
        <img src="../assets/WhatsApp.svg.png " class="w-[32px]">
        <a class=" pt-1 text-white">+62 812 1756 4720</a>
      </div>
      <div class=" inline-flex  space-x-3">
        <img src="../assets/Instagram_logo_2016.svg.png" class="w-[32px]">
        <a class=" pt-[2px] text-white">actuary_academy</a>
      </div>
      <div class="  inline-flex space-x-3">
        <img src="../assets/Gmail_icon_(2020).svg.png" class="w-[40px]">
        <a class=" text-white">actuaryacademy1st@gmail.com</a>
      </div>
    </div>
  </div>
  
</template>


<script>
export default {
  name: 'ForFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>