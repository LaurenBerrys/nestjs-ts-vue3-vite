/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-22 10:43:22
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/role/role.controller.ts
 * @Description:
 *
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ResponseData } from "../../interface/code";
import { CreateRoleDto } from "./role-create.dto";
import { UpdateRoleDto } from "./role-update";
import { Role } from "../../entities/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
@Controller("/role")
export class RoleController {
  //记录日志
  private readonly logger = new Logger(RoleController.name);
  constructor(
    //InjectRepository用于注入Repository
    //Repository用于操作数据库
    @InjectRepository(Role)
    private readonly role: Repository<Role>
  ) {}
  @Get()
  async findAll(
    @Query("pageSize") pageSize,
    @Query("page") page
  ): Promise<ResponseData> {
    const Response = new ResponseData();
    Response.code = 200;
    Response.msg = "success";
    Response.data = await this.role.find();
    //总数量
    let pageCount = await this.role.count();
    pageCount = Math.ceil(pageCount / pageSize);
    //将pageSize转成正整数
    pageSize = parseInt(pageSize);
    page = parseInt(page);
    //pageSize是分页大小,
    let list = await this.role.find({
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
  @Get(":id")
  async findOne(@Param("id") id): Promise<ResponseData> {
    const event = await this.role.findOne(id);
    const Response = new ResponseData();
    if (!event) {
      Response.code = 404;
      Response.msg = "not found";
      return Response;
    }
    Response.code = 200;
    Response.msg = "success";
    Response.data = event;
    return Response;
  }
  //create方法用于创建数据
  @Post()
  async create(@Body() input: CreateRoleDto): Promise<ResponseData> {
    const event = await this.role.save({
      ...input,
    });
    const Response = new ResponseData();
    Response.code = 200;
    Response.msg = "success";
    Response.data = event;
    return Response;
  }
  @Patch(":id")
  async update(
    @Param("id") id,
    @Body() input: UpdateRoleDto
  ): Promise<ResponseData> {
    try {
      const data = await this.role.find({
        where: {
          id,
        },
      });
      console.log(data,'datadata')
      for (const key in input) {
          data[0][key] = input[key];
      }
      await this.role.save(data);
      const Response = new ResponseData();
      Response.code = 200;
      Response.msg = "success";
      return Response;
    } catch (error) {
      console.log(error);
    }
  }
  @Delete(":id")
  async delete(@Param("id") id): Promise<ResponseData> {
    const Response = new ResponseData();
    Response.code = 200;
    Response.msg = "success";
    const date = await this.role.findOne(id);
    await this.role.remove(date);
    return Response;
  }
}
