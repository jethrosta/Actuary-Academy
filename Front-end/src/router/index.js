import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component:() => import('../views/LandingPage.vue')
    },
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
    {
      path: '/Materi',
      name: 'Materi',
      component: () => import('../views/Materi.vue')
    },
    
    
  ]
})

export default router
/*Sebuah Navigatian Guard sebelum masuk ke fitur2 utama
terdapat 3 parameter*/

// const isAuthenticated = true;

// router.beforeEach((to, from, next) => {
//   if(to.name !== 'masuk' && !isAuthenticated) next({name : "masuk"});
//   if(to.name === 'masuk' && isAuthenticated) next({name : "TentangKami"});
//   else next();
// });
