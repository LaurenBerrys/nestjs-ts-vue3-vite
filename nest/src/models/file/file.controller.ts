import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';
import {AuthGuard} from '@nestjs/passport';

@ApiTags('文件上传')
@Controller('chunk')
export class FileController {
    constructor(private readonly uploadService: FileService) {}

    @Get('checkChunk')
    @UseGuards(AuthGuard('jwt'))
    checkChunk(@Req() req, @Res() res) {
        return this.uploadService.checkChunk(req, res);
    }

    @Get('checkFile')
    @UseGuards(AuthGuard('jwt'))
    checkFile(@Req() req, @Res() res) {
        return this.uploadService.checkFile(req, res);
    }

    @Post('upload')
    @UseGuards(AuthGuard('jwt'))
    uploadChunk(@Req() req, @Res() res) {
      console.log(req,res)
        return this.uploadService.uploadChunk(req, res);
    }

    @Get('merge')
    @UseGuards(AuthGuard('jwt'))
    merageChuank(@Req() req, @Res() res) {
        return this.uploadService.merageChuank(req, res);
    }
}