<template>
  <!--Container Header-->
  <div class="bg-[#0066CC] columns-3 flex">
    <div class="  inline-flex">
        <img :src="logo" class=" h-28 w-28 m-auto" />
        <div class="  text-2xl font-inter text-white flex"><span class=" m-auto">Actuary Academy</span> </div>
    </div>
    <!--Navigation Bar-->
    <div class=" content-center mx-auto  font-inter font-bold text-white text-center flex flex-row">
      
        <button class=" mx-8">About</button>
      
      
        <button class=" mx-8">Products</button>
      
      
        <button class=" mx-8">Testimonies</button>
      
      
        <button class=" mx-8">Careers</button>
      
    </div>
    <!--User Login/Sig Up-->
    <div class=" mr-4 mt-10 font-inter font-semibold text-sm text-center">
      <div class="space-x-4">
        <button class="bg-white rounded-md py-2 px-4">Log In</button>
        <button class="bg-white rounded-md py-2 px-4">Sign Up</button>
      </div>
      <div  class=" pt-1 text-right flex flex-row-reverse font-normal text-white">
        <p class="">ID</p>
        <p class="mx-3">EN</p>
      </div>    
    </div>
  </div>
</template>


<script>
export default {
  name: 'ForHeader',
  data(){
    return{
      logo:require("../assets/AAlogo.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
</style>
