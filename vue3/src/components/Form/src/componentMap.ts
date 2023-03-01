/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 22:13:34
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 22:23:32
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/componentMap.ts
 * @Description: 
 * 
 */
import type { Component } from 'vue';
import {
NInput,
NInputNumber,
NInputGroup,
NSelect,
NTreeSelect,
NRadioGroup,
NCheckbox,
NCheckboxGroup,
NAutoComplete,
NCascader,
NDatePicker,
NTimePicker,
NSwitch,
NUpload,
NSlider,
NRate
} from 'naive-ui';
import type { ComponentType } from './types/index';
const componentMap = new Map<ComponentType, Component>();
componentMap.set('NInput', NInput);
componentMap.set('NInputNumber', NInputNumber);
componentMap.set('NSelect', NSelect);
componentMap.set('NSwitch', NSwitch);
componentMap.set('NCheckbox', NCheckbox);
componentMap.set('NDatePicker', NDatePicker);
componentMap.set('NTimePicker', NTimePicker);
componentMap.set('NRadioGroup', NRadioGroup);
componentMap.set('NInputGroup', NInputGroup);
componentMap.set('NTreeSelect', NTreeSelect);
componentMap.set('NAutoComplete', NAutoComplete);
componentMap.set('NCheckboxGroup', NCheckboxGroup);
componentMap.set('NCascader', NCascader);
componentMap.set('NSlider', NSlider);
componentMap.set('NRate', NRate);
componentMap.set('NUpload', NUpload);

export function add(compName: ComponentType, component: Component) {
  componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
  componentMap.delete(compName);
}

export { componentMap };
