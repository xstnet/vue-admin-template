import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/router';
import { createPinia } from 'pinia';
// mock
import '../mock';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './global.scss';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
