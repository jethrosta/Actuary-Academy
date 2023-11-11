<script setup>
import {RouterView} from 'vue-router'
import Loading from './components/Modules/Loading.vue';
import { useStore } from '../src/store/index.js'
import { computed } from 'vue';

const store = useStore();

const loading = computed(() => store.isLoading)

</script>

<template>
  <Loading v-if="loading" class="fixed z-50"/>
  <RouterView/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');
</style>
