/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:49:13
 * @LastEditTime: 2024-03-22 11:21:23
 * @Description:
 */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
@Entity("Pages", { comment: "页面模型" })
export class Pages {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: "页面名称", nullable: true })
  name?: string;
  @Column({ comment: "页面编码", nullable: true })
  code?: string;
  @Column({ comment: "页面数据来源", nullable: true })
  dataSource?: string;
  @Column({ comment: "sql", nullable: true, type: "longtext" })
  sql?: string;
  @Column({ comment: "对应实体", nullable: true })
  model?: string;
  @Column({ comment: "主键", nullable: true })
  key?: number;
  @Column({ comment: "排序方式", nullable: true })
  sort?: number;
  @Column({ comment: "排序字段", nullable: true })
  sortField?: string;
  @Column({ comment: "是否可以选择", nullable: true, default: false })
  isSelected?: Boolean;
  @Column({ comment: "列表展示字段", nullable: true, type: "longtext" })
  column?: string;
  @Column({ comment: "查询条件", nullable: true, type: "longtext" })
  search?: string;
  @Column({ comment: "按钮配置", nullable: true, type: "longtext" })
  buttons?: string;
  @Column({ comment: "生命周期", nullable: true, type: "longtext" })
  setup?: string;
  @Column({ comment: "是否启用", nullable: true, type: "longtext" })
  state?: boolean;
  @CreateDateColumn({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
    comment: '创建时间'
  })
  createdTime?: Date;
  @CreateDateColumn({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
    comment: '更新时间'
  })
  updateTime?: Date;
  @Column({ comment: "创建人", nullable: true })
  createdBy?: string;
  @Column({ comment: "更新人", nullable: true })
  updatedBy?: Date;
}
