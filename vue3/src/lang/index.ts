/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:17:49
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 16:04:52
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/lang/index.ts
 * @Description: 
 * 
 */
import { createI18n } from 'vue-i18n'
import { LANG_VALUE } from './enum'
import en from './en'
import zh from './zh'
import settings from '@/settings'
const messages = { 
    [LANG_VALUE.En]: en,
    [LANG_VALUE.Zh]: zh
 }

const localeData = {
  globalInjection: true, //如果设置true, $t() 函数将注册到全局
  legacy: false, //如果想在composition api中使用需要设置为false
  locale: settings.defaultLanguage,
  messages // set locale messages
}

export const i18n = createI18n(localeData)
export const setupI18n = {
  install(app) {
    app.use(i18n)
  }
}
