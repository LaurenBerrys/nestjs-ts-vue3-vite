/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-20 10:38:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 10:40:19
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/interceptor/rbac/rbac.interceptor.ts
 * @Description: 
 * 
 */
// src/interceptor/rbac.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RbacInterceptor implements NestInterceptor {
  // role[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）
  constructor(private readonly role: number) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    if (req.user.roles> this.role) {
      throw new ForbiddenException('对不起，您无权操作');
    }
    return next.handle();
  }
}