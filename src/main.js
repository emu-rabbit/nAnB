import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@/style/index.scss'

createApp(App).use(i18n).use(router).mount('#app')

let windowsVH = window.innerHeight / 100;
document.body.style.setProperty('--vh', windowsVH + 'px');
window.addEventListener('resize', function() {
  document.body.style.setProperty('--vh', windowsVH + 'px');
});
