/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-25 17:45:09
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
import { ProjectService } from "./project.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("项目")
@Controller("/Project")
export class ProjectController {
  constructor(private readonly ProjectService: ProjectService) {}
  @ApiTags("查找所有项目")
  @UseGuards(AuthGuard("jwt"))
  @Get("findAll")
  async findAll(@Query("page") page, @Query("pageSize") pageSize) {
    return await this.ProjectService.findAll(page, pageSize);
  }
  @ApiTags("查找指定项目")
  @UseGuards(AuthGuard("jwt"))
  @Get("find")
  async find(@Query("name") name: string ,@Query("page") page, @Query("pageSize") pageSize): Promise<ResponseData> {
    return await this.ProjectService.find(name,page,pageSize);
  }
  //create方法用于创建数据
  @ApiTags("创建项目")
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Body() input: any): Promise<ResponseData> {
    return await this.ProjectService.create(input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("更新项目")
  @Patch(":id")
  async update(@Param("id") id, @Body() input: any): Promise<ResponseData> {
    return await this.ProjectService.update(id, input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("删除项目")
  @Delete(":id")
  async delete(@Param("id") id): Promise<ResponseData> {
    return await this.ProjectService.delete(id);
  }
}
