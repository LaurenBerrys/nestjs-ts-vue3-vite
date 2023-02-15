/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 16:38:40
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 16:38:42
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/user.ts
 * @Description: 
 * 
 */
//获取用户信息
import axiosReq from '@/utils/axios'
export const userInfoReq = (): Promise<any> => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/basis-func/user/getUserInfo',
      params: { plateFormId: 2 },
      method: 'post'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}
//登录
export const loginReq = (subForm) => {
  return axiosReq({
    url: '/basis-func/user/loginValid',
    params: subForm,
    method: 'post'
  })
}
//退出登录
export const loginOutReq = () => {
  return axiosReq({
    url: '/basis-func/user/loginValid',
    method: 'post'
  })
}
