/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:35:42
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/user/update-user.ts
 * @Description: 
 * 
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './user-create.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    repassed: string;
}
