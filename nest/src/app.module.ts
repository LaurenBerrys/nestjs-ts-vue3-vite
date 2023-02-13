/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:07:23
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-13 17:18:28
 * @FilePath: /nest/src/app.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import { EventsModule } from './events/events.module';
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
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
