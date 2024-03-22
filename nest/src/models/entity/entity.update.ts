/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2024-01-31 14:24:58
 * @LastEditTime: 2024-03-21 14:24:27
 * @Description: //更新实体
 */
export class UpdateEntityDto {
  name: string; //字段
  label: string; //名称
  type?: any; //类型
  length?: string; //长度
  isPrimary?: boolean; //是否主健
  default?: string; //默认值
  isNullable?: boolean; // 是否为空
  
}
