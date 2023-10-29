<template>
    <div class="w-full flex text-3xl text-black font-inter font-bold">
        {{ route.params.providerName }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

</script>
