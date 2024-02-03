import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import routes from './router'
import { createPinia } from 'pinia';

const app = createApp(App);
app
.use(routes)
.use(createPinia())
.mount('#app');