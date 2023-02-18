/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:48:08
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/role/role-update.ts
 * @Description: 
 * 
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuListDto } from './menu-list-create.dto';
export class UpdateMenuLisDto extends PartialType(CreateMenuListDto) {}
