/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-12 16:50:10
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
  Query,
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
  @Get("find")
  async find(@Query("name") name?: string ,@Query("code") code?: string ,@Query("id") id?: string ,@Query("page") page?, @Query("pageSize") pageSize?): Promise<ResponseData> {
    return await this.FormilyService.find(name,code,id,page,pageSize);
  }
  //create方法用于创建数据
  @ApiTags("创建表单数据")
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() input: any): Promise<ResponseData> {
    return await this.FormilyService.create(input);
  }
  // @UseGuards(AuthGuard("jwt"))
  @ApiTags("更新表单数据")
  @Patch("update")
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
