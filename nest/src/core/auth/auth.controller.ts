/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 15:47:51
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 14:57:41
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/auth/auth.controller.ts
 * @Description: 
 * 
 */

import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export default  class AuthController{
    constructor(private  authService: AuthService  ){
    }
     // 开始验证和加密
  // console.log('JWT验证 - Step 1: 用户请求登录');
  @Post('login')
  async login(@Body() loginParams: any) {
    const value = await this.authService.validateUser(loginParams.name, loginParams.password);
    if(value.data.code==200){
        return this.authService.certificate(value.data.user);
    }
    return value;
  }
}