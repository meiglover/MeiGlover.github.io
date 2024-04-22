/* eslint-disable */
import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import VueGtag from 'vue-gtag'
import 'primevue/resources/themes/aura-light-pink/theme.css'

import Button from 'primevue/button'
import Image from 'primevue/image'
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(DialogService)
app.use(VueGtag, {
  config: { id: 'G-JLPRHL43KM' }
})

app.component('Button', Button)
app.component('Image', Image)
app.component('DynamicDialog', DynamicDialog)

app.mount('#app')
