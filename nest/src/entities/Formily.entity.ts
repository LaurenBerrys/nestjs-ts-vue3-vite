/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:49:13
 * @LastEditTime: 2024-03-21 14:50:21
 * @Description:
 */

import {
  Entity,
  Column,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
} from "typeorm";
@Entity("Formily", { comment: "低代码" })
export class Formily {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: "表单配置", nullable: true ,type:"longtext" })
  form?: string;
  @Column({ comment: "表单编码", nullable: true })
  code?: string;
  @Column({ comment: "表单名称", nullable: true })
  name?: string;
  @Column({ comment: "表单组件配置", nullable: true, type:"longtext"})
  schema?: string;
  @Column({ comment: "对应实体", nullable: true, })
  model?: string;
  @Column({ comment: "表单类型", nullable: true })
  type?: number;
}
