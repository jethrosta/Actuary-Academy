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
      component: () => import('../components/Layouts/Login.vue')
    },
    {
      path: '/register',
      name: 'daftar',
      component: () => import('../components/Layouts/Register.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/Layouts/Dashboard.vue'),
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
          path: '/testimonies/profile',
          name: 'testimony-profile',
          component: () => import('../components/Pages/TestimonyProfile.vue')
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
          path: '/modules',
          redirect: '/academy'
        },
        {
          path: '/modules/:moduleId',
          name: 'module',
          meta: { requiresAuth: true },
          component: () => import('../components/Pages/Module.vue')
        },
        {
          path: '/modules/:moduleId/video',
          name: 'module-video',
          meta: { requiresAuth: true },
          component: () => import('../components/Pages/ModuleVideo.vue')
        },
        {
          path: '/modules/:moduleId/tryout',
          name: 'module-tryout',
          meta: { requiresAuth: true },
          component: () => import('../components/Pages/ModuleTryout.vue')
        },
        {
          path: '/modules/:moduleId/discussion',
          name: 'module-discussion',
          meta: { requiresAuth: true },
          component: () => import('../components/Pages/ModuleDiscussion.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../components/UserPages/UserPage.vue'),
          redirect: { name: 'Akun' },
          meta: { requiresAuth: true },
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
          path: '/payments',
          name: 'Pembayaran',
          redirect: '/payments/my-payments',
          meta: { requiresAuth: true },
          children: [
            {
              path: 'pending-payment',
              name: 'Pembayaran Tertunda',
              component: () => import('../components/Payments/PendingPayment.vue')
            },
            {
              path: 'my-payments',
              name: 'Pembayaran Saya',
              component: () => import('../components/Payments/MyPaymentMenu.vue'),
              children: [
                {
                  path: '',
                  name: 'Metode Pembayaran',
                  component: () => import('../components/Payments/PaymentMethods.vue')
                },
                {
                  path: 'bank-transfer/:providerName',
                  name: 'Transfer Bank',
                  component: () => import('../components/Payments/BankTransfer.vue')
                },
                {
                  path: 'e-wallet/:providerName',
                  name: 'E Wallet',
                  component: () => import('../components/Payments/EWallet.vue')
                },
                {
                  path: 'direct-debit/:providerName',
                  name: 'Direct Debit',
                  component: () => import('../components/Payments/DirectDebit.vue')
                },
                {
                  path: 'credit-card/:providerName',
                  name: 'Kartu Kredit',
                  component: () => import('../components/Payments/CreditCard.vue')
                },
              ]
            },
            {
              path: 'payment-cards',
              name: 'Kartu Pembayaran',
              component: () => import('../components/Payments/PaymentCards.vue'),
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
