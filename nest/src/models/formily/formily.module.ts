/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-07 16:06:55
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/role/role.module.ts
 * @Description:
 *
 */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FormilyController } from "./formily.controller";
import { Formily } from "../../entities/Formily.entity";
import { FormilyService } from "./formily.service";
@Module({
  imports: [TypeOrmModule.forFeature([Formily])],
  controllers: [FormilyController],
  providers: [FormilyService],
})
export class FormilyModule {}
