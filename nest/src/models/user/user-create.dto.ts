/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:42
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 16:51:10
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-create.dto.ts
 * @Description: 
 * 
 */
import { IsDateString, IsNotEmpty, Length } from 'class-validator';
import { Role } from '../../entities/role.entity';
export class CreateUserDto {
  @Length(3, 20)
  @IsNotEmpty({ message: '用户名不能为空'})
  name: string;
  @Length(3, 255)
  @IsNotEmpty({ message: '密码不能为空'})
  password: string;
  @Length(3, 255)
  @IsNotEmpty({ message: '确认密码不能为空'})
  repassed: string;
  @Length(3, 255)
  @IsNotEmpty({ message: '昵称不能为空'})
  realName: string;
  @IsDateString() //校验是否是日期格式字符串
  when?: string;
  salt?: string;
  roles?:number;
}
