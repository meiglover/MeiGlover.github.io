import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import VueGtag from 'vue-gtag'
import 'primevue/resources/themes/aura-light-pink/theme.css'

import Button from 'primevue/button'
import Image from 'primevue/image'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(VueGtag, {
  config: { id: 'G-JLPRHL43KM' }
})

app.component('Button', Button)
app.component('Image', Image)

app.mount('#app')
