/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:26:44
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-27 17:15:07
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/config/orm.config.ts
 * @Description:
 *
 */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: 'nest',
    entities:  [ __dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: true,
  }),
);

