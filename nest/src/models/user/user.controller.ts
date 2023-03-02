/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 16:07:02
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user.controller.ts
 * @Description:
 *
 */
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
    UseInterceptors,
    UsePipes,
  } from '@nestjs/common';
  import { ResponseData } from '../../interface/code';
  import { CreateUserDto } from './user-create.dto';
  import { UpdateUserDto } from './user-update';
  import { UserService } from './user-service';
import { AuthService } from '../../core/auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
import { RbacInterceptor } from 'src/interceptor/rbac/rbac.interceptor';
import { ValidationPipe} from '../../pipe/validation/validation.pipe'
  @Controller('/user')
  export class UserController {
    constructor(private readonly authService: AuthService, private readonly usersService: UserService) {}
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(@Query() query) {
      return  await this.usersService.findAll(query);;
    }
    @UseGuards(AuthGuard('jwt'))
    @Get(':name')
    async findOne(@Param('name') name): Promise<ResponseData> {
      return await this.usersService.findOne(name);
    }

    @UsePipes(new ValidationPipe()) // 使用管道验证,验证传入的参数是否符合要求
    @Post()
    async create(@Body() input: CreateUserDto): Promise<ResponseData> {
      return this.usersService.create(input);
    }
    @UseInterceptors(new RbacInterceptor(0))
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(
      @Param('id') id,
      @Body() input: UpdateUserDto,
    ): Promise<ResponseData> {
     return  await this.usersService.update(id, input);
    }
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id): Promise<ResponseData> {
      return await this.usersService.delete(id);
    }
    @Post('login')
   async login(@Body() loginParma: any) {
    // console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(loginParma.name, loginParma.password);
    console.log(authResult,'authResult');
    if (authResult.code==200) {
        return this.authService.certificate(authResult.data);
    }
    return authResult;
   }
  }
  