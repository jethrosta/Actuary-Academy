<script >
import {Splide} from '@splidejs/vue-splide'
import {SplideSlide} from '@splidejs/vue-splide'
import { defineComponent } from 'vue'
import Footer from '../Footer.vue'
export default defineComponent({
    
    components:{
        Splide,
        SplideSlide,
        Footer,
    },

    setup(){
        const options = {
            rewind: true,
            gap: '5rem',
            padding: '4rem',
        };
        return {options};
    },
})

</script>
<template>
    <main class="oke bg-[url('../assets/LandingPageBG.jpg')] h-[100%] w-[100%] bg-no-repeat -mt-24">
        <div class=" pt-60 ">
            <section id="greet">
                <div class=" center">
                    <img src="src/assets/Group 263.png"/>
                </div>
                <div class=" center">
                    <p class=" text-white text-7xl font-inter font-bold">From Zero to Fellow</p>
                </div>
                <div class=" center mt-5">
                    <p class=" text-xl text-white font-inter font-bold">A head start to your Indonesian Actuarial profession certification</p>
                </div>
                <div class=" center mt-10">
                    <div class=" bg-[#F26D0F] px-6 py-3 mb-10 rounded-md shadow-2xl">
                        <p class=" text-white text-2xl font-bold ">REGISTER NOW</p>
                    </div>
                </div>
                <div class=" center">
                    <hr class=" bg-white w-[50%] h-[1%]">  
                </div>
            </section>
            <section id="Product">
                <div class=" text-white font-inter font-bold center mt-10 text-5xl">
                    Produk Kami
                </div>
                <div class=" w-full px-40 flex flex-wrap justify-center  text-white font-inter mt-10">
                    <div class=" mb-6 px-3 md:w-1/2 ">
                        <div class="bg-sec_blue w-full h-full p-12 rounded-[20px]">
                            <div class=" float-left flex flex-wrap w-1/3 justify-center mr-8">
                                <img class=" mx-auto mb-11" src="src/assets/Iconbook.png"/>
                                <h3 class=" text-2xl text font-bold font-inter" >Tutor Privat</h3>
                            </div>
                            <p class=" pb-8 text-justify">Actuary Academy menyediakan Tutor Privat untuk mata kuliah aktuaria dan mata ujian PAI.</p>
                            <button class=" detail">Lihat Detail</button>
                        </div>
                    </div> 
                    <div class=" mb-6 px-3 md:w-1/2 ">
                        <div class="bg-sec_blue w-full h-full p-12 rounded-[20px]">
                            <div class=" float-left flex flex-wrap w-1/3 justify-center mr-8">
                                <img class=" mx-auto mb-8" src="src/assets/IconToga.png"/>
                                <h3 class=" text-2xl text font-bold font-inter pb-10" >Akademi</h3>
                            </div>
                            <p class=" pb-8 text-justify">Actuary Academy menyediakan video pembelajaran, pembahasan soal, dan pelaksanaan try out.</p>
                            <button class=" detail">Lihat Detail</button>
                        </div>
                    </div> 
                    <div class=" mb-6 px-3 md:w-1/2 ">
                        <div class="bg-sec_blue w-full h-full p-12 rounded-[20px]">
                            <div class=" float-left flex flex-wrap w-1/3 justify-center mr-8">
                                <img class=" mx-auto mb-5 w-20" src="src/assets/Iconsuitcase.png"/>
                                <h3 class=" text-2xl text font-bold font-inter w-4/5 text-center pb-10" >Company Training</h3>
                            </div>
                            <p class=" pb-8 text-justify">Actuary Academy menyediakan Tutor Privat pembelajaran mata ujian PAI untuk perusahaan.</p>
                            <button class=" detail">Lihat Detail</button>
                        </div>
                    </div> 
                    <div class=" mb-6 px-3 md:w-1/2 ">
                        <div class="bg-sec_blue w-full h-full p-12 rounded-[20px]">
                            <div class=" float-left flex flex-wrap w-1/3 justify-center mr-8">
                                <img class=" mx-auto mb-5 w-20" src="src/assets/Presentation.png"/>
                                <h3 class=" text-2xl text font-bold font-inter w-4/5 text-center pb-10" >Jasa Aktuaria</h3>
                            </div>
                            <p class=" pb-8 text-justify">Actuary Academy menyediakan jasa yang membantu proyek-proyek seputar aktuaria.</p>
                            <button class=" detail">Lihat Detail</button>
                        </div>
                    </div> 
                </div>
            </section>
            <section id="testimoni">
                <div class=" center mt-20">
                    <h1 class=" text-white text-6xl text-center font-inter font-bold font-white px-8">Alumni Kami Tersebar<br> di Berbagai Perusahan dan Universitas</h1>
                </div>
                <div class=" center -my-40">
                    <img src="src/assets/Alumni.png"/>
                </div>
                <!-- Tesimoni horizontal slider -->
                <div class=" center text-5xl text-white text-inter font-bold my-10 -mt-10">
                    <h1>Testimoni</h1>
                </div>
                <!-- Slider container to add dot nav -->
                <div>
                    <!-- Slider container for nav buttons -->
                    <div class=" w-2/3 mx-auto">
                            <div class="center ">
                                <!-- Testimone container -->
                                <Splide :options=" options">
                                    <SplideSlide >
                                        <div class=" shadow-xl bg-sec_blue h-fit w-fit p-10 rounded-3xl text-white font-inter">
                                            <p class=" text-2xl">
                                            "Sebuah testimoni yang menggambarkan apa yang dipikirkan orang tersebut tentang layanan, produk, atau startup ini secara umum. Sebuah testimoni yang menggambarkan pendapat orang.”
                                            </p>
                                            <p class=" my-5 underline underline-offset-4 font-bold text-slate-400 mb-10">
                                                Baca selengkapnya
                                            </p>
                                            <img src="src/assets/Iqbal.jpg" class=" float-left mr-10 h-28 w-28 object-cover object-top rounded-full"/>
                                            <div class=" flex mt-6 ml-5 space-x-6  ">
                                                <div class=" flex space-x-2 mt-5">
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                </div> 
                                            </div>
                                            <div class=" mt-2 font-inter font-bold text-xl">
                                                <p>Iqbal Andriansyah</p>
                                            </div>
                                            <div>
                                                <p class=" text-zinc-400">Mahasiswa Ilmu Aktuaria - Universitas Ujung Negeri</p>
                                            </div>
                                        </div> 
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class=" shadow-xl bg-sec_blue h-fit w-fit p-10 rounded-3xl text-white font-inter">
                                            <p class=" text-2xl">
                                            "Sebuah testimoni yang menggambarkan apa yang dipikirkan orang tersebut tentang layanan, produk, atau startup ini secara umum. Sebuah testimoni yang menggambarkan pendapat orang.”
                                            </p>
                                            <p class=" my-5 underline underline-offset-4 font-bold text-slate-400 mb-10">
                                                Baca selengkapnya
                                            </p>
                                            <img src="src/assets/Diki.jpg" class=" float-left mr-10 h-28 w-28 object-cover object-top rounded-full"/>
                                            <div class=" flex mt-6 ml-5 space-x-6  ">
                                                <div class=" flex space-x-2 mt-5">
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                    <svg class=" h-7 justify-self-center-center " version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#FBBC05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M510.698,196.593c-3.61-11.2-14.034-18.795-25.794-18.795H329.21L281.791,30.155 c-3.599-11.2-14.018-18.808-25.791-18.808c-11.772,0-22.192,7.608-25.791,18.808l-47.418,147.642H27.097 c-11.761,0-22.185,7.594-25.795,18.795c-3.599,11.2,0.436,23.449,9.999,30.302l126.246,90.643l-48.598,147.54 c-3.694,11.193,0.278,23.47,9.801,30.398c9.529,6.926,22.44,6.897,31.94-0.058L256,403.594l125.312,91.824 c9.5,6.956,22.411,6.985,31.941,0.058c9.522-6.927,13.494-19.205,9.811-30.398l-48.61-147.54L500.7,226.895 C510.262,220.042,514.298,207.792,510.698,196.593z"></path> </g> </g></svg>
                                                </div> 
                                            </div>
                                            <div class=" mt-2 font-inter font-bold text-xl">
                                                <p>Diki Prasetya</p>
                                            </div>
                                            <div>
                                                <p class=" text-zinc-400">Manajer Perusahaan Manajemen Aset</p>
                                            </div>
                                        </div> 
                                    </SplideSlide>
                                </Splide>   
                            </div>
                </div>
                </div>
                <div class=" mt-40 flex justify-center">
                    <h2 class=" text-white font-inter font-bold text-3xl">Testimoni Lainnya</h2>
                </div>
                <div class=" mx-32 pt-20 mb-40 ">
                    <div  class=" float-left mr-10">
                           <img src="src/assets/testimoni2.png"/>
                    </div>
                    <div class=" pt-20">
                        <p class=" mb-1 text-5xl font-inter font-bold text-[#0066CC]"> Daftar Menjadi Tutor!</p>
                        <p class=" text-justify text-2xl font-inter text-main_blue mb-8 ">Mari bergabung dan berkontribusi bersama Actuary Academy untuk melahirkan calon Aktuaris hebat di seluruh Indonesia dan dunia. </p>
                        <button class=" bg-main_blue text-white font-inter font-bold text-2xl rounded-lg p-4 shadow-xl">Detail Karir Lebih Lanjut</button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    </main>
</template>

