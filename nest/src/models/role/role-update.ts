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
import { CreateRoleDto } from './role-create.dto';
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
