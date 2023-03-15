/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:23:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-14 16:37:05
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/permission.ts
 * @Description:
 *
 */
import router from '@/router';
import { userInfoReq } from '@/api/user';
import { langTitle } from '@/hooks/use-common';

//路由进入前拦截
//to:将要进入的页面 vue-router4.0 不推荐使用next()
const whiteList = ['/login', '/404', '/401']; // no redirect whitelist
router.beforeEach(async (to) => {
  document.title = langTitle(to.meta?.title); // i18 page title
  const appStore = useAppStore();
  //1.判断token
  if (appStore.token) {
    if (to.path === '/login') {
      return '/';
    } else {
      //2.判断是否获取用户信息
      if (!appStore.userInfo) {
        try {
          const userData = await userInfoReq();
          // userData.menuList
          //3.动态路由权限筛选
          filterAsyncRouter(userData);
          //4.保存用户信息到store
          appStore.setUserInfo(userData);
          //5.再次执行路由跳转
          return { ...to, replace: true };
        } catch (e) {
          console.error(`route permission error${e}`);
          appStore.resetState();
          return `/login?redirect=${to.path}`;
        }
      } else {
        if (router.getRoutes().length === 5) {
          const asyncRouter = filterAsyncRoutesByMenuList(appStore.userInfo.menuList);
          asyncRouter.forEach((route) => {
            router.addRoute(route);
          });
          return { ...to, replace: true };
        }
        return true;
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.path}`;
    } else {
      return true;
    }
  }
});
//路由进入后拦截
router.afterEach(() => {});

// function hasPermission(route, role) {
//   // * 不需要权限直接返回true
//   if (!route.meta?.requireAuth) return true;

//   const routeRole = route.meta?.role ? route.meta.role : [];

//   // * 登录用户没有角色或者路由没有设置角色判定为没有权限
//   if (!role.length || !routeRole.length) return false;
//   // * 路由指定的角色包含任一登录用户角色则判定有权限
//   return role.some((item) => routeRole.includes(item));
// }
