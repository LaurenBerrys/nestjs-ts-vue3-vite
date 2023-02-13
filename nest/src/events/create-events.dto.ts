/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 20:09:50
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-10 17:34:34
 * @FilePath: /porject/src/dto/create-events.ts
 * @Description:
 *
 */
import { IsDateString, Length } from 'class-validator';
export class CreateEventsDto {
  @Length(3, 20)
  name: string;
  @Length(3, 255)
  description: string;
  @IsDateString() //校验是否是日期格式字符串
  when?: string;
  address: string;
}
