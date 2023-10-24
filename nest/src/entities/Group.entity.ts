/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 17:14:09
 * @LastEditTime: 2023-05-25 17:19:02
 * @Description: 
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
@Entity("Group")
export class Group{
    @ObjectIdColumn()
    id: string;
    @Column({ comment: "群名称" })
    name:string;
    @Column({ comment: "管理者ID" })
    managerId:string;
    @Column({ comment: "群头像" })
    avatar:string;
    @Column({ comment: "创群时间" })
    time:Date;
    @Column({ comment: "群类型" })
    type:number;
}