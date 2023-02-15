/*
 * @Author: Nie Chengyong
 * @Date: 2022-12-09 11:58:43
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 17:52:55
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/config.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import { langTitle } from '@/hooks/use-common'
import settings from '@/settings'
import { i18n } from '@/lang'
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      dateLocale:'dateZhCN',
      language: settings.defaultLanguage,
      theme: settings.defaultTheme,
    }
  },
  persist: {
    storage: localStorage,
    paths: ['language', 'theme','dateLocale']
    
  },
  actions: {
    setTheme(data: string) {
      this.theme = data
    },
    setLanguage(lang: string, title) {
      const { locale }: any = i18n.global
      this.language = lang
      locale.value = lang
      document.title = langTitle(title) // i18 page title
    }
  }
})
