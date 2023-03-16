<template>
    <body class=" w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png');">
        <div class="  container mx-auto flex ">
            <div class=" mx-auto">
                <div class=" py-8 font-roboto text-white ">
                    <h1 class="text-3xl font-semibold">Siap untuk bergabung?</h1>
                    <p class="pt-0">Silahkan masukkan identitas Anda</p>
                    <form action="#" class="pt-4">
                        <label class="block">
                            <span class=" my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Nama</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="text" placeholder="Masukkan nama Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="email" placeholder="Masukkan email Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="password" placeholder="Masukkan kata sandi Anda" />
                        </label>
                        <div class="mt-5">
                            <input type="checkbox" class="border-gray-400">
                            <span class="text-zinc-400 ml-4">Saya menyetujui Ketentuan & Kebijakan Privasi</span>
                        </div>
                        <div class=" mt-5">
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] font-inter font-bold text-xl">Daftar</button>
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
            <div class=" mt-8">
                <div class=" h-[40rem] w-[30rem] relative  ">
                    <img src="../assets/Vector 3.jpg" class=" w-full h-full object-cover rounded-[2.5rem] absolute "/>
                    <div  class=" absolute bottom-20 mx-20 z-20 ">
                        <p class=" text-white font-inter text-xl">Jadilah bagian Actuary Academy</p>
                        <p class=" text-5xl font-bold text-white">From Zero to Fellow</p>
                    </div>
                    <div class=" bg-gradient-to-t from-main_blue to-transparent w-full h-full absolute z-10 rounded-[2.5rem]">

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

