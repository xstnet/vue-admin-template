import { createApp } from 'vue';
import './global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import { router } from '@/router';
import { createPinia } from 'pinia';
// mock
import '../mock';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
