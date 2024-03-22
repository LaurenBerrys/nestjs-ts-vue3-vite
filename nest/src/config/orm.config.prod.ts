/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 15:34:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-20 16:23:24
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/config/orm.config.prod.ts
 * @Description:
 *
 */
import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default registerAs(
  "orm.config",
  (): TypeOrmModuleOptions => ({
    type: "mysql",
    // host: "localhost",
    host: "120.77.83.106",
    username: "admin",
    password: "Admin@123456",
    database: "nest",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
    synchronize: false, // 实体与表同步 调试模式下开始。不然会有强替换导致数据丢是
  })
);
