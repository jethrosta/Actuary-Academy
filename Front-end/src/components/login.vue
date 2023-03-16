<template>
   <body class=" w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png');">
        <div class=" container mx-auto flex">
            <div class=" w-auto rounded-xl mx-auto overflow-hidden">
                <div class=" mt-16 px-12 font-roboto text-white mr-10">
                    <h1 class="text-3xl font-semibold">Selamat datang kembali!</h1>
                    <p class="pt-0">Masukkan informasi Anda untuk melanjutkan</p>
                    <form action="#" class="pt-4">
                        <label class="block">
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="email" placeholder="Masukkan email Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="password" placeholder="Masukkan kata sandi Anda" />
                        </label>
                        <div>
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] mt-10">Masuk</button>
                        </div>
                        <div class=" center my-5">
                            <p class=" text-main_blue font-inter text-lg">atau daftar dengan</p>
                        </div>
                        <div class=" flex text-xl space-x-2">
                            <div class=" center regBut w-1/2 h-14 space-x-3">
                                <img src="../assets/icon/google-color-svgrepo-com.svg" class=" p-3"/>
                                <button class=" ">Google</button>
                            </div>
                            <div class="center regBut w-1/2 h-14 space-x-3">
                                <img src="../assets/icon/facebook-svgrepo-com.svg" class=" p-1"/>
                                <button class=" ">Facebook</button>
                            </div>
                        </div>
                        <div class=" center space-x-2 font-bold mt-5">
                            <p class=" text-main_blue">Sudah Memiliki akun?</p>
                            <p class=" text-sec_blue underline underline-offset-2 ">Masuk</p>
                        </div>
                    </form>
                </div>
            </div>            
            <div class=" mt-16 ">
                <img src="../assets/Vector 4.jpg" class=" rounded-[2.5rem] w-/4"/>
            </div>
        </div>
    </body>
</template>
