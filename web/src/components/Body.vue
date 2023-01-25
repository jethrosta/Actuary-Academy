<template>
  <div class=" bg-[FFFFFF] columns-2 p-7">
    <div class="  h-[500px] w-auto p-14 pl-20">
      <div class=" text-6xl font-bold">Ready to join?</div>
      <div class="  text-xl font-normal pt-4 pb-3 w-3/4">A bit of opening words to further encourage user to sign up.</div>
      <div >
        <label>
          <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 h-12 rounded-md sm:text-sm focus:ring-1" placeholder="email@gmail.com" />
        </label>
      </div>
      <div class=" block pt-4 pl-28">
        <p class=" bg-[#0066CC] w-14 h-7 ml-16 rounded-md">
          <a class="ml-[10px] text-gray-200 font-inter">Text</a>
        </p>
      </div>
      <div class=" inline-flex ml-[35px]">
        <hr class="w-36 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
        <p class=" pt-5 pl-3 pr-3">or</p>
        <hr class="w-36 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
      </div>
      <div class=" w-fit flex flex-row space-x-9">
          <button class=" rounded-md px-5 py-1 ml-8 w-[148px] h-8 bg-[#1E1E1E]  font-inter text-[#E1E1E1] flex flex-row font-medium "> <img src="../assets/Google__G__Logo.svg" class="mx-2" >Google</button>
          <button class=" rounded-md px-3 py-1 bg-[#1E1E1E] w-[149px] font-inter text-[#E1E1E1] flex flex-row font-medium"><img src="../assets/640px-Facebook_circle_pictogram.svg.png" class="w-6 h-6 mx-2">Facebook</button>    
      </div>
    </div>
    <div class=" px-32 py-48 bg-[#D9D9D9] w-full h-[500px] rounded-md">
      <p class=" font-normal text-black text-6xl"> Space for decor</p>
    </div>
    
    
  </div>
  
</template>


<script >
export default {
  name: 'ForBody',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>