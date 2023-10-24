/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-01 17:50:18
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/menu-list/menu-list-controller.ts
 * @Description:
 *
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ResponseData } from "../../interface/code";
import { AuthGuard } from "@nestjs/passport";
import { FormilyService } from "./formily.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("表单设计器")
@Controller("/formily")
export class FormilyController {
  constructor(private readonly FormilyService: FormilyService) {}
  @UseGuards(AuthGuard("jwt"))
  @Get(":ids")
  async findOne(@Param("ids") id:string): Promise<ResponseData> {
    return await this.FormilyService.findOne(id);
  }
  //create方法用于创建数据
  @ApiTags("创建表单数据")
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() input: any): Promise<ResponseData> {
    return await this.FormilyService.create(input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("更新表单数据")
  @Patch(":id")
  async update(@Param("id") id, @Body() input: any): Promise<ResponseData> {
    return await this.FormilyService.update(id, input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("删除表单数据")
  @Delete(":id")
  async delete(@Param("id") id): Promise<ResponseData> {
    return await this.FormilyService.delete(id);
  }
}
