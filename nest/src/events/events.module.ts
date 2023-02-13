/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-10 17:42:41
 * @FilePath: /porject/src/events/events.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events.controller';
import { Event } from './events.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
})
export class EventsModule {}
