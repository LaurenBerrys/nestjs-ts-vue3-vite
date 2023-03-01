/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 19:33:42
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 11:13:31
 * @FilePath: /nestjs-ts-vue3-vite/vue3/typings/index.d.ts
 * @Description: 
 * 
 */
declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }
  
  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }
  declare type Recordable<T = any> = Record<string, T>;
  declare type Nullable<T> = T | null;
  declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
  }
  
  declare type RefType<T> = T | null;
  
  declare type LabelValueOptions = {
    label: string;
    value: any;
    disabled: boolean;
    [key: string]: string | number | boolean;
  }[];
  
  declare type EmitType = (event: string, ...args: any[]) => void;
  
  declare type TargetContext = '_self' | '_blank';
  
  declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
    $el: T;
  }
  
  declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;
  
  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
  
  declare type DynamicProps<T> = {
    [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
  };
  