import { createApp } from 'vue'
import App from './App.vue'
import AppCard from './components/AppCard.vue'

import './assets/main.css'

const app = createApp(App)

app.component('AppCard', AppCard)

app.mount('#app')
