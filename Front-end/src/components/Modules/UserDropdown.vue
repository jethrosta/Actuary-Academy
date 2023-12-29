<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref } from 'vue';
import Icon from './Icon.vue';
import router from '../../router';
import { useAuthStore } from '../../store';
import { notifCount, purchaseCount } from '@/db';

const menuItems = [
  { title: 'Akun', name: 'Akun', icon: 'account' },
  { title: 'Notifikasi', name: 'Notifikasi', icon: 'notif' },
  { title: 'Kelas Saya', name: 'Kelas Saya', icon: 'my-class' },
  { title: 'Keranjang', name: 'Keranjang Saya', icon: 'purchase' },
  { title: 'Pengaturan', name: 'Pengaturan', icon: 'settings' }
]

const props = defineProps({
  title: String,
  isOpen: Boolean
});

const isOpen = ref(props.isOpen)

const store = useAuthStore();

const handleLogout = async () => {
  try {
    await router.push({ name: 'dashboard' });
    await store.logout();
    router.go();
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const toggle = () => {
  if (isOpen.value) {
    isOpen.value = false;
    document.removeEventListener('click', close);
    return;
  }
  else {
    isOpen.value = true;
    document.addEventListener('click', close);
  }
};

const close = (e) => {
  if (e.target.closest('.menu-item')) return;
  isOpen.value = false;
  document.removeEventListener('click', close);
};

</script>
<template>
  <div class="menu-item font-inter p-1" @click="toggle">
    <div class="flex flex-row items-center">
      <div class="max-w-8 max-h-8 rounded-full bg-gray-300 ">
        <img src="/src/assets/Ellipse (1).png" class="max-h-8 max-w-8">
      </div>
      <svg class="h-2 w-7 " preserve-aspect-ratio="none" viewBox="0 0 12 9" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M 11 1 L 5.804 6.909 L 1 1" :stroke="isOpen ? '#0D1C9F' : 'white'" stroke-width="1.57025">
        </path>
      </svg>
    </div>

    <transition name="fade" appear>
      <div class="translate-y-2 font-medium" v-if="isOpen">
        <svg class="h-3 w-9 absolute -translate-y-1.5 right-0 text-white" viewBox="0 0 12 9" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14 6L7 1L1 6" stroke="currentColor" stroke-width="1.5"></path>
        </svg>

        <div class="sub-menu py-2 rounded-b-xl bg-white hover:text-sec_blue drop-shadow-lg absolute right-0 ">
          <RouterLink :to="{ name: `${item.name}` }" v-for="(item, i) in menuItems" :key="i">
            <div class="flex items-center menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap">
              <div class="mr-3">
                <Icon :name="item.icon" size="18" />
              </div>
              {{ item.title }}
              <div v-if="item.name === 'Notifikasi' && notifCount > 0" class="ml-1.5 w-4 h-4 align-text-top bg-red-600 text-white text-[.7rem] leading-4 text-center rounded-[50%]">
                {{ notifCount }}
              </div>
              <div v-if="item.name === 'Keranjang Saya' && purchaseCount > 0" class="ml-1.5 w-4 h-4 align-text-top bg-red-600 text-white text-[.7rem] leading-4 text-center rounded-[50%]">
                {{ purchaseCount }}
              </div>
            </div>
          </RouterLink>
          <div class="flex items-center menu-item py-1 px-4 text-gray-400 bg-white hover:text-sec_blue whitespace-nowrap" @click="handleLogout">
            <div class="mr-3">
              <Icon name="logout" size="18" />
            </div>
            Logout
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
