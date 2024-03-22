/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:49:13
 * @LastEditTime: 2024-03-22 11:27:35
 * @Description:
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
@Entity("Formily", { comment: "低代码" })
export class Formily {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: "表单配置", nullable: true, type: "longtext" })
  form?: string;
  @Column({ comment: "表单编码", nullable: true })
  code?: string;
  @Column({ comment: "表单名称", nullable: true })
  name?: string;
  @Column({ comment: "表单组件配置", nullable: true, type: "longtext" })
  schema?: string;
  @Column({ comment: "对应实体", nullable: true })
  model?: string;
  @Column({ comment: "表单类型", nullable: true })
  type?: number;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
    comment: "创建时间",
  })
  createdTime?: Date;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: true,
    comment: "更新时间",
  })
  updateTime?: Date;
}
