/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 11:16:13
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/types/form.ts
 * @Description: 
 * 
 */
import { ComponentType } from './index';
import type { CSSProperties } from 'vue';
import type { GridProps, GridItemProps } from 'naive-ui/lib/grid';
import type { ButtonProps } from 'naive-ui/lib/button';

export interface FormSchema {
  field: string;
  label: string;
  labelMessage?: string;
  labelMessageStyle?: object | string;
  defaultValue?: any;
  component?: ComponentType;
  componentProps?: object;
  slot?: string;
  rules?: object | object[];
  giProps?: GridItemProps;
  isFull?: boolean;
  suffix?: string;
}

export interface FormProps {
  model?: Recordable;
  labelWidth?: number | string;
  schemas?: FormSchema[];
  inline: boolean;
  layout?: string;
  size: string;
  labelPlacement: string;
  isFull: boolean;
  showActionButtonGroup?: boolean;
  showResetButton?: boolean;
  resetButtonOptions?: Partial<ButtonProps>;
  showSubmitButton?: boolean;
  showAdvancedButton?: boolean;
  submitButtonOptions?: Partial<ButtonProps>;
  submitButtonText?: string;
  resetButtonText?: string;
  gridProps?: GridProps;
  giProps?: GridItemProps;
  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
  submitOnReset?: boolean;
  baseGridStyle?: CSSProperties;
  collapsedRows?: number;
}

export interface FormActionType {
  submit: () => Promise<any>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  setFieldsValue: (values: Recordable) => Promise<void>;
  clearValidate: (name?: string | string[]) => Promise<void>;
  getFieldsValue: () => Recordable;
  resetFields: () => Promise<void>;
  validate: (nameList?: any[]) => Promise<any>;
}

export type RegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [RegisterFn, FormActionType];
