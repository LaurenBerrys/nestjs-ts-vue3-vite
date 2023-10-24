/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-06 15:43:50
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/hooks/useFormContext.ts
 * @Description:
 *
 */

const key = Symbol('formNvapRef');
export function createFormContext(instance) {
  provide(key, instance);
}
export function useFormContext() {
  return inject(key);
}
