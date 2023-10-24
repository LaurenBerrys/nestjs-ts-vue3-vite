/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:34:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-16 14:51:59
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/config/orm.config.prod.ts
 * @Description: 
 * 
 */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log(process.env.DB_URL,'process.env.DB_URL');

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: 'mongodb://root:1235@0.0.0.0/nest?authSource=admin',
    database: 'nest',
    entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: true, //关闭自动同步，生产环境下不建议开启
  }),
);
