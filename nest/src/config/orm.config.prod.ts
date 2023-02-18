/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:34:33
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:51:07
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/config/orm.config.prod.ts
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
    entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: false, //关闭自动同步，生产环境下不建议开启
  }),
);
