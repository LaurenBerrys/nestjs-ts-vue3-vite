/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 22:13:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-25 16:12:48
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Form/src/componentMap.ts
 * @Description:
 *
 */
import {
  FormLayout,
  FormItem,
  FormGrid,
  FormButtonGroup,
  Space,
  Submit,
  Reset,
  Input,
  Password,
  Select,
  DatePicker,
  TimePicker,
  InputNumber,
  Transfer,
  Cascader,
  Radio,
  Checkbox,
  Upload,
  Switch,
  ArrayCards,
  ArrayItems,
  ArrayTable,
  ArrayTabs,
  FormCollapse,
  FormStep,
  FormTab,
  FormDialog,
  FormDrawer,
  Editable,
  PreviewText,
} from '@formily/element-plus';
import NvapPage from '../page/ComponentPage.vue';
import { createSchemaField } from '@formily/vue';
const componentMap = () => {
  const maps = createSchemaField({
    components: {
      NvapPage,
      FormLayout,
      FormItem,
      FormGrid,
      FormButtonGroup,
      Space,
      Submit,
      Reset,
      Input,
      Password,
      Select,
      DatePicker,
      TimePicker,
      InputNumber,
      Transfer,
      Cascader,
      Radio,
      Checkbox,
      Upload,
      Switch,
      ArrayCards,
      ArrayItems,
      ArrayTable,
      ArrayTabs,
      FormCollapse,
      FormStep,
      FormTab,
      FormDialog,
      FormDrawer,
      Editable,
      PreviewText,
    },
  });
  return maps;
};

export { componentMap };
