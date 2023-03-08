/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-20 10:38:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-08 16:41:14
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/interceptor/rbac/rbac.interceptor.ts
 * @Description: 
 * 
 */
// src/interceptor/rbac.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

// 拦截器，根据用户角色判断是否有权限
@Injectable()
export class RbacInterceptor implements NestInterceptor {
  // role[用户角色]: admin-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）
  constructor(private readonly role: string) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    console.log('req.user.roles', req.user.roles)
    //req.user.roles里面存在this.role里面的角色，就说明有权限
    if (req.user.roles.indexOf(this.role) === -1) {
      throw new ForbiddenException('没有权限');
    }
    return next.handle();
  }
}