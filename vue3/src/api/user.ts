/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 16:38:40
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-22 17:05:14
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/user.ts
 * @Description: 
 * 
 */
//获取用户信息
import axiosReq from '@/utils/axios'
export const userInfoReq = (): Promise<any> => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/nest-api/user/'+useAppStore().name,
      method: 'get'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}
//登录
export const loginReq = (subForm) => {
  return axiosReq({
    url: '/nest-api/user/login',
    data: subForm,
    method: 'post',
  })
}
//退出登录
export const loginOutReq = () => {
  return axiosReq({
    url: '/nest-api/user/loginValid',
    method: 'post'
  })
}
