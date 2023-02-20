/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-20 10:24:01
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 10:24:16
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/filter/any-exception/any-exception.filter.ts
 * @Description: 
 * 
 */
// src/filter/any-exception.filter.ts
/**
 * 捕获所有异常
 */
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Logger } from '../../utils/log';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    `;
    Logger.error(logFormat);
    response.status(status).json({
      statusCode: status,
      msg: `Service Error: ${exception}`,
    });
  }
}