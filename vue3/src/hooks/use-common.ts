/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:24:34
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 15:24:43
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/use-common.ts
 * @Description: 
 * 
 */
//复制文本
import { useMessage } from 'naive-ui'

// i18n language  match title
import { i18n } from '@/lang'
// the keys using  zh file
import langEn from '@/lang/zh'
import settings from '@/settings'

export const sleepTimeout = (time: number) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve(null)
    }, time)
  })
}

//深拷贝
export function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value))
}

const { t, te } = i18n.global
export const langTitle = (title) => {
  if (!title) {
    return settings.title
  }
  for (const key of Object.keys(langEn)) {
    if (te(`${key}.${title}`) && t(`${key}.${title}`)) {
      return t(`${key}.${title}`)
    }
  }
  return title
}

//get i18n instance
export const getLangInstance = () => {
  return i18n.global as ObjKeys
}
