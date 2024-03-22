/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-12-27 18:04:29
 * @LastEditTime: 2024-03-21 17:00:25
 * @Description: 
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ResponseData } from "../../interface/code";
import { AuthGuard } from "@nestjs/passport";
import { EntityService } from "./entity.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("项目表相关接口")
@Controller("/Entity")
export class EntityController {
  constructor(private readonly EntityService: EntityService) {}
  @ApiTags("分页查询表")
  @UseGuards(AuthGuard("jwt"))
  @Get("findTable")
  async findTable(@Req() {query}: any): Promise<ResponseData> {
    return await this.EntityService.find(query);
  }
  @ApiTags("查询表详情")
  // @UseGuards(AuthGuard("jwt"))
  @Get("findTableInfo")
  async findTableInfo(@Query("name") name: string): Promise<ResponseData> {
    return await this.EntityService.findInfo(name);
  }
  //create方法用于创建数据
  @ApiTags("创建表")
  @UseGuards(AuthGuard("jwt"))
  @Post("/createEntity")
  async createTable(@Body() input: any): Promise<ResponseData> {
    return await this.EntityService.createTable(input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("更新项目")
  @Patch(":name")
  async update(@Param("name") name, @Body() input: any): Promise<ResponseData> {
    return await this.EntityService.update(name, input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("删除项目")
  @Delete(":name")
  async delete(@Param("name") name): Promise<ResponseData> {
    return await this.EntityService.delete(name);
  }
}
