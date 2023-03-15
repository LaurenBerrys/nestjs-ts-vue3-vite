import type { TableBaseColumn } from 'naive-ui/lib/data-table/src/interface';
import { ComponentType } from './componentType';
export interface BasicColumn extends TableBaseColumn {
  //编辑表格
  edit?: boolean;
  editRow?: boolean; //整行编辑，单元格是否开启编辑
  editable?: boolean; //是否显示单元格编辑按钮
  editComponent?: ComponentType; //单元格编辑组件
  editComponentProps?: Recordable; //单元格编辑组件props
  editRule?: boolean | ((text: string, record: Recordable) => Promise<string>); //单元格编辑校验规则
  editValueMap?: (value: any) => string; //开启编辑时，单元格的值映射
  onEditRow?: () => void;
  // 权限编码控制是否显示
  auth?: string[];
  // 业务控制是否显示
  ifShow?: boolean | ((column: BasicColumn) => boolean);
  // 控制是否支持拖拽，默认支持
  draggable?: boolean;
}

export interface TableActionType {
  reload: (opt) => Promise<void>;
  emit?: any;
  getColumns: (opt?) => BasicColumn[];
  setColumns: (columns: BasicColumn[] | string[]) => void;
}

export interface NvapTableProps {
  title?: string;
  dataSource: Function;
  columns: any[];
  pagination: object;
  showPagination: boolean;
  actionColumn: any[];
  canResize: boolean;
  resizeHeightOffset: number;
  loading: boolean;
}
