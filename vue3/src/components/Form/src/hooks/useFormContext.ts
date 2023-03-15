/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 11:15:05
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/hooks/useFormContext.ts
 * @Description:
 *
 */

const key = Symbol('formElRef');
export function createFormContext(instance) {
  provide(key, instance);
}
export function useFormContext() {
  return inject(key);
}
