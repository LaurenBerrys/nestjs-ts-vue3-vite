/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 11:35:39
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/menu-list/menu-list-controller.ts
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
    UseGuards,
  } from '@nestjs/common';
  import { ResponseData } from '../../interface/code';
  import { AuthGuard } from '@nestjs/passport';
  import { CreateMenuListDto } from './menu-list-create.dto';
  import { MenuListService } from './menu-list-service';
  import { UpdateMenuLisDto } from './menu-list-update';
  @Controller('/menu-list')
  export class MenuListController {
    constructor(
      private readonly MenuListService: MenuListService
    ) {}
    @Get()
    async findAll(): Promise<ResponseData> {
      return await this.MenuListService.findAll()
    }
    // @Get(':id')
    // async findOne(@Param('id') id): Promise<ResponseData> {
    // }
    //create方法用于创建数据
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() input: CreateMenuListDto): Promise<ResponseData> {
      return await this.MenuListService.create(input);
    }
    @Patch(':name')
    async update(
      @Param('name') name,
      @Body() input: UpdateMenuLisDto,
    ): Promise<ResponseData> {
      return await this.MenuListService.update(name, input);
    }
    @Delete(':name')
    async delete(@Param('name') name): Promise<ResponseData> {
      return await this.MenuListService.delete(name);
    }
  }
  