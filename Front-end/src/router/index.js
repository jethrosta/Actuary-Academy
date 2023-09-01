import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
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
      path: '/user',
      name: 'user',
      component: () => import('../components/Layouts/AuthUser.vue'),
      children: [
        {
          path: "about",
          name: 'Tentang Kami',
          component: () => import('../components/Pages/About.vue')

        },
        {
          path: 'products',
          name: 'Produk',
          component: () => import('../components/Pages/Product.vue')

        },
        {
          path: 'testimonies',
          name: 'Testimoni',
          component: () => import('../components/Pages/Testimone.vue')

        },
        {
          path: 'career',
          name: 'Karir',
          component: () => import('../components/Pages/Career.vue')

        },
        {
          path: 'materials',
          name: 'Materi',
          component: () => import('../components/Pages/Materi.vue')
        },
        {
          path: '',
          name: 'Landingpage',
          component: () => import('../components/Pages/landingPage.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/Layouts/dashboard.vue'),
      children: [
        {
          path: "about",
          name: 'Tentang Kami',
          component: () => import('../components/Pages/About.vue')
        },
        {
          path: 'products',
          name: 'Produk',
          component: () => import('../components/Pages/Product.vue')
        },
        {
          path: 'testimonies',
          name: 'Testimoni',
          component: () => import('../components/Pages/Testimone.vue')
        },
        {
          path: 'career',
          name: 'Karir',
          component: () => import('../components/Pages/Career.vue')
        },
        {
          path: 'private-tutor',
          name: 'Tutor Privat',
          component: () => import('../components/Pages/PrivateTutor.vue')
        },
        {
          path: 'company-training',
          name: 'Company Training',
          component: () => import('../components/Pages/CompanyTraining.vue')
        },
        {
          path: 'materials',
          name: 'Materi',
          component: () => import('../components/Pages/Materi.vue')
        },
        {
          path: '',
          name: 'Landingpage',
          component: () => import('../components/Pages/landingPage.vue')
        },
        {
          path: 'profile',
          name: 'profil',
          component: () => import('../components/Pages/Profil.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = [
    '/masuk',
    '/daftar',
    '/testimonies',
    '/about',
    '/products',
    '/career',
    '/private-tutor',
    '/company-training',
    '/profile',
    '/materials',
    '/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/masuk')
  }
  else {
    next()
  }
})

export default router
