/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-09 14:44:57
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-10 17:36:01
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/upload.ts
 * @Description: 
 * 
 */
import axiosReq from "@/utils/axios";
 //验证服务器上是否有上传
export const uploadverfileIsExist=(data)=>{
  return axiosReq({
    url: '/nest-api/chunk/checkChunk',
    method: 'post',
    data
  })
}
export const mergeRequest =(data)=>{
  return axiosReq({
    url: '/nest-api/chunk/merge',
    method: 'post',
    data
  })
}