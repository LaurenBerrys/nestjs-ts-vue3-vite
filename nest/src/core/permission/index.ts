/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-18 17:02:37
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 16:09:36
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/permission/index.ts
 * @Description: 
 * 
 */
// src/guards/rbac.guard.ts
 import { CanActivate, ExecutionContext, Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common';
 import { RedisInstance } from '../redis/index';

@Injectable()
export class RbacGuard implements CanActivate {
  // role[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）
  constructor(private readonly role: number) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // 获取请求头里的 token
    const authorization = request['headers'].access_token || void 0;
    const token = authorization.split(' ')[1]; // authorization: Bearer xxx

    // 获取 redis 里缓存的 token
    const redis = await RedisInstance.initRedis('TokenGuard.canActivate', 0);
    const key = `${user.id}-${user.name}`;
    const cache = await redis.get(key);

    if (token !== cache) {
      // 如果 token 不匹配，禁止访问
      throw new UnauthorizedException('您的账号在其他地方登录，请重新登录');
    }

    if (user.role > this.role) {
      // 如果权限不匹配，禁止访问
      throw new ForbiddenException('对不起，您无权操作');
    }
    return true;
  }
}