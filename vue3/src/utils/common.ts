/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:13:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-23 21:38:24
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/common.ts
 * @Description: 
 * 
 */
import { useEventListener } from '@vueuse/core'
/**
 *  vue3防抖,但他不是function对象
 * @param value  函数
 * @param delay  时间
 * @returns 
 */
export const deBounce=(value:any, delay = 200)=>{
    let timeout
    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            trigger()
          }, delay)
        }
      }
    })
}
/**
 * @desc  函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(method:any, wait:any, immediate?:any) {
  let timeout
  return function (...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(context, args)
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        method.apply(context, args)
      }, wait)
    }
  }
}