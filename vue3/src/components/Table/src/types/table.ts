import type { TableBaseColumn } from 'naive-ui/lib/data-table/src/interface';
import { ComponentType } from './componentType';
/**
 * @description: Column 表格列配置
 * @param {title} 显示的标题
 * @param {key} 列属性的 key，必填
 * @param {width} 列宽度
 * @param {minWidth} 列最小宽度
 * @param {fixed} 列是否固定在左侧或者右侧，true 表示固定在左侧
 * @param {align} 对齐方式
 * @param {ellipsis} 超过宽度将自动省略
 * @param {order} 排序函数，本地排序使用一个函数即可
 * @param {customTitle} 自定义标题
 * @param {customRender} 自定义渲染内容
 * @param {show} 是否显示
 * @param {ifShow} 是否显示
 * @param {auth} 权限编码控制是否显示
 * @param {draggable} 控制是否支持拖拽，默认支持
 * @param {edit} 编辑表格
 * @param {editRow} 整行编辑，单元格是否开启编辑
 * @param {editable} 是否显示单元格编辑按钮
 * @param {editComponent} 单元格编辑组件
 * @param {editComponentProps} 单元格编辑组件props
 * @param {editRule} 单元格编辑校验规则
 * @param {editValueMap} 开启编辑时，单元格的值映射
 * @param {onEditRow} 编辑事件
 */
export interface BasicColumn extends TableBaseColumn {
  edit?: boolean;
  editRow?: boolean; 
  editable?: boolean; 
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  editRule?: boolean | ((text: string, record: Recordable) => Promise<string>); 
  editValueMap?: (value: any) => string; 
  onEditRow?: () => void;
  auth?: string[];
  ifShow?: boolean | ((column: BasicColumn) => boolean);
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
