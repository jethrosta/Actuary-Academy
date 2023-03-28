import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/masuk',
      name: 'masuk',
      component: () => import('../components/Layouts/login.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../components/Layouts/register.vue')
    },
    {
      path:'/',
      name:'dashboard',
      component: () => import('../components/Layouts/dashboard.vue'),
      children:[
        {
          path: "tentangkami",
          name: 'TentangKami',
          component: () => import('../components/Pages/About.vue')
    
        },
        {
          path: 'Produk',
          name: 'Produk',
          component: () => import('../components/Pages/Product.vue')
    
        },
        {
          path: 'Testimoni',
          name: 'Testimoni',
          component: () => import('../components/Pages/Testimone.vue')
    
        },
        {
          path: 'Karir',
          name: 'Karir',
          component: () => import('../components/Pages/Career.vue')
    
        },
        {
          path: 'Materi',
          name: 'Materi',
          component: () => import('../components/Pages/material.vue')
        },
        {
          path:'',
          name:'Landingpage',
          component:() => import('../components/Pages/landingPage.vue')
        },
      ]
    }
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
