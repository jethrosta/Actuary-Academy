<template>
  <div class="menu-item bg-cover font-inter">
    <div class=" font-medium">
      <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
      </svg>
      <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 ">
        <RouterLink :to="{ name: `${item.name}` }" v-for="(item, i) in items" :key="i">
          <div class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
            {{ item.title }}
          </div>
        </RouterLink>
        <div class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
          <button class="w-full text-left" @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, onMounted, onBeforeUnmount } from 'vue';
import router from '../../router';
import { useStore } from '../../store/index.js';

const props = defineProps({
  title: String,
  items: Array
});

const store = useStore();

const handleLogout = async () => {
  try {
    await router.push({ name: 'dashboard' });
    await store.logout();
    router.go();
  } catch (error) {
    console.error('Logout failed:', error);
  }
};





</script>
