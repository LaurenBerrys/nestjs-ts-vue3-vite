/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 17:01:48
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-service.ts
 * @Description: 
 * 
 */
// src/logical/user/user.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuList } from 'src/entities/menu.entity';
import { User } from 'src/entities/user.entity';
import { ResponseData } from 'src/interface/code';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user-create.dto';

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);
    constructor(
        //InjectRepository用于注入Repository
        //Repository用于操作数据库
        @InjectRepository(User)
        private readonly user: Repository<User>,
        @InjectRepository(MenuList)
        private readonly menulist: Repository<MenuList>,
    ) { }
    async findAll(query): Promise<ResponseData> {
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = await this.user.find();
        let { page,pageSize} = query;
        let pageCount = await this.user.count();
        let list = await this.user.find({
          skip: (page-1)  * pageSize,
          take: pageSize,
        });
        Data.data = {
          pageSize,
          pageCount,
          list
        }
        return Data;
    }
    async findOne(name:string): Promise<ResponseData> {
        const event:any = await this.user.findOneBy({name});
        const Data = new ResponseData();
        if (!event) {
            Data.code = 404;
            Data.msg = 'not found';
            return Data;
        }
        if(event.roles===0){
            const menu = await this.menulist.find();
            event.menuList=menu;
        }
        Data.code = 200;
        Data.msg = 'success';
        Data.data = event;
        return Data;
    }
    async create(input:CreateUserDto): Promise<ResponseData> {
        const { repassed, password, name } = input
        console.log(input);
        const Data = new ResponseData();
        if (repassed !== password) {
            Data.code = 400;
            Data.msg = '两次密码不一致';
            return Data;
        }
        const user = await this.findOne(name);
        if (user.data) {
            Data.code = 400;
            Data.msg = '用户名已存在';
            return Data;
        }
        const salt = makeSalt(); // 制作密码盐
        const hashPassword = encryptPassword(password, salt); // 加密密码
        this.logger.debug(hashPassword);
        input.password = hashPassword
        input.salt=salt
        //将input对象中repassed属性剔除
        delete input.repassed;
        const event = await this.user.save({
            ...input,
            when: new Date(),
        });
        Data.code = 200;
        Data.msg = 'success';
        Data.data = event;
        return Data;
    }
    async update(id, input): Promise<ResponseData> {
        const data = await this.user.findOne(id);
        console.log(input,1111);
        const a={...data,...input}
        console.log(a,2222);
        await this.user.save({
            ...data,
            ...input
        });
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        return Data;
    }
    async delete(id): Promise<ResponseData> {
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        const date = await this.user.findOne(id);
        await this.user.remove(date);
        return Data
    }
}
