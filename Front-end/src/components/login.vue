<template>
   <body class=" w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png');">
        <div class=" container mx-auto ">
            <div class="flex w-auto rounded-xl mx-auto overflow-hidden">
                <div class="w-1/2 py-16 px-12 font-roboto text-white mr-10">
                    <h1 class="text-3xl font-semibold">Selamat datang kembali!</h1>
                    <p class="pt-0">Masukkan informasi Anda untuk melanjutkan</p>
                    <form action="#" class="pt-4">
                        <label class="block">
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="email" placeholder="Masukkan email Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi*</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="password" placeholder="Masukkan kata sandi Anda" />
                        </label>
                        <div>
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] mt-10">Masuk</button>
                        </div>
                    </form>
                </div>
                <div class="  w-1/2 py-16 px-12 ">
                    <div class="">
                        <img class=" bg-blend-overlay rounded-[37.9px] " src="../assets/Vector 4.jpg"/>
                    </div>
                    <div class="  ">
                        <p>Jadilah bagian Actuary Academy</p>
                        <h1>From Zero to Fellow</h1>
                    </div>
                    
                </div>
            </div>
            

            
        </div>
    </body>
</template>
