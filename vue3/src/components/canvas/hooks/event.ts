/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-17 17:28:39
 * @LastEditTime: 2023-03-22 17:37:04
 * @Description:
 */
import { KeyCode } from '../utils/constants';

/**
 * 判断是否按下空格
 * @param keyDownCb 空格键按下回调
 * @param keyUpCb 空格键松开回调
 * @returns 空格键按下状态
 */
export function useSpaceEvent(
  keyDownCb?: (spacePressState: boolean) => void,
  keyUpCb?: (spacePressState: boolean) => void
) {
  const isPressSpace = ref<boolean>(false);
  onMounted(() => {
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);
  });
  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown);
    window.removeEventListener('keyup', onKeyup);
  });
  const onKeydown = (e: KeyboardEvent) => {
    if (e.code === KeyCode.SPACE) {
      isPressSpace.value = true;
      keyDownCb?.(true);
    }
  };

  const onKeyup = (e: KeyboardEvent) => {
    if (e.code === KeyCode.SPACE) {
      isPressSpace.value = true;
      keyUpCb?.(false);
    }
  };
  return isPressSpace;
}

/**
 * window resize hook
 * @param cb resize callback
 */
export function useResizeEvent(cb: () => void) {
  onMounted(() => {
    window.addEventListener('resize', onResize);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });
  const onResize = () => {
    cb();
  };
}

/**
 * 监听backspace键
 * @param keyDownCb backspace键按下回调
 */
export const useBackspace = (keyDownCb?: () => void) => {
  onMounted(() => {
    window.addEventListener('keydown', onKeydown);
  });
  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown);
  });
  const onKeydown = (e: KeyboardEvent) => {
    if (e.code === KeyCode.BACKSPACE) {
      keyDownCb?.();
    }
  };
};
