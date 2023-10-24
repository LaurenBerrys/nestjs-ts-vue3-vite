/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:07:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-01 17:25:00
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/app.module.ts
 * @Description:
 *
 */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import ormConfig from "./config/orm.config";
import ormConfigProd from "./config/orm.config.prod";
import { UserModule } from "./models/user/user.module";
import { RoleModule } from "./models/role/role.module";
import { MenuListModule } from "./models/menu-list/menu-list.module";
import { AuthModule } from "./core/auth/auth.module";
import { UserController } from "./models/user/user.controller";
import { MenuListController } from "./models/menu-list/menu-list-controller";
import { FileModule } from "./models/file/file.module";
import { FormilyModule } from "./models/formily/formily.module";
import WebSocketClient from "./websockt/websockt";
@Module({
  imports: [
    //配置文件-环境变量
    ConfigModule.forRoot({
      isGlobal: true,
      //加载配置文件
      load: [ormConfig],

      expandVariables: true, //支持子变量
    }),
    //连接mongdb云数据库
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
      // process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
      //根据环境来加载配置文件
    }),
    UserModule,
    AuthModule,
    RoleModule,
    MenuListModule,
    FileModule,
    FormilyModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, WebSocketClient],
})
export class AppModule {}
