/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:49:13
 * @LastEditTime: 2023-08-07 17:39:50
 * @Description:
 */

import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
@Entity("Formily")
export class Formily {
  @ObjectIdColumn()
  id: string;
  @Column({ comment: "表单配置" })
  form: string;
  @Column({ comment: "表单组件配置" })
  schema: string;
}
