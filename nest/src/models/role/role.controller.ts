/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:51:20
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/role/role.controller.ts
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
  } from '@nestjs/common';
  import { ResponseData } from '../../interface/code';
  import { CreateRoleDto } from './role-create.dto';
  import { UpdateRoleDto } from './role-update';
  import { Role } from '../../entities/role.entity';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  @Controller('/role')
  export class RoleController {
    //记录日志
    private readonly logger = new Logger(RoleController.name);
    constructor(
      //InjectRepository用于注入Repository
      //Repository用于操作数据库
      @InjectRepository(Role)
      private readonly role: Repository<Role>,
    ) {}
    @Get()
    async findAll(): Promise<ResponseData> {
      this.logger.log('查询所有数据');
      const Data = new ResponseData();
      Data.code = 200;
      Data.msg = 'success';
      Data.data = await this.role.find();
      this.logger.debug('查询所有数据', Data.data.length);
      return Data;
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<ResponseData> {
      const event = await this.role.findOne(id);
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
    //create方法用于创建数据
    @Post()
    async create(@Body() input: CreateRoleDto): Promise<ResponseData> {
      const event = await this.role.save({
        ...input,
        when: new Date(),
      });
      const Data = new ResponseData();
      Data.code = 200;
      Data.msg = 'success';
      Data.data = event;
      return Data;
    }
    @Patch(':id')
    async update(
      @Param('id') id,
      @Body() input: UpdateRoleDto,
    ): Promise<ResponseData> {
      const data = await this.role.findOne(id);
      await this.role.save({
        ...data,
        ...input
      });
      const Data = new ResponseData();
      Data.code = 200;
      Data.msg = 'success';
      return Data;
    }
    @Delete(':id')
    async delete(@Param('id') id): Promise<ResponseData> {
      const Data = new ResponseData();
      Data.code = 200;
      Data.msg = 'success';
      const date = await this.role.findOne(id);
      await this.role.remove(date);
      return Data;
    }
  }
  