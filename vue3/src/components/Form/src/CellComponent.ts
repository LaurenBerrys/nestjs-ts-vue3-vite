/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 22:11:40
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 22:43:52
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/CellComponent.ts
 * @Description: 
 * 
 */
import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from './types/index';
import { componentMap } from './componentMap';
import { h } from 'vue';

import { NPopover } from 'naive-ui';

export interface ComponentProps {
  component: ComponentType;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
}
export const CellComponent: FunctionalComponent = (
  { component = 'NInput', rule = true, ruleMessage, popoverVisible }: ComponentProps,
  { attrs }
) => {
  const Comp = componentMap.get(component) as typeof defineComponent;

  const DefaultComp = h(Comp, attrs);
  if (!rule) {
    return DefaultComp;
  }
  return h(
    DefaultComp
  );
};
