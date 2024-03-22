/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 16:22:13
 * @LastEditTime: 2024-03-12 14:50:19
 * @Description:
 */
import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn,OneToMany } from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("Socket")
export class Socket {
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, unique: true, nullable: true, comment: "socket_id" })
  socket_id: string;
  @Column({ length: 30, nullable: true,comment: "ip" })
  ip: string;
}
