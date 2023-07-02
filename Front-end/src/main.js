import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'
import '@splidejs/vue-splide/css';

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')

