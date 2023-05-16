/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-18 16:14:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-08 11:18:55
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/core/redis/index.ts
 * @Description: 
 * 
 */
//引入redis
import Redis from 'ioredis';
// import { Logger } from '../utils/log4js';
import {config} from '../../config/config';

let n: number = 0;
const redisIndex = []; // 用于记录 redis 实例索引
const redisList = []; // 用于存储 redis 实例


// 因为 redis 可以同时存在多个库
// ，故需要传入 db 进行区分，当然，也可以写死，
// 但之后每使用一个库，就要新写一个 class，从代码复用性上来说，这样设计很糟糕，所以在这里做了个整合。
export class RedisInstance {
  static async initRedis(method: string, db: number = 0) {
    const isExist = redisIndex.some(x => x === db);
    if (!isExist) {
    //   Logger.debug(`[Redis ${db}]来自 ${method} 方法调用, Redis 实例化了 ${++n} 次 `);
    console.log(`[Redis ${db}]来自 ${method} 方法调用, Redis 实例化了 ${++n} 次 `);
      //实例化redis
        redisList[db] = new Redis({ ...config.redis, db });
        redisIndex.push(db);
    } else {
      console.log(`[Redis ${db}]来自 ${method} 方法调用`);
    //   Logger.debug(`[Redis ${db}]来自 ${method} 方法调用`);
    }
    return redisList[db];
  }
}