/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 14:37:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-21 17:24:26
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/axios.ts
 * @Description:
 *
 */
import { hasOwn } from '@vueuse/core';
import axios from 'axios';
import qs from 'qs';
//使用axios.create()创建一个axios请求实例
const service = axios.create();
//请求前拦截
service.interceptors.request.use(
  (req) => {
    const { token, axiosPromiseArr } = useAppStore();
    //axiosPromiseArr收集请求地址,用于取消请求
    req.cancelToken = new axios.CancelToken((cancel) => {
      axiosPromiseArr.push({
        url: req.url,
        cancel,
      });
    });
    //处理params参数
    if (req.params) {
      req.params = qs.stringify(req.params);
      req.url = req.url + '?' + req.params;
    }

    //设置token到header 并把token转成Bearer token类型
    req.headers.Authorization = `Bearer ${token}`;
    // req.headers['Accept-Encoding']= 'gzip,deflate'//添加gzip压缩
    //如果req.method给get 请求参数设置为 ?name=xxx
    if ('get'.includes(req.method?.toLowerCase() as string)) req.params = req.data;
    return req;
  },
  (err) => {
    useAppStore().resetState();
    //发送请求失败
    Promise.reject(err);
  }
);
//请求后拦截
service.interceptors.response.use(
  (res) => {
    const { code } = res.data;
    const successCode = '0,200,20000';
    if (successCode.includes(code)) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  //响应报错
  (err) => {
    const noAuthCode = '401,403';
    const { response } = err;
    if (response) {
      if (hasOwn(response, 'data')) {
        if (noAuthCode.includes(response.data.code)) {
          window.$message.warning('请重新登录');
          useAppStore().resetStateAndToLogin();
        }
      } else {
        window.$message.error(err, { duration: 2 * 1000 });
      }
    } else {
      window.$message.error(err, { duration: 2 * 1000 });
    }
    return Promise.reject(err);
  }
);
export default function axiosReq(config: any): Promise<ApiResponse> {
  return service({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 8000,
    ...config,
  });
}
