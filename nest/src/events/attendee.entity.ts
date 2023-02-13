import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ObjectIdColumn,
} from 'typeorm';
import { Event } from './events.entity';
@Entity('Attendee')
export class Attendee {
  @ObjectIdColumn()
  id: number;
  @Column({
    comment: '姓名',
  })
  name: string;
  //多对一关系
  @ManyToOne(() => Event, (event) => event.attendees, {
    nullable: false,
  })
  @JoinColumn({
    name: 'event_id',
  })
  event: Event;
}
