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
import Galleria from 'primevue/galleria';
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'
import Message from 'primevue/message'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(DialogService)
app.use(VueGtag, {
  config: { id: 'G-4QXKS4DLV7' }
})

app.component('Button', Button)
app.component('Image', Image)
app.component('Galleria', Galleria)
app.component('DynamicDialog', DynamicDialog)
app.component('Message', Message)

app.mount('#app')
