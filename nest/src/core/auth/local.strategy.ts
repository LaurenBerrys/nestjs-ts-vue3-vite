/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 15:49:57
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 11:33:01
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/auth/local.strategy.ts
 * @Description: 
 * 
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(name: string, password: string): Promise<any> {
    // 本地local的策略于jwt关系不大，
    console.log('你要调用我哈------------');
    const user = await this.authService.validateUser(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}