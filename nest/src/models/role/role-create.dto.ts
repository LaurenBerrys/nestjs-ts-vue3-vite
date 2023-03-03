/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:42
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 14:22:34
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/role/role-create.dto.ts
 * @Description: 
 * 
 */
import { IsDateString, IsNotEmpty, Length } from 'class-validator';
export class CreateRoleDto {
  @Length(0, 20)
  @IsNotEmpty({ message: '角色名不能为空'})
  name: string;
  @IsNotEmpty({ message: '菜单权限不能为空'})
  code?:Array<string>;
  permissions?: Array<string>;
}
