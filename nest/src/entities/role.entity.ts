/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 15:33:50
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/role.entity.ts
 * @Description:
 *
 */
import { isEmpty } from 'class-validator';
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
//每个实体对应的就是数据库中的表
@Entity('role')
export class Role {
  //主键
  @ObjectIdColumn()
  id: number;
  @Column({ length: 100, comment: '角色名' })
  name: string;
  @Column({ comment: '菜单权限' })
  code:Array<string>;
  @Column({ comment: '按钮权限' })
  permissions: Array<string>;
  @Column({ comment: '用户' })
  users: Array<string>;
}
