/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:50:22
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/role/role.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { Role } from '../../entities/role.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
})
export class RoleModule {

}
