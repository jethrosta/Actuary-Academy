<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  exclude: String
});

const productList = [
    {
        id: 'private-tutor',
        name: 'Tutor Privat',
        url: '/private-tutor',
        img: 'data:image/svg+xml,<svg viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 10.0739V26.6073M16.5 10.0739L18.888 8.88005C20.0357 8.30626 21.3012 8.00753 22.5844 8.00749L26.1441 8.0074C27.666 8.00736 28.8997 9.24105 28.8997 10.7629V21.7848C28.8997 23.3066 27.666 24.5403 26.1442 24.5403H22.5849C21.3014 24.5403 20.0355 24.8392 18.8876 25.4133L16.5 26.6073M16.5 10.0739L14.1119 8.88013C12.9642 8.30636 11.6987 8.00765 10.4155 8.00765H6.85572C5.3339 8.00765 4.10022 9.24133 4.10022 10.7632V21.7851C4.10022 23.307 5.3339 24.5406 6.85572 24.5406H10.4153C11.6986 24.5406 12.9643 24.8394 14.1121 25.4133L16.5 26.6073" stroke="%23F2F2F2" stroke-width="2.7555" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        id: 'academy',
        name: 'Akademi',
        url: '/academy',
        img: 'data:image/svg+xml,<svg viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5947 8.77906L13.8473 2.25275L2.09998 8.77906L6.01577 10.9545M25.5947 8.77906L21.6789 10.9545M25.5947 8.77906V8.77906C26.3947 9.17904 26.9 9.99665 26.9 10.891V17.9157M6.01577 10.9545L13.8473 15.3054L21.6789 10.9545M6.01577 10.9545V18.7861L13.8473 23.137L21.6789 18.7861L21.6789 10.9545" stroke="white" stroke-width="2.76" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        id: 'company-training',
        name: 'Company Training',
        url: '/company-training',
        img: 'data:image/svg+xml,<svg viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.475 7.50739H4.97498C3.45619 7.50739 2.22498 8.7386 2.22498 10.2574V22.6324C2.22498 24.1512 3.45619 25.3824 4.97498 25.3824H24.225C25.7438 25.3824 26.975 24.1512 26.975 22.6324V10.2574C26.975 8.7386 25.7438 7.50739 24.225 7.50739H18.725M10.475 7.50739V4.75739C10.475 3.2386 11.7062 2.00739 13.225 2.00739H15.975C17.4938 2.00739 18.725 3.2386 18.725 4.75739V7.50739M10.475 7.50739H18.725" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
        id: 'actuarial-services',
        name: 'Jasa Aktuaria',
        url: '/actuarial-services',
        img: 'data:image/svg+xml,<svg viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53802 2.17804H27.6619" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.53802 18.5001H27.6619" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.4929 2.17834H3.71921V18.5114H25.4929V2.17834Z" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5998 19.5904V27.2118" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.2497 27.2116V26.1212L14.5999 22.8614" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.95 27.2116V26.1212L14.5998 22.8614" stroke="white" stroke-width="2.75112" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
]

</script>
<template>
    <div class="flex justify-between">
        <div class="text-main_blue text-4xl font-semibold">Produk Lainnya</div>
        <div class="flex space-x-4">
            <RouterLink
                v-for="product in productList.filter((p) => p.id !== exclude)"
                :key="product.id"
                :to="product.url"
                class="flex items-center bg-main_blue text-white font-semibold px-4 py-2 rounded-xl cursor-pointer"
            >
                <div class="inline-block w-4 h-4 mr-3">
                    <img :src="product.img">
                </div>
                <div>{{ product.name }}</div>
            </RouterLink>
        </div>
    </div>
</template>
