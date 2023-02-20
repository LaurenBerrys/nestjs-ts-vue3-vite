/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 10:49:56
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-service.ts
 * @Description: 
 * 
 */
// src/logical/user/user.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    ) { }
    async findAll(): Promise<ResponseData> {
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = await this.user.find();
        this.logger.debug('查询所有数据', Data.data.length);
        return Data;
    }
    async findOne(name:string): Promise<ResponseData> {
        const event = await this.user.findOneBy({
            name
        });
        const Data = new ResponseData();
        if (!event) {
            Data.code = 404;
            Data.msg = 'not found';
            return Data;
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
    async update(name, input): Promise<ResponseData> {
        const data = await this.user.findOneBy({
            name
        });
        console.log(data,input,{...data,...input});
        await this.user.save({
            ...data,
            ...input,
            when: input.when ? new Date(input.when) : data.when,
        });
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        return Data;
    }
    async delete(name): Promise<ResponseData> {
        const Data = new ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        const date = await this.user.findOneBy({
            name
        });
        await this.user.remove(date);
        return Data
    }
}
