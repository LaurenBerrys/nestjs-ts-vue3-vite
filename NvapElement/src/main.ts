/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-02-22 15:22:12
 * @LastEditTime: 2023-09-25 15:52:09
 * @Description:
 */
import '@/assets/style/reset.css';
import '@/assets/style/global.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { setupI18n } from '@/lang/index';
import { createPinia } from 'pinia';
import 'uno.css';
import 'vfonts/FiraCode.css';
import 'element-plus/theme-chalk/src/base.scss';
import WebSocketClient from './utils/websockt';
//数据持久化，刷新页面数据不丢失
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const store = createPinia();
const WebSocket = new WebSocketClient();
WebSocket.connect(3333);
store.use(piniaPluginPersistedstate);
import './permission';
import { myDirective } from './utils/directive';
import './styles/index.scss';
const app = createApp(App);
app.config.warnHandler = () => {};
app.directive('permission', myDirective);
app.use(store);
app.use(router);
app.use(setupI18n);
app.mount('#app');
