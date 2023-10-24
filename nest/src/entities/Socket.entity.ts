/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 16:22:13
 * @LastEditTime: 2023-05-25 16:53:54
 * @Description:
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("Socket")
export class Socket {
  @ObjectIdColumn()
  id: string;
  @Column({ length: 100, unique: true, nullable: true, comment: "socket_id" })
  socket_id: string;
  @Column({ length: 30, nullable: true,comment: "ip" })
  ip: string;
}
