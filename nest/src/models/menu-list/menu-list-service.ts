/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-22 10:44:38
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/menu-list/menu-list-service.ts
 * @Description: 
 * 
 */
// src/logical/user/user.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuList } from 'src/entities/menu.entity';
import { ResponseData } from 'src/interface/code';
import { Repository } from 'typeorm';
import { CreateMenuListDto } from './menu-list-create.dto';

@Injectable()
export class MenuListService {
    private readonly logger = new Logger(MenuListService.name);
    constructor(
        @InjectRepository(MenuList)
        private readonly menulist: Repository<MenuList>,
    ) { }
    async findAll(): Promise<ResponseData> {
        const Response = new ResponseData();
        Response.code = 200;
        Response.msg = 'success';
        Response.data = await this.menulist.find();;
        this.logger.debug('查询所有数据', Response.data.length);
        return Response;
    }
    async create(input:CreateMenuListDto): Promise<ResponseData> {
        const Response = new ResponseData();
        await  this.menulist.save(input);
        Response.code = 200;
        Response.msg = 'success';
        return Response;
    }
    async update(name, input): Promise<ResponseData> {
        const data = await this.menulist.findOneBy({name});
        const menu={
            ...data,
            ...input
        }
        //更新数据
        await this.menulist.save(menu);
        const Response = new ResponseData();
        Response.code = 200;
        Response.msg = 'success';
        Response.data = menu;
        return Response;
    }
    async delete(name): Promise<ResponseData> {
        const Response = new ResponseData();
        Response.code = 200;
        Response.msg = 'success';
        const date = await this.menulist.findOneBy({
            name
        });
        await this.menulist.remove(date);
        return Response
    }
}
