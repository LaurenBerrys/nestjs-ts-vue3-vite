/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:07:23
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 09:30:56
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/app.controller.spec.ts
 * @Description: 
 * 
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
