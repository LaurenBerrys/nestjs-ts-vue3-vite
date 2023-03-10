/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-08 16:34:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-11 03:02:28
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/file/file.controller.ts
 * @Description: 
 * 
 */
import { Body, Controller, Get, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';
import {AuthGuard} from '@nestjs/passport';
import { ResponseData } from 'src/interface/code';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('文件上传')
@Controller('chunk')
export class FileController {
    constructor(private readonly uploadService: FileService) {}
    @ApiTags('检查文件是否上传')
    @Post('checkChunk')
    @UseGuards(AuthGuard('jwt'))
   async  checkChunk(@Body() req):Promise<ResponseData> {
        return  await this.uploadService.checkChunk(req);
    }
    @ApiTags('上传分片')
    @Post('upload')
    @UseGuards(AuthGuard('jwt'))
     async uploadChunk(@Req() body:any) {
        return await this.uploadService.uploadChunk(body);
    }
    @ApiTags('合并分片')
    @Post('merge')
    @UseGuards(AuthGuard('jwt'))
   async merageChuank(@Body() body:any) {
        return await this.uploadService.merageChuank(body);
    }
}