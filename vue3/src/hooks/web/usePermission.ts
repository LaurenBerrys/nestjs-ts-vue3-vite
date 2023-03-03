/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 20:01:36
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 21:19:29
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/web/usePermission.ts
 * @Description: 
 * 
 */


export function usePermission() {
  const userStore = useAppStore();

  /**
   * 检查权限
   * @param accesses
   */
  function _somePermissions(accesses: string[]) {
    return userStore.userInfo.permissions.some((item) => {
      return accesses.includes(item);
    });
  }

  /**
   * 判断是否存在权限
   * 可用于 v-if 显示逻辑
   * */
  function hasPermission(accesses: string[]): boolean {
    if (!accesses || !accesses.length) return true;
    console.log( _somePermissions(accesses));
    
    return _somePermissions(accesses);
  }

  /**
   * 是否包含指定的所有权限
   * @param accesses
   */
  function hasEveryPermission(accesses: string[]): boolean {
    const permissionsList = userStore.permissions;
    if (Array.isArray(accesses)) {
      return permissionsList.every((access: any) => accesses.includes(access.value));
    }
    throw new Error(`[hasEveryPermission]: ${accesses} should be a array !`);
  }

  /**
   * 是否包含其中某个权限
   * @param accesses
   * @param accessMap
   */
  function hasSomePermission(accesses: string[]): boolean {
    const permissionsList = userStore.permissions;
    if (Array.isArray(accesses)) {
      return permissionsList.some((access: any) => accesses.includes(access.value));
    }
    throw new Error(`[hasSomePermission]: ${accesses} should be a array !`);
  }

  return { hasPermission, hasEveryPermission, hasSomePermission };
}
