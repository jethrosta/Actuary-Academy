import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'masuk',
      component: () => import('../components/Layouts/login.vue')
    },
    {
      path: '/register',
      name: 'daftar',
      component: () => import('../components/Layouts/register.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/Layouts/dashboard.vue'),
      children: [
        {
          path: '',
          name: 'Landingpage',
          component: () => import('../components/Pages/LandingPage.vue')
        },
        {
          path: "/about",
          name: 'Tentang Kami',
          component: () => import('../components/Pages/About.vue')
        },
        {
          path: '/testimonies',
          name: 'Testimoni',
          component: () => import('../components/Pages/Testimonies.vue')
        },
        {
          path: '/profile',
          name: 'profil',
          component: () => import('../components/Pages/Profile.vue')
        },
        {
          path: '/career',
          name: 'Karir',
          component: () => import('../components/Pages/Career.vue')
        },
        {
          path: '/products',
          name: 'Produk',
          component: () => import('../components/Pages/Products.vue')
        },
        {
          path: '/private-tutor',
          name: 'Tutor Privat',
          component: () => import('../components/Pages/PrivateTutor.vue')
        },
        {
          path: '/tutors',
          name: 'Tutors',
          component: () => import('../components/Pages/Tutors.vue')
        },
        {
          path: '/academy',
          name: 'Akademi',
          component: () => import('../components/Pages/Academy.vue')
        },
        {
          path: '/company-training',
          name: 'Company Training',
          component: () => import('../components/Pages/CompanyTraining.vue')
        },
        {
          path: '/actuarial-services',
          name: 'Jasa Aktuaria',
          component: () => import('../components/Pages/ActuarialServices.vue')
        },
        {
          path: '/A10',
          name: 'A10',
          component: () => import('../components/Pages/A10.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../components/UserPages/UserPage.vue'),
          redirect: { name: 'Akun' },
          children: [
            {
              path: 'account',
              name: 'Akun',
              component: () => import('../components/UserPages/Account.vue')
            },
            {
              path: 'notification',
              name: 'Notifikasi',
              component: () => import('../components/UserPages/Notification.vue')
            },
            {
              path: 'my-class',
              name: 'Kelas Saya',
              component: () => import('../components/UserPages/MyClass.vue')
            },
            {
              path: 'my-cart',
              name: 'Keranjang Saya',
              component: () => import('../components/UserPages/MyCart.vue')
            },
            {
              path: 'settings',
              name: 'Pengaturan',
              component: () => import('../components/UserPages/Settings.vue')
            },
          ]
        },
        {
          path: 'my-payment',
          name: 'Pembayaran Saya',
          component: () => import('../components/UserPages/MyPayment.vue')
        },
        {
          path: 'materials',
          name: 'Materi',
          component: () => import('../components/Pages/Materials.vue')
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = [
    '/',
    '/login',
    '/register',
    '/about',
    '/testimonies',
    '/profile',
    '/career',
    '/products',
    '/private-tutor',
    '/tutors',
    '/academy',
    '/company-training',
    '/actuarial-services'
  ]
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/login')
  }
  else {
    next()
  }
})

export default router
