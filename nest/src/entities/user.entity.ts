/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-27 20:21:01
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/user.entity.ts
 * @Description:
 *
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Role } from './role.entity';
//每个实体对应的就是数据库中的表
@Entity('User')
export class User {
  //主键
  @ObjectIdColumn()
  id: number;
  @Column({ length: 100, comment: '真实姓名' })
  realName: string;
  @Column({ length: 100, comment: '账户名' })
  name: string;
  @Column({ comment: '密码' })
  password: string;
  @Column({ comment: '时间' })
  when: Date;
  @Column({ comment: '角色' })
  roles:Array<string>;
  @Column({ comment: '盐' })
  salt: string;
}
