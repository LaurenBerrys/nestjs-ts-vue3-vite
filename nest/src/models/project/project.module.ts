/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-12 12:22:07
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/role/role.module.ts
 * @Description:
 *
 */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectController } from "./project.controller";
import { Project } from "../../entities/project.entity";
import { ProjectService } from "./project.service";
@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
