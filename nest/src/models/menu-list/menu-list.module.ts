/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-17 11:53:24
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/menu-list/menu-list.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuListController } from './menu-list-controller';
import { MenuList } from '../../entities/menu-entity';
@Module({
  imports: [TypeOrmModule.forFeature([MenuList])],
  controllers: [MenuListController],
})
export class MenuListModule {

}
