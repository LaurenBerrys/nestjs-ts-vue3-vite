/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 16:33:31
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/main.ts
 * @Description: 
 * 
 */
import '@/assets/style/reset.css'
import '@/assets/style/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupI18n } from '@/lang/index'
import { createPinia } from 'pinia'
import 'uno.css'
//数据持久化，刷新页面数据不丢失
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)

import './permission'
const app = createApp(App)
//router
app.use(router)
//store
app.use(store)
//i18n
app.use(setupI18n)
app.mount('#app')
