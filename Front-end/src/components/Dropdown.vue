<template>
  <div class="menu-item" @mouseover="openDropdown" @mouseleave="closeDropdown">
    <RouterLink :to="mainlink">{{ title }}</RouterLink>
    <svg class="h-2 w-7 inline-block " preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke=" isOpen ? '#0D1C9F' : 'white' " stroke-width="1.57025"></path>
    </svg>

    <transition name="fade" appear>
      <div class="relative translate-y-2" v-if="isOpen">
        <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
        </svg>

        <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 " >
          <RouterLink :to="item.link" v-for="(item, i) in items" :key="i" >
            <div class="menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
              {{ item.title }}
            </div>
          </RouterLink>
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  mainlink: String,
  items: Array,
});

const isOpen = ref(false);

const openDropdown = () => {
  isOpen.value = true;
};

const closeDropdown = () => {
  isOpen.value = false;
};


</script>
