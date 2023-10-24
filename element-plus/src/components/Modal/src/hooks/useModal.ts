/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 15:22:56
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Modal/src/hooks/useModal.ts
 * @Description:
 *
 */
import { ref, unref, getCurrentInstance, watch } from 'vue';
import { ModalMethods, UseModalReturnType } from '../type';
import { getDynamicProps } from '@/utils/common';
import { tryOnUnmounted } from '@vueuse/core';
export function useModal(props): UseModalReturnType {
  const modalRef = ref<Nullable<ModalMethods>>(null);
  const currentInstance = getCurrentInstance();

  const getInstance = () => {
    const instance = unref(modalRef.value);
    if (!instance) {
      console.error('useModal instance is undefined!');
    }
    return instance;
  };

  const register = (modalInstance: ModalMethods) => {
    tryOnUnmounted(() => {
      modalRef.value = null;
    });
    modalRef.value = modalInstance;
    currentInstance?.emit('register', modalInstance);

    watch(
      () => props,
      () => {
        props && modalInstance.setProps(getDynamicProps(props));
      },
      {
        immediate: true,
        deep: true,
      }
    );
  };

  const methods: ModalMethods = {
    setProps: (props): void => {
      getInstance()?.setProps(props);
    },
    openModal: () => {
      getInstance()?.openModal();
    },
    closeModal: () => {
      getInstance()?.closeModal();
    },
    setSubLoading: (status) => {
      getInstance()?.setSubLoading(status);
    },
  };

  return [register, methods];
}
