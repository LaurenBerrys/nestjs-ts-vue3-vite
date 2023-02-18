/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-17 11:58:47
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/menu-list/menu-list-controller.ts
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
  import { CreateMenuListDto } from './menu-list-create.dto';
  import { UpdateMenuLisDto } from './menu-list-update';
  import { MenuList } from '../../entities/menu-entity';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  @Controller('/role')
  export class MenuListController {
    //记录日志
    private readonly logger = new Logger(MenuListController.name);
    constructor(
      //InjectRepository用于注入Repository
      //Repository用于操作数据库
      @InjectRepository(MenuList)
      private readonly menuList: Repository<MenuList>,
    ) {}
    @Get()
    async findAll(): Promise<ResponseData> {
      this.logger.log('查询所有数据');
      const Data = new ResponseData();
      Data.code = 200;
      Data.msg = 'success';
      Data.data = await this.menuList.find();
      this.logger.debug('查询所有数据', Data.data.length);
      return Data;
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<ResponseData> {
      const event = await this.menuList.findOne(id);
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
    async create(@Body() input: CreateMenuListDto): Promise<ResponseData> {
      const event = await this.menuList.save({
        ...input
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
      @Body() input: UpdateMenuLisDto,
    ): Promise<ResponseData> {
      const data = await this.menuList.findOne(id);
      await this.menuList.save({
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
      const date = await this.menuList.findOne(id);
      await this.menuList.remove(date);
      return Data;
    }
  }
  