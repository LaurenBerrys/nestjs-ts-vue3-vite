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
import { ApiTags } from "@nestjs/swagger";
import { PagesService } from "./pages.service";
@ApiTags("项目表相关接口")
@Controller("/pages")
export class PagesController {
  constructor(private readonly PagesService: PagesService) {}
  @ApiTags("分页查询页面")
  @UseGuards(AuthGuard("jwt"))
  @Get("findPages")
  async findTable(@Req() { query }: any): Promise<ResponseData> {
    return await this.PagesService.find(query);
  }
  @ApiTags("查询表详情")
  // @UseGuards(AuthGuard("jwt"))
  @Get("findPagesInfo")
  async findTableInfo(@Query("name") name: string): Promise<ResponseData> {
    return await this.PagesService.findInfo(name);
  }
  //create方法用于创建数据
  @ApiTags("创建表")
  @UseGuards(AuthGuard("jwt"))
  @Post("/createPages")
  async createTable(@Body() data: any): Promise<ResponseData> {
    return await this.PagesService.createTable(data);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("更新项目")
  @Patch(":id")
  async update(@Param("id") id, @Body() input: any): Promise<ResponseData> {
    return await this.PagesService.update(id, input);
  }
  @UseGuards(AuthGuard("jwt"))
  @ApiTags("删除项目")
  @Delete(":id")
  async delete(@Param("id") id): Promise<ResponseData> {
    return await this.PagesService.delete(id);
  }
}
