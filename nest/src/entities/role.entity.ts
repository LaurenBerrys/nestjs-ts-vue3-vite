/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-27 20:20:50
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
  // @Column({
  //   type: 'int',
  //   unsigned: true,
  //   primary: true,
  //   generated: true,
  // })
  @ObjectIdColumn()
  id: number;
 
  @Column({ length: 100, comment: '角色名' })
  name: string;
  @Column({ comment: '角色权限' })
  code:number;
  @Column({ comment: '按钮权限' })
  codes: Array<number>;
  @Column({ comment: '菜单权限' })
  menuList:Array<any>;
}
