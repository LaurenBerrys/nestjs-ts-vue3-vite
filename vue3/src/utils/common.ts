/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:13:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 14:48:16
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/common.ts
 * @Description: 
 * 
 */

/**
 *  防抖
 * @param value  函数
 * @param delay  时间
 * @returns 
 */
export const debounce=(value, delay = 200)=>{
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