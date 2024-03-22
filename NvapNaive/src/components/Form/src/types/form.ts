/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-15 16:46:01
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/types/form.ts
 * @Description:
 *
 */
import { ComponentType } from './index';
import type { CSSProperties } from 'vue';
import type { GridProps, GridItemProps } from 'naive-ui/lib/grid';
import type { ButtonProps } from 'naive-ui/lib/button';
import { Layout_Enum } from '@/enums/layenum';
export interface FormSchema {
  field: string;
  label: string;
  labelMessage?: string;
  labelMessageStyle?: object | string;
  defaultValue?: any;
  component?: ComponentType;
  componentProps?: object | any;
  slot?: string;
  rules?: object | object[];
  giProps?: GridItemProps;
  isFull?: boolean;
  suffix?: string;
}
/**
 * @param model //表单的值
 * @param labelWidth //label宽度
 * @param schemas //配置表单
 * @param inline  //boolean 是否展示为行内表单
 * @param gridProps  布局配置
 * @param layout //布局方式。默认列排列，inline行排列
 * @param collapsedRows 超过多少个就折叠
 * @param size //表单大小
 * @param offset 按钮位置 true在最后，false在最前面
 * @param labelPlacement //表单大小
 * @param showActionButtonGroup //是否显示按钮
 * @param showResetButton 是否显示重置按钮
 * @param resetButtonOptions 重置按钮
 * @param showSubmitButton 是否显示提交按钮
 * @param showAdvancedButton 是否显示展开，收起按钮
 * @param submitButtonOptions 提交按钮
 * @param submitButtonText 提交按钮名称
 * @param resetButtonText 重置按钮名称
 */
export interface FormProps {
  model?: Recordable;
  labelWidth?: number | string;
  schemas?: FormSchema[];
  gridProps?: GridProps;
  inline?: boolean;
  layout?: Layout_Enum;
  size?: string;
  labelPlacement?: string;
  isFull?: boolean;
  offset?: boolean;
  showActionButtonGroup?: boolean;
  showResetButton?: boolean;
  resetButtonOptions?: Partial<ButtonProps>;
  showSubmitButton?: boolean;
  showAdvancedButton?: boolean;
  submitButtonOptions?: Partial<ButtonProps>;
  submitButtonText?: string;
  resetButtonText?: string;
  giProps?: GridItemProps;
  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
  submitOnReset?: boolean;
  baseGridStyle?: CSSProperties;
  collapsedRows?: number;
}

/**
 * @description: useForm的返回值
 * @param {*} setSchemas 设置表单
 * @param {*} submit 提交表单
 * @param {*} setProps 设置表单属性
 * @param {*} setFieldsValue 设置表单值
 * @param {*} clearValidate 清除表单验证
 * @param {*} getFieldsValue 获取表单值
 * @param {*} resetFields 重置表单
 * @param {*} validate 验证表单
 * @return {setSchemas,submit,setProps,setFieldsValue,clearValidate,getFieldsValue,resetFields,validate}
 */
export interface FormActionType {
  setSchemas: (name: string, value: any) => Promise<void>;
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
