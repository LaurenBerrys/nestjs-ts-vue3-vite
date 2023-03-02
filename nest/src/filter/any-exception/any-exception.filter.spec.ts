/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-20 10:24:01
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 16:06:26
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/filter/any-exception/any-exception.filter.spec.ts
 * @Description: 
 * 
 */
import { AllExceptionsFilter } from './any-exception.filter';

describe('AnyExceptionFilter', () => {
  it('should be defined', () => {
    expect(new AllExceptionsFilter()).toBeDefined();
  });
});
