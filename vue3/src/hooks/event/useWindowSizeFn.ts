/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 19:32:46
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 19:32:53
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/event/useWindowSizeFn.ts
 * @Description:
 *
 */
import { tryOnMounted, tryOnUnmounted } from "@vueuse/core";
import { useDebounceFn } from "@vueuse/core";

interface WindowSizeOptions {
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}

export function useWindowSizeFn<T>(
  fn: Fn<T>,
  wait = 150,
  options?: WindowSizeOptions
) {
  let handler = () => {
    fn();
  };
  const handleSize = useDebounceFn(handler, wait);
  handler = handleSize;

  const start = () => {
    if (options && options.immediate) {
      handler();
    }
    window.addEventListener("resize", handler);
  };

  const stop = () => {
    window.removeEventListener("resize", handler);
  };

  tryOnMounted(() => {
    start();
  });

  tryOnUnmounted(() => {
    stop();
  });
  return [start, stop];
}
