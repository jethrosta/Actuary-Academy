<template>
  <div class=" border-4 border-teal-700 bg-[FFFFFF] columns-2 p-16">
    <div class=" border-yellow-600 border-4">
      <div class=" text-6xl font-bold ">Ready to join?</div>
      <div class=" text-xl font-normal pt-4 pb-3">A bit of opening words to further encourage user to sign up</div>
      <div>
        <label class="block mr-2">
          <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="email@gmail.com" />
        </label>
      </div>
      <div class=" block pt-4 pl-28">
        <p class=" bg-[#0066CC] w-14 h-7 ml-12 rounded-md">
          <a class="ml-[11px] text-gray-200 font-inter">Text</a>
        </p>
      </div>
      <div class=" inline-flex pl-6">
        <hr class="w-36 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
        <p class=" pt-5 pl-3 pr-3">or</p>
        <hr class="w-36 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
      </div>
      <div class=" inline-flex">
        <div>Google</div>
        <div>Facebook</div>
      </div>
      
    </div>
    <section class=" border-4 border-green-300 w-full h-60">
      <div class=" ">
      <p class=" text-4xl font-medium text-amber-500"> decoration</p>
    </div>
    </section>
    
  </div>
  
</template>


<script>
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