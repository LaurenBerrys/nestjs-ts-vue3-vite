/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 17:08:52
 * @LastEditTime: 2024-03-12 14:49:59
 * @Description: 
 */
import { Entity, Column, ObjectIdColumn,PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity("Friendship")
export class Friendship{
    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ comment: "接收者id" })
    toId: string;
    @Column({ comment: "添加好友时间" })
    addTime:Date;
    @Column({ comment: "同意好友时间" })
    agreeTime:Date;
    @Column({ comment: "好友状态" })
    state:number;
    @Column({ comment: "好友类型" })
    type:number;
    @Column({ comment: "是否置顶" })
    topIf:boolean;
}