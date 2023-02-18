/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:07:23
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 17:34:25
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/main.ts
 * @Description: 
 * 
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

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
  
  app.setGlobalPrefix('nest-api')
  await app.listen(3000);
}
bootstrap();
