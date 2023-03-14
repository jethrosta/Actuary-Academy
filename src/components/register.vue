<template>
    <body class=" w-auto h-screen bg-[#0066CC]" style="background-image: url('src/assets/Background.png');">
        <div class=" container mx-auto ">
            <div class="flex w-auto rounded-xl mx-auto overflow-hidden">
                <div class="w-1/2 py-16 px-12 font-roboto text-white mr-10">
                    <h1 class="text-3xl font-semibold">Siap untuk bergabung?</h1>
                    <p class="pt-0">Silahkan masukkan identitas Anda</p>
                    <form action="#" class="pt-4">
                        <label class="block">
                            <span class=" my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Nama</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="text" placeholder="Masukkan nama Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Email</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="email" placeholder="Masukkan email Anda" />
                            <span class=" mt-3 my-2 block font-inter  after:content-['*'] after:ml-0.5 after:text-white text-sm font-medium text-white">Kata Sandi*</span>
                            <input class=" text-black pl-8 shadow-2xl rounded-md w-[585px] h-[62px]" type="password" placeholder="Masukkan kata sandi Anda" />
                        </label>
                        <div class="mt-5">
                            <input type="checkbox" class="border-gray-400">
                            <span class="text-zinc-400 ml-4">Saya menyetujui Ketentuan & Kebijakan Privasi</span>
                        </div>
                        <div>
                            <button class="bg-[#0D1C9F] text-white w-[585px] h-[59px] rounded-[10px] mt-10">Daftar</button>
                        </div>
                    </form>
                </div>
                <div class="  w-1/2 py-16 px-12 ">
                    <div class="">
                        <img class=" bg-blend-overlay rounded-[37.9px] " src="../assets/Vector 3.jpg"/>
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

