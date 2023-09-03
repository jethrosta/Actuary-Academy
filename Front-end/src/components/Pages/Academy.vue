<script setup>
import { Splide } from '@splidejs/vue-splide'
import { SplideSlide } from '@splidejs/vue-splide'
import Footer from '../Footer.vue';
import OtherProducts from '../OtherProducts.vue';

const splideOptions = {
    rewind: true,
    gap: '7rem',
    padding: '6rem',
    pagination: false,
    classes: {
        arrow : 'splide__arrow your-class-arrow !bg-white [&_svg]:!fill-main_blue !w-10 !h-10'
    }
}

const modules = [
    {
        code: 'A10',
        title: 'Matematika Keuangan'
    },
    {
        code: 'A20',
        title: 'Probabilita dan Statistika'
    },
    {
        code: 'A40',
        title: 'Akuntansi'
    }
]

const packages = [
    {
        price: 'IDR800,000',
        benefits: [
            'Benefit 1 lorem ipsum dolor sit amet',
            'Benefit 2 urna ut faucibus euismod',
            'Benefit 3 amet sodales vehicula',
            'Benefit 4 at in fermentum donec',
            'Benefit 5 donec ut sed lacus ac'
        ]
    },
    {
        price: 'IDR800,000',
        benefits: [
            'Benefit 1 lorem ipsum dolor sit amet',
            'Benefit 2 urna ut faucibus euismod',
            'Benefit 3 amet sodales vehicula',
            'Benefit 4 at in fermentum donec',
            'Benefit 5 donec ut sed lacus ac'
        ]
    },
    {
        price: 'IDR800,000',
        benefits: [
            'Benefit 1 lorem ipsum dolor sit amet',
            'Benefit 2 urna ut faucibus euismod',
            'Benefit 3 amet sodales vehicula',
            'Benefit 4 at in fermentum donec',
            'Benefit 5 donec ut sed lacus ac'
        ]
    }
]

</script>
<template>
    <main class="bg-academy bg-cover font-inter">
        <div class="flex flex-col pt-14 pb-20 px-36">
            <div class="w-full relative">
                <div class="absolute top-0 right-0 w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="absolute top-0 left-0 w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="absolute top-[6rem] right-[16rem] w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="absolute top-[6rem] left-[16rem] w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="absolute top-[12rem] right-0 w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="absolute top-[12rem] left-0 w-10 h-10 bg-neutral-300 rounded-[100%]"></div>
                <div class="mx-auto w-[29rem]">
                    <img src="src/assets/academy/image.png"/>
                </div>
            </div>
            <div class="bg-sec_blue px-10 py-8 rounded-2xl">
                <div class="text-3xl font-bold text-white flex items-center mb-3">
                    <div class="w-12 h-12 mr-4">
                        <svg viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5947 8.77906L13.8473 2.25275L2.09998 8.77906L6.01577 10.9545M25.5947 8.77906L21.6789 10.9545M25.5947 8.77906V8.77906C26.3947 9.17904 26.9 9.99665 26.9 10.891V17.9157M6.01577 10.9545L13.8473 15.3054L21.6789 10.9545M6.01577 10.9545V18.7861L13.8473 23.137L21.6789 18.7861L21.6789 10.9545" stroke="white" stroke-width="2.76" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>Akademi</div>
                </div>
                <div class="text-white">
                    Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi. Ini isinya deskripsi tentang akademi.
                </div>
            </div>
            <div class="mt-16">
                <div class="text-4xl text-white font-bold center">Modul</div>
                <div class="w-full max-w-[33rem] mx-auto mt-10">
                    <Splide :options="splideOptions">
                        <SplideSlide v-for="mdl in modules">
                            <div class="bg-sec_blue text-white text-4xl font-bold mx-[6.5rem] px-8 py-6 rounded-t-2xl text-center">
                                {{ mdl.code }}
                            </div>
                            <div class="bg-white text-sec_blue text-xl font-bold px-10 py-5 rounded-2xl text-center">
                                {{ mdl.title }}
                            </div> 
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div class="mt-16 mb-20">
                <div class="text-4xl text-white font-bold center">Package Price</div>
                <div class="flex items-stretch mt-10 space-x-9">
                    <div v-for="pkg, idx in packages" class="flex-1 flex flex-col">
                        <div :class="idx === 1 ? 'bg-sec_blue text-white' : 'text-sec_blue bg-white shadow-lg my-11'" class="rounded-2xl p-10 grow">
                            <div :class="idx === 1 ? 'text-4xl font-bold' : 'text-2xl'" class="font-bold">{{ pkg.price }}</div>
                            <div :class="idx === 1 ? 'bg-white' : 'bg-sec_blue'" class="bg-opacity-40 h-[1.5px] mt-4 mb-6"></div>
                            <div :class="idx === 1 ? 'text-[1.1rem]' : 'text-base'">
                                <div v-if="idx === 1" class="font-bold">Benefit:</div>
                                <div v-else>Benefit yang akan didapatkan:</div>
                                <ul class="list-disc list-inside">
                                    <li v-for="pkgBenefit in pkg.benefits">{{ pkgBenefit }}</li>
                                </ul>
                            </div>
                            <div class="inline-block rounded-lg bg-[#F26D0F] text-white font-semibold mt-5 px-3 py-2 cursor-pointer">
                                Berlangganan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherProducts exclude="academy" />
        </div>
    </main>
    <Footer></Footer>
</template>
<style>
    .bg-academy {
        background-image:
            url('data:image/svg+xml,<svg width="1440" height="670" viewBox="0 0 1440 670" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_45_627)"><rect width="1440" height="670" fill="white"/><path opacity="0.2" d="M316 819.804C316 819.804 795.69 579.495 1036 819.804C1276.31 1060.11 1756 819.804 1756 819.804V1986.1H316V819.804Z" fill="%230066CC"/><path opacity="0.2" d="M316 297.804C316 297.804 795.69 57.4946 1036 297.804C1276.31 538.114 1756 297.804 1756 297.804V1464.1H316V297.804Z" fill="%230066CC"/><path opacity="0.5" d="M2791 870.944C2791 870.944 2092.23 445.82 1610 870.944C1127.77 1296.07 429 870.944 429 870.944V2784H2791V870.944Z" fill="%230066CC"/><path opacity="0.5" d="M2791 348.944C2791 348.944 2092.23 -76.18 1610 348.944C1127.77 774.068 429 348.944 429 348.944V2262H2791V348.944Z" fill="%230066CC"/><path d="M-402 961.944C-402 961.944 296.775 536.82 779 961.944C1261.23 1387.07 1960 961.944 1960 961.944V5020.5H-402V961.944Z" fill="%230066CC"/><path d="M-402 439.944C-402 439.944 296.775 14.82 779 439.944C1261.23 865.068 1960 439.944 1960 439.944V4498.5H-402V439.944Z" fill="%230066CC"/></g><defs><clipPath id="clip0_45_627"><rect width="1440" height="670" fill="white"/></clipPath></defs></svg>'),
            url('data:image/svg+xml,<svg width="1440" height="710" viewBox="0 0 1440 710" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_46_881)"><path d="M2203.08 350.957C2203.08 350.957 1466.15 -15.6963 1022.08 350.957C578 717.61 -158.925 350.957 -158.925 350.957V2942.51H2203.08V350.957Z" fill="white"/><path opacity="0.2" d="M1600.12 437.028C1600.12 437.028 950 708.663 443.934 196.225C-62.1327 -316.214 -575.667 657.166 -575.667 657.166L-575.667 2642.67L1071.71 2974.14L1600.12 437.028Z" fill="white"/><path opacity="0.5" d="M-589.515 356.205C-589.515 356.205 123.706 72.2383 588.809 435.663C1053.91 799.087 1812.06 553.6 1812.06 553.6L1592.77 3072.67L-763.875 2913.75L-589.515 356.205Z" fill="white"/></g><defs><clipPath id="clip0_46_881"><rect width="1440" height="710" fill="white"/></clipPath></defs></svg>');
        background-color: rgb(0 102 204);
        background-size: 100% auto;
        background-position:
            top 0px left 0px,
            bottom 0px left 0px;
        background-repeat: no-repeat;
    }
</style>
