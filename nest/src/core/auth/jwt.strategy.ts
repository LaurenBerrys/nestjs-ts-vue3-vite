/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 15:48:59
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 16:39:50
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/auth/jwt.strategy.ts
 * @Description: 
 * 
 */
// src/logical/auth/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      //‘Authorization’是请求头中的key
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  
  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: any) {
    console.log(`JWT验证 - Step 4: 被守卫调用`);
    return { userId: payload.sub, name: payload.name, realName: payload.realName, roles: payload.roles };
  }
}