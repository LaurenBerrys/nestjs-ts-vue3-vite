/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 22:11:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-14 16:34:26
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/CellComponent.ts
 * @Description:
 *
 */
import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from './types/index';
import { componentMap } from './componentMap';

export interface ComponentProps {
  is: ComponentType;
  component: ComponentType;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
}

export const CellComponent: FunctionalComponent = ({ is }: ComponentProps, { attrs }) => {
  const Comp = componentMap.get(is) as typeof defineComponent;
  //@ts-expect-error
  const DefaultComp = h(Comp, attrs);
  return DefaultComp;
};
