/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 16:35:55
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
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = await this.menulist.find();;
        this.logger.debug('查询所有数据', Data.data.length);
        return Data;
    }
    async create(input:CreateMenuListDto): Promise<ResponseData> {
        const Data = new ResponseData();
        await  this.menulist.save(input);
        Data.code = 200;
        Data.msg = 'success';
        return Data;
    }
    async update(name, input): Promise<ResponseData> {
        const data = await this.menulist.findOneBy({name});
        const menu={
            ...data,
            ...input
        }
        //更新数据
        await this.menulist.save(menu);
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = menu;
        return Data;
    }
    async delete(name): Promise<ResponseData> {
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        const date = await this.menulist.findOneBy({
            name
        });
        await this.menulist.remove(date);
        return Data
    }
}
