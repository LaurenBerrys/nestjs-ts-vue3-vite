/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:42
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 14:30:21
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-create.dto.ts
 * @Description: 
 * 
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  @Length(3, 20)
  @IsNotEmpty({ message: '用户名不能为空'})
  name: string;
  @ApiProperty({ description: '密码', example: 'admin' })
  @Length(3, 255)
  @IsNotEmpty({ message: '密码不能为空'})
  password: string;
  @Length(3, 255)
  @IsNotEmpty({ message: '确认密码不能为空'})
  repassed: string;
  @Length(3, 255)
  @IsNotEmpty({ message: '昵称不能为空'})
  realName: string;
  salt?: string;
  when?: string;
  roles?: Array<string>;
}
