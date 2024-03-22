/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:26:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-19 17:25:37
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
    // url: 'mongodb://root:1235@0.0.0.0/nest?authSource=admin',
    entities:  [ __dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: true,
  }),
);

