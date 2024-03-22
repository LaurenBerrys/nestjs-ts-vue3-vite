/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-12 14:49:49
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/user.entity.ts
 * @Description:
 *
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("User", { comment: "用户" })
export class User {
  //主键
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, comment: "真实姓名" })
  realName: string;
  @Column({ length: 100, comment: "账户名" })
  name: string;
  @Column({ comment: "头像",nullable: true })
  avatar?: string;
  @Column({ comment: "密码" })
  password: string;
  @Column({ comment: "时间",nullable: true })
  when?: Date;
  @Column({ comment: "角色",nullable: true })
  roles?: string;
  @Column({ comment: "盐" })
  salt: string;
  @Column({ comment: "状态",nullable: true })
  state?: number;
}
