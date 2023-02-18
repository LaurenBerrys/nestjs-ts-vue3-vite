/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 14:24:52
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from '../../entities/user.entity';
import { UserService } from './user-service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
}
