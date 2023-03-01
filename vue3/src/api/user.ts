/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 16:38:40
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 17:02:46
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
      function toTree(arr) {
        if(data.menuList.length>=2){
          let res:any = []
          let map = arr.reduce((res, v) => (res[v.id] = v, res), {})
          for (let item of arr) {
              if (item.parentId in map) {
                  const parent = map[item.parentId]
                  parent.children = parent.children || []
                  parent.children.push(item)
                  res.push(parent)
                  //res根据id去重
                  let obj = {}
                  res = res.reduce((cur, next) => {
                      obj[next.id] ? '' : obj[next.id] = true && cur.push(next)
                      return cur
                  }
                      , [])
              } else{
                  res.push(item)
              }
          }
          return res
        }else{
          return arr
        }
     
    } 
    data.menuList= toTree(data.menuList)
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
export const getUser = (params) => {
  return axiosReq({
    url: '/nest-api/user',
    method: 'get',
    params
  })
}
export const updateUser = (url,data) => {
  return axiosReq({
    url: '/nest-api/user/'+url,
    method: 'patch',
    data
  })
}
export const deleteUser = (url) => {
  return axiosReq({
    url: '/nest-api/user/'+url,
    method: 'delete'
  })
}


