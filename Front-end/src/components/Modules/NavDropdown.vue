<template>
  <div class="menu-item scrollbar-none" @mouseover="openDropdown" @mouseleave="closeDropdown">
    <div class="cursor-pointer">
      <RouterLink v-if="mainLink" :to="{ name:`${mainLink}` }" class="pr-2">{{ title }}</RouterLink>
      <span v-else class="pr-2">{{ title }}</span>
      <svg class="h-2 w-3 inline-block" preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke=" isOpen ? '#0D1C9F' : 'white' " stroke-width="1.57025"></path>
      </svg>
    </div>

    <transition name="fade" appear>
      <div class="relative translate-y-3 font-medium" v-if="isOpen">
        <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
        </svg>

        <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 " >
          <RouterLink :to="{ name:`${item.name}`, params: item.params ?? null }" v-for="(item, i) in items" :key="i" >
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
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  mainLink: String,
  items: Array
});

const isOpen = ref(false);

const openDropdown = () => {
  isOpen.value = true;
};

const closeDropdown = () => {
  isOpen.value = false;
};


</script>
