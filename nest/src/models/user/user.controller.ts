/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 16:43:51
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
  } from '@nestjs/common';
  import { ResponseData } from '../../interface/code';
  import { CreateUserDto } from './user-create.dto';
  import { UpdateUserDto } from './user-update';
  import { UserService } from './user-service';
import { AuthService } from '../../core/auth/auth.service';
  @Controller('/user')
  export class UserController {
    constructor(private readonly authService: AuthService, private readonly usersService: UserService) {}
    @Get()
    async findAll() {
      return  await this.usersService.findAll();;
    }
    @Get(':name')
    async findOne(@Param('name') name): Promise<ResponseData> {
      return await this.usersService.findOne(name);
    }
    @Post()
    async create(@Body() input: CreateUserDto): Promise<ResponseData> {
      return this.usersService.create(input);
    }
    @Patch(':name')
    async update(
      @Param('name') name,
      @Body() input: UpdateUserDto,
    ): Promise<ResponseData> {
     return  await this.usersService.update(name, input);
    }
    @Delete(':id')
    async delete(@Param('id') id): Promise<ResponseData> {
      return await this.usersService.delete(id);
    }
    @Post('login')
   async login(@Body() loginParma: any) {
    // console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(loginParma.name, loginParma.password);
    if (authResult.code==200) {
        return this.authService.certificate(authResult.data);
    }
    return authResult;
   }
  }
  