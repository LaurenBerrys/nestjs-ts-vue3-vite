/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 14:15:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-22 10:43:09
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user-service.ts
 * @Description:
 *
 */
// src/logical/user/user.service.ts
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MenuList } from "src/entities/menu.entity";
import { Role } from "src/entities/role.entity";
import { User } from "src/entities/user.entity";
import { ResponseData } from "src/interface/code";
import { encryptPassword, makeSalt } from "src/utils/cryptogram";
import { Repository } from "typeorm";
import { CreateUserDto } from "./user-create.dto";
import { isArray } from "class-validator";

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
    private readonly role: Repository<Role>
  ) {}
  async findAll(page, pageSize): Promise<ResponseData> {
    pageSize = parseInt(pageSize);
    page = parseInt(page);
    const Response = new ResponseData();
    Response.code = 200;
    Response.msg = "success";
    Response.data = await this.user.find();
    let pageCount = await this.user.count();
    pageCount = Math.ceil(pageCount / pageSize);

    let list = await this.user.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    Response.data = {
      pageSize,
      pageCount,
      list,
    };
    return Response;
  }
  async findOne(name: string): Promise<ResponseData> {
    const event: any = await this.user.findOneBy({ name });
    const Response = new ResponseData();
    if (!event) {
      Response.code = 404;
      Response.msg = "not found";
      return Response;
    }
    if (event.name !== "admin") {
      //event.roles是一个数组，数组中存放的是角色id，现在要根据角色id找到队友的code
      let roleCode = [];
      const permissions = [];
      for (let i = 0; i < event.roles.length; i++) {
        const role = await this.role.findOne(event.roles[i]);
        roleCode.push(...role.code);
        permissions.push(...role.code, ...role.permissions);
      }
      event.menuList = [];
      roleCode = [...new Set(roleCode)];
      //根据角色code找到对应的菜单
      for (let index = 0; index < roleCode.length; index++) {
        //根据角色code找到对应的菜单
        const menu = await this.menulist.findOne({
          select: {
            code: true,
          },
          where: {
            code: roleCode[index],
          },
        });
        if (menu.permissions) {
          permissions.push(...menu.permissions);
        }
        event.menuList.push(menu);
      }
      event.permissions = [...new Set(permissions)];
    } else {
      event.menuList = await this.menulist.find();
      console.log(event.menuList,'event.menuList')
      event.permissions = await this.role.find();
      //event.permissions是一个数组，数组中code也是一个数组，现在要将code数组中的code提取出来等于一个数组
      let roleCode = [];
      for (let i = 0; i < event.permissions.length; i++) {
        if (event.permissions[i].code && isArray(event.permissions[i].code)) {
          roleCode.push(...event.permissions[i].code);
        }
      }
      roleCode = [...new Set(roleCode)];
      event.permissions = roleCode;
    }
    Response.code = 200;
    Response.msg = "success";
    Response.data = event;
    return Response;
  }
  async create(input: CreateUserDto): Promise<ResponseData> {
    const { repassed, password, name } = input;
    console.log(input);
    const Response = new ResponseData();
    if (repassed !== password) {
      Response.code = 400;
      Response.msg = "两次密码不一致";
      return Response;
    }
    const user = await this.findOne(name);
    if (user.data) {
      Response.code = 400;
      Response.msg = "用户名已存在";
      return Response;
    }
    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPassword(password, salt); // 加密密码
    input.password = hashPassword;
    input.salt = salt;
    this.logger.debug(hashPassword);
    //将input对象中repassed属性剔除
    delete input.repassed;
    const event = await this.user.save({
      ...input,
      when: new Date(),
    });
    Response.code = 200;
    Response.msg = "success";
    Response.data = event;
    return Response;
  }
  async update(id, input): Promise<ResponseData> {
    try {
      const data = await this.user.findOneBy({id});
      const a = { ...data, ...input };
      console.log(a, 2222);
      await this.user.save(a);
      const Response = new ResponseData();
      Response.code = 200;
      Response.msg = "success";
      return Response;
    } catch (error) {
      console.log(error)
    }
  }
  async delete(id): Promise<ResponseData> {
    const Response = new ResponseData();
    Response.code = 200;
    Response.msg = "success";
    const date = await this.user.findOne(id);
    await this.user.remove(date);
    return Response;
  }
  //检查用户是否存在
  async checkUserExistence<T>(checkOption: T): Promise<boolean> {
    const count = await this.user.count(checkOption);
    return count == 0 ? false : true;
  }
}
