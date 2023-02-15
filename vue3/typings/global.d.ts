/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:11:45
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 15:11:51
 * @FilePath: /nestjs-ts-vue3-vite/vue3/typings/global.d.ts
 * @Description: 
 * 
 */
import type { defineOptions as _defineOptions } from 'unplugin-vue-define-options/macros.d.ts'
declare global {
  interface ObjKeys {
    [propName: string]: any
  }
  const GLOBAL_VAR: String
  const defineOptions: typeof _defineOptions
  const $ref: any
}
export {}
