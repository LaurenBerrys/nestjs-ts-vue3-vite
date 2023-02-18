/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-17 15:48:02
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 17:28:29
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/auth/auth.module.ts
 * @Description: 
 * 
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/models/user/user-service';
import { UserModule } from 'src/models/user/user.module';
import AuthController from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }), // 设置默认的策略
      JwtModule.register({
        secret: jwtConstants.secret, // 就是成常量里来的
        signOptions: { expiresIn: '24h' }, // token 过期时效
      }),
      UserModule,
    ],
    controllers: [AuthController],
    providers: [ LocalStrategy, JwtStrategy,AuthService],
    exports: [AuthService],
  })
export class AuthModule {}
  