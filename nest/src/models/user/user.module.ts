/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 17:36:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 15:57:18
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/models/user/user.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from '../../entities/user.entity';
import { UserService } from './user-service';
import { MenuList } from 'src/entities/menu.entity';
import { Role } from 'src/entities/role.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([MenuList]),
  TypeOrmModule.forFeature([Role])
],
  // controllers: [UserController],
  providers: [UserService,MenuList],
  exports: [UserService],
})
export class UserModule {
}
