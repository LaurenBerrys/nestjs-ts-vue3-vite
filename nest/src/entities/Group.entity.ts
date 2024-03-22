/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-05-25 17:14:09
 * @LastEditTime: 2024-03-20 15:35:27
 * @Description: 
 */
import { Entity, Column, ObjectIdColumn,PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity("Grouper", { comment: "群组" })
export class Grouper{
    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;
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