import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TentangKami',
      name: 'TentangKami',
      component: () => import('../views/TentangKami.vue')

    },
    {
      path: '/Produk',
      name: 'Produk',
      component: () => import('../views/Produk.vue')

    },
    {
      path: '/Testimoni',
      name: 'Testimoni',
      component: () => import('../views/Testimoni.vue')

    },
    {
      path: '/Karir',
      name: 'Karir',
      component: () => import('../views/Karir.vue')

    },
    {
      path: '/masuk',
      name: 'masuk',
      component: Masuk => import('../views/Masuk.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/Daftar.vue')
    },
    
    
  ]
})

export default router
