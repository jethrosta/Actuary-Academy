import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'masuk',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/register',
      name: 'daftar',
      component: () => import('@/pages/Register.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/components/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'Landingpage',
          component: () => import('@/pages/LandingPage.vue')
        },
        {
          path: "/about",
          name: 'Tentang Kami',
          component: () => import('@/pages/About.vue')
        },
        {
          path: '/testimonies',
          name: 'Testimoni',
          component: () => import('@/pages/Testimonies.vue')
        },
        {
          path: '/testimonies/profile',
          name: 'testimony-profile',
          component: () => import('@/pages/TestimonyProfile.vue')
        },
        {
          path: '/career',
          name: 'Karir',
          component: () => import('@/pages/Career.vue')
        },
        {
          path: '/products',
          name: 'Produk',
          component: () => import('@/pages/Products.vue')
        },
        {
          path: '/private-tutor',
          name: 'Tutor Privat',
          component: () => import('@/pages/PrivateTutor.vue')
        },
        {
          path: '/private-tutor/tutors',
          name: 'Tutors',
          component: () => import('@/pages/Tutors.vue')
        },
        {
          path: '/academy',
          name: 'Akademi',
          component: () => import('@/pages/Academy.vue')
        },
        {
          path: '/company-training',
          name: 'Company Training',
          component: () => import('@/pages/CompanyTraining.vue')
        },
        {
          path: '/actuarial-services',
          name: 'Jasa Aktuaria',
          component: () => import('@/pages/ActuarialServices.vue')
        },
        {
          path: '/modules',
          redirect: '/academy'
        },
        {
          path: '/modules/:moduleId',
          name: 'module',
          meta: { requiresAuth: true },
          component: () => import('@/pages/Module.vue')
        },
        {
          path: '/modules/:moduleId/material/:videoId?',
          name: 'module-material',
          meta: { requiresAuth: true },
          component: () => import('@/pages/ModuleMaterial.vue')
        },
        {
          path: '/modules/:moduleId/tryout',
          name: 'module-tryout',
          meta: { requiresAuth: true },
          component: () => import('@/pages/ModuleTryout.vue')
        },
        {
          path: '/modules/:moduleId/discussion/:videoId?',
          name: 'module-discussion',
          meta: { requiresAuth: true },
          component: () => import('@/pages/ModuleDiscussion.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/components/UserPageLayout.vue'),
          redirect: { name: 'Akun' },
          meta: { requiresAuth: true },
          children: [
            {
              path: 'account',
              name: 'Akun',
              component: () => import('@/pages/user/Account.vue')
            },
            {
              path: 'notification',
              name: 'Notifikasi',
              component: () => import('@/pages/user/Notification.vue')
            },
            {
              path: 'my-class',
              name: 'Kelas Saya',
              component: () => import('@/pages/user/MyClass.vue')
            },
            {
              path: 'my-cart',
              name: 'Keranjang Saya',
              component: () => import('@/pages/user/MyCart.vue'),
            },
            {
              path: 'settings',
              name: 'Pengaturan',
              component: () => import('@/pages/user/Settings.vue')
            },
            {
              path: 'payment-history',
              name: 'Riwayat Pembayaran',
              component: () => import('@/pages/user/PaymentHistory.vue')
            },
          ]
        },
        {
          path: '/payments',
          name: 'Pembayaran',
          redirect: { name: 'Pembayaran Tertunda' },
          meta: { requiresAuth: true },
          children: [
            {
              path: 'create/:items*',
              name: 'Buat Pembayaran',
              component: () => import('@/components/Payments/Create.vue'),
              props: true,
            },
            {
              path: 'pending-payment',
              name: 'Pembayaran Tertunda',
              component: () => import('@/components/Payments/Pending.vue'),
            },
            {
              path: 'view/:id',
              name: 'Detail Pembayaran',
              component: () => import('@/components/Payments/ViewById.vue'),
              props: true,
            },
          ]
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  let isCookiePresent = false;
  let res;
  try {
    res = await axios.get(import.meta.env.VITE_API_URL + 'users/me', {
      withCredentials: true
    })
    if (res.status == '204') {
      isCookiePresent = false;
    } else {
      isCookiePresent = true;
    }
  } catch (error) {
    isCookiePresent = false
  }

  const authRequired = to.meta?.requiresAuth
  const loggedIn = localStorage.getItem('user')

  if (!loggedIn && isCookiePresent) {
    localStorage.setItem('user', JSON.stringify(res.data))
    next()
  }
  else if (authRequired && !loggedIn || (loggedIn && !isCookiePresent)) {
    localStorage.removeItem('user')
    next('/login')
  }
  else {
    next()
  }
})

export default router
