/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:07:23
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 17:28:59
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/main.ts
 * @Description: 
 * 
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { AppModule } from './app.module';
import { logger } from './logger/logger.middleware';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor'
import { HttpExceptionFilter } from './filter/http-exception/http-exception.filter';
import { AllExceptionsFilter } from './filter/any-exception/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  //配置swagger
  const options = new DocumentBuilder()
    .setTitle('Nest zero to one')
    .setDescription('The nest-zero-to-one API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('index', app, document);
    
  //配置全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  //配置全局过滤器
   app.useGlobalFilters(new AllExceptionsFilter()) //全局异常过滤器
   app.useGlobalFilters(new HttpExceptionFilter()) //全局http异常过滤器
  //配置全局日志中间件
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(logger);
  //配置跨域
  app.enableCors();
  //配置全局前缀
  app.setGlobalPrefix('nest-api')
  await app.listen(3000);
}
bootstrap();
