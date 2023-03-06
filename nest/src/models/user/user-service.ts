/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-04 11:26:28
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-service.ts
 * @Description: 
 * 
 */
// src/logical/user/user.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuList } from 'src/entities/menu.entity';
import { Role } from 'src/entities/role.entity';
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
        @InjectRepository(Role)
        private readonly role: Repository<Role>,
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
        if(event.name!=='admin'){
        //event.roles是一个数组，数组中存放的是角色id，现在要根据角色id找到队友的code
        let roleCode = [];
        const permissions=[]
        for (let i = 0; i < event.roles.length; i++) {
            const role = await this.role.findOne(event.roles[i]);
            roleCode.push(...role.code);
            permissions.push(...role.permissions)
        }
        event.permissions=permissions
        event.menuList=[]
        roleCode = [...new Set(roleCode)];
        //根据角色code找到对应的菜单
        for (let index = 0; index < roleCode.length; index++) {
            //根据角色code找到对应的菜单
            const menu = await this.menulist.findOne({
                select:{
                    code:true
                },
                where:{
                    code:roleCode[index]
                }
                });
             event.menuList.push(menu);
         }
        }else{
            event.menuList=await this.menulist.find();
            event.permissions= await this.role.find();
            //event.permissions是一个数组，数组中code也是一个数组，现在要将code数组中的code提取出来等于一个数组
            let roleCode = [];
            for (let i = 0; i < event.permissions.length; i++) {
                roleCode.push(...event.permissions[i].code);
            }
            roleCode = [...new Set(roleCode)];
            event.permissions=roleCode
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
