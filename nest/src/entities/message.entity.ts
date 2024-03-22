/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 16:22:13
 * @LastEditTime: 2024-03-12 14:50:09
 * @Description:
 */
import { Entity, Column, ObjectIdColumn,PrimaryGeneratedColumn, OneToMany } from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("Chat")
export class Chat {
  // @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100,comment: "发送者id"})
  fromId: string;
  @Column({ length: 100,comment: "接收者id"})
  toId: string;
  @Column({width: 1,comment: "消息类型"})
  type: number;
  @Column({ type: "text",comment: "消息内容"})
  content: string;
  @Column({length: 20,comment: "消息内容类型"})
  contentType: string;
  @Column({ comment: "时间" })
  createdTime:Date;
  @Column({ comment: "消息状态" })
  state: number;
}
