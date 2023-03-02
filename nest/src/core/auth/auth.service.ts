/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 15:48:15
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 16:09:31
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/auth/auth.service.ts
 * @Description: 
 * 
 */
// src/logical/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../../models/user/user-service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';
import { ResponseData } from 'src/interface/code';
import { User } from 'src/entities/user.entity';
import { RedisInstance } from '../redis';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly usersService: UserService,
    private readonly jwtService: JwtService) { }

  /**
   * @description  JWT验证 校验用户信息 
   * @param username  用户名
   * @param password  密码
   * @returns  状态200登陆成功,400密码错误，404用户不存在
   * @example ‘JWT验证 - Step 2: 校验用户信息’
   */
  async validateUser(username: string, password: string): Promise<ResponseData> {
    const Data = new ResponseData();
    const user = await this.user.findOneBy({ name: username});
    console.log(user);
    Data.data = user
    if (user) {
      const hashedPassword = user.password;
      const salt = user.salt;
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        // 密码正确
        Data.code = 200;
        Data.msg = '登录成功'
        return Data;
      } else {
        Data.code = 400;
        Data.msg = '密码错误'
        return Data;
      }
    }
    Data.code = 404;
    Data.msg = '查无此人'
    return Data;
  }
  /**
   * @description  生成 token
   * @param user \{name: string, id: number, realName: string, roles: string[]\}
   * @returns   \{access_token: string\}
   * @example ‘JWT验证 - Step 3: 处理 jwt 签证’
   */
  async certificate(user): Promise<ResponseData> {
    const payload = { name: user.name, sub: user.id, realName: user.realName };
    const Date = new ResponseData();
    try {
      const token = this.jwtService.sign(payload);
      // 实例化 redis
      const redis = await RedisInstance.initRedis('auth.certificate', 0);
      // 将用户信息和 token 存入 redis，并设置失效时间24h，语法：[key, seconds, value]
      await redis.setex(`${user.id}-${user.name}`, 86400, `${token}`);
      Date.code = 200;
      Date.msg = '登录成功'
      Date.data = { token };
      return Date;
    } catch (error) {
      Date.code = 400;
      Date.msg = '登录失败'
      console.log(error);
      
      return Date;
    }
  }
}