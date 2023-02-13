/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:34:33
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-13 17:17:34
 * @FilePath: /nest/src/config/orm.config.prod.ts
 * @Description: 
 * 
 */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Attendee } from 'src/events/attendee.entity';
import { Event } from '../events/events.entity';
export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: 'nest',
    entities: [Event, Attendee],
    useUnifiedTopology: true,
    synchronize: false, //关闭自动同步，生产环境下不建议开启
  }),
);
