/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-02-09 19:07:23
 * @LastEditTime: 2024-03-12 15:50:18
 * @Description:
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
import { ProjectModule } from "./models/project/project.module";
import { EntityModule } from "./models/entity/entity.module";
import WebSocketClient from "./websockt/websockt";
@Module({
  imports: [
    //配置文件-环境变量
    ConfigModule.forRoot({
      isGlobal: true,
      //加载配置文件
      load: [ormConfigProd],
      expandVariables: true, //支持子变量
    }),
    //连接mongdb云数据库
    TypeOrmModule.forRootAsync({
      useFactory: ormConfigProd,
      // process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
      //根据环境来加载配置文件
    }),
    UserModule,
    AuthModule,
    RoleModule,
    MenuListModule,
    FileModule,
    FormilyModule,
    ProjectModule,
    EntityModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, WebSocketClient],
})
export class AppModule {}
