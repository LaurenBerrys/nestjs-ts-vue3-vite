/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-02 10:28:24
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/role.entity.ts
 * @Description:
 *
 */
import { isEmpty } from "class-validator";
import {
  Entity,
  Column,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("role", { comment: "角色" })
export class Role {
  //主键
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, comment: "角色名" })
  name: string;
  @Column({ comment: "菜单权限" ,nullable: true})
  code?: string;
  @Column({ comment: "按钮权限",nullable: true })
  permissions?: string;
  @Column({ comment: "用户",nullable: true })
  users?: string;
}
