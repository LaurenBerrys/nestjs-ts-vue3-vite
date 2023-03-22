/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-21 10:56:12
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/hooks/useForm.ts
 * @Description:
 *
 */
import type { FormProps, FormActionType, UseFormReturnType } from '../types/form';
import { getDynamicProps } from '@/utils/common';

type Props = Partial<DynamicProps<FormProps>>;
export function useForm(props?: Props): UseFormReturnType {
  const formRef = ref<Nullable<FormActionType>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);

  async function getForm() {
    const form = unref(formRef);
    if (!form) {
      console.error(
        'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!'
      );
    }
    await nextTick();
    return form as FormActionType;
  }
  function register(instance: FormActionType) {
    onUnmounted(() => {
      formRef.value = null;
      loadedRef.value = null;
    });
    if (unref(loadedRef) && instance === unref(formRef)) return;
    formRef.value = instance;
    loadedRef.value = true;

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props));
      },
      {
        immediate: true,
        deep: true,
      }
    );
  }

  const methods: FormActionType = {
    setSchemas: async (name, value) => {
      console.log(name, value);
      const form = await getForm();
      await form.setSchemas(name, value);
    },
    setProps: async (formProps: Partial<FormProps>) => {
      const form = await getForm();
      await form.setProps(formProps);
    },

    resetFields: async () => {
      getForm().then(async (form) => {
        await form.resetFields();
      });
    },

    clearValidate: async (name?: string | string[]) => {
      const form = await getForm();
      await form.clearValidate(name);
    },

    getFieldsValue: <T>() => {
      return unref(formRef)?.getFieldsValue() as T;
    },

    setFieldsValue: async <T>(values: T) => {
      const form = await getForm();
      //@ts-expect-error
      await form.setFieldsValue<T>(values);
    },

    submit: async (): Promise<any> => {
      const form = await getForm();
      return form.submit();
    },

    validate: async (nameList?: any[]): Promise<Recordable> => {
      const form = await getForm();
      return form.validate(nameList);
    },
  };

  return [register, methods];
}
