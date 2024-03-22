/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-22 11:23:17
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/user.entity.ts
 * @Description:
 *
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
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
  @CreateDateColumn({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
    comment: '创建时间'
  })
  when?: Date;
  @Column({ comment: "角色",nullable: true })
  roles?: string;
  @Column({ comment: "盐" })
  salt: string;
  @Column({ comment: "状态",nullable: true })
  state?: number;
}
