/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:26:44
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-13 17:18:03
 * @FilePath: /nest/src/config/orm.config.ts
 * @Description:
 *
 */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Event } from '../events/events.entity';
import { Attendee } from '../events/attendee.entity';
console.log(process.env.DB_URL);
export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: 'nest',
    entities: [Event, Attendee],
    useUnifiedTopology: true,
    synchronize: true,
  }),
);
