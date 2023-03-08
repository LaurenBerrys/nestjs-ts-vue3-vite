/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:11:45
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 19:51:24
 * @FilePath: /nestjs-ts-vue3-vite/vue3/typings/global.d.ts
 * @Description: 
 * 
 */
import type { defineOptions as _defineOptions } from 'unplugin-vue-define-options/macros.d.ts'
declare global {
  interface ObjKeys {
    [propName: string]: any
  }
  interface Window {
    $loadingBar: any;  
    $notification: any;
    $message: any;
    $dialog:any;
    $webgis:any;
}
interface ApiResponse {
  code: number;
  msg: string;
  data: any;
}
  const GLOBAL_VAR: string
  const defineOptions: typeof _defineOptions
  const $ref: any
}
export {}
