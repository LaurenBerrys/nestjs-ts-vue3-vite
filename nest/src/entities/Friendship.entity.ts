/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 17:08:52
 * @LastEditTime: 2023-05-25 17:49:24
 * @Description: 
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
@Entity("Friendship")
export class Friendship{
    @ObjectIdColumn()
    id: string;
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