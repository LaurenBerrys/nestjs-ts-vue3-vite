/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 14:37:06
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 15:25:58
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/axios.ts
 * @Description: 
 * 
 */
import axios from 'axios'
import { useMessage } from 'naive-ui'
import { useBasicStore } from '@/store/basic'
//使用axios.create()创建一个axios请求实例
const service = axios.create()

//请求前拦截
service.interceptors.request.use(
  (req) => {
    const { token, axiosPromiseArr } = useBasicStore()
    //axiosPromiseArr收集请求地址,用于取消请求
    req.cancelToken = new axios.CancelToken((cancel) => {
      axiosPromiseArr.push({
        url: req.url,
        cancel
      })
    })
    //设置token到header
    req.headers['AUTHORIZE_TOKEN'] = token
    //如果req.method给get 请求参数设置为 ?name=xxx
    if ('get'.includes(req.method?.toLowerCase() as string)) req.params = req.data
    return req
  },
  (err) => {
    //发送请求失败
    Promise.reject(err)
  }
)
//请求后拦截
service.interceptors.response.use(
  (res) => {
    const { code } = res.data
    const successCode = '0,200,20000'
    const noAuthCode = '401,403'
    if (successCode.includes(code)) {
      return res.data
    } else {
      if (noAuthCode.includes(code) && !location.href.includes('/login')) {
          useMessage().warning('请重新登录')
          useBasicStore().resetStateAndToLogin()
      }
      return Promise.reject(res.data)
    }
  },
  //响应报错
  (err) => {
    useMessage().error(err,{ duration: 2 * 1000})
    return Promise.reject(err)
  }
)
//导出service实例给页面调用 , config->页面的配置
export default function axiosReq(config:any) {
  return service({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 8000,
    ...config
  })
}
