/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 17:26:42
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 14:20:28
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/menu-list/menu-list-create.dto.ts
 * @Description: 
 * 
 */
import { IsDateString, Length } from 'class-validator';
import { MenuList } from '../../entities/menu.entity';
export class CreateMenuListDto {
    @Length(3, 20)
    name: string;
    @Length(3, 255)
    path: string;
    @Length(3, 255)
    icon: string;
    @Length(3, 255)
    component: string;
    @Length(3, 255)
    redirect?: string;
    @Length(3, 255)
    title: string;
    keepAlive?: boolean;
    @Length(3, 255)
    hidden?: boolean;
    @Length(3, 255)
    parentId?: string;
    @Length(3, 255)
    order?: number;
    @Length(3, 255)
    code: string;
    permissions?: Array<string>;
    alwaysShow?: boolean;
    children?: Array<MenuList>;
}
