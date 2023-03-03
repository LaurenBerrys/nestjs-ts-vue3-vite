/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 22:37:20
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Table/src/components/editable/CellComponent.ts
 * @Description: 
 * 
 */
import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from '../../types/componentType';
import { componentMap } from '@/components/Table/src/componentMap';
import { NPopover } from 'naive-ui';

export interface ComponentProps {
  component: ComponentType & string;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
}

export const CellComponent: FunctionalComponent = (
  { component = 'NInput', rule = true, ruleMessage, popoverVisible }: ComponentProps,
  { attrs }
) => {
  const Comp = componentMap.get(component) as typeof defineComponent;
    //@ts-ignore
  const DefaultComp = h(Comp, attrs);
  if (!rule) {
    return DefaultComp;
  }
  return h(
    NPopover,
    { 'display-directive': 'show', show: !!popoverVisible, manual: 'manual' },
    {
      trigger: () => DefaultComp,
      default: () =>
        h(
          'span',
          {
            style: {
              color: 'red',
              width: '90px',
              display: 'inline-block',
            },
          },
          {
            default: () => ruleMessage,
          }
        ),
    }
  );
};
