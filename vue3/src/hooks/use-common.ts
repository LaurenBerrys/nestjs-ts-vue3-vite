/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:24:34
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 16:55:01
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
export function cloneDeep(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp)
  return new RegExp(obj);
  if (obj instanceof Date)
  return new Date(obj);
  if (obj === null || typeof obj !== 'object') { return obj; } 
 //hash.has根据是否有key关联对象返回一个Boolean值。
 if (hash.has(obj)) { 
 //hash.get返回key关联对象, 或者 undefined(没有key关联对象时)。
 return hash.get(obj) } 
 //如果obj是数组那么obj.constructor是[Function:Array]
 //如果obj是对象那么obj.constructor是[Function:Object]
 let t = new obj.constructor(); 
 //在 hash.set中设置一组key关联对象，返回这个 WeakMap对象
  hash.set(obj, t); 
 for (let key in obj) {
  if (obj.hasOwnProperty(key))
  { t[key] = cloneDeep(obj[key], hash);} } 
 return t 
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
