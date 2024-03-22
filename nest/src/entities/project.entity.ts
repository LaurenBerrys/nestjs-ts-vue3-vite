/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:49:13
 * @LastEditTime: 2024-03-12 14:50:11
 * @Description:
 */

import { Entity, Column, ObjectIdColumn,PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity("Project")
export class Project {
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: "项目名" })
  name: string;
  @Column({ comment: "数据库名称" })
  dto_name: string;
  @Column({ comment: "数据库类型" })
  dto_type: string;
  @Column({ comment: "ip" })
  ip: string;
  @Column({ comment: "端口" })
  port: string;
  @Column({ comment: "用户名" })
  username: string;
  @Column({ comment: "密码" })
  password: string;
  @Column({ comment: '盐' })
  salt: string;
}
