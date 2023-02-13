/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-13 16:37:53
 * @FilePath: /porject/src/events/events.entity.ts
 * @Description:
 *
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Attendee } from './attendee.entity';
//每个实体对应的就是数据库中的表
@Entity('Event')
export class Event {
  //主键
  @ObjectIdColumn()
  id: number;
  @Column({ length: 100, comment: '姓名' })
  name: string;
  @Column({ comment: '描述' })
  description: string;
  @Column({ comment: '时间' })
  when: Date;
  @Column({ comment: '密钥' })
  address: string;
  //一对多关系
  @OneToMany(() => Attendee, (attendee) => attendee.event)
  attendees: Attendee[];
}
