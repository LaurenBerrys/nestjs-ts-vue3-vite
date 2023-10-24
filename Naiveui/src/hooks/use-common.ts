/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:24:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-14 16:36:49
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/use-common.ts
 * @Description:
 *
 */
//复制文本
// i18n language  match title
import { i18n } from '@/lang';
// the keys using  zh file
import langEn from '@/lang/zh';
import settings from '@/settings/SystemSettings';

export const sleepTimeout = (time: number) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(null);
    }, time);
  });
};

//深拷贝
export function cloneDeep(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  //hash.has根据是否有key关联对象返回一个Boolean值。
  if (hash.has(obj)) {
    //hash.get返回key关联对象, 或者 undefined(没有key关联对象时)。
    return hash.get(obj);
  }
  //如果obj是数组那么obj.constructor是[Function:Array]
  //如果obj是对象那么obj.constructor是[Function:Object]
  const t = new obj.constructor();
  //在 hash.set中设置一组key关联对象，返回这个 WeakMap对象
  hash.set(obj, t);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = cloneDeep(obj[key], hash);
    }
  }
  return t;
}
const { t, te } = i18n.global;
export const langTitle = (title) => {
  if (!title) {
    return settings.title;
  }
  for (const key of Object.keys(langEn)) {
    if (te(`${key}.${title}`) && t(`${key}.${title}`)) {
      return t(`${key}.${title}`);
    }
  }
  return title;
};

//get i18n instance
export const getLangInstance = () => {
  return i18n.global as ObjKeys;
};

/**
 * @description: 任务调度器类, 用于控制并发数, 任务队列, 任务执行
 * @param {number} ParallelCount 最大并发数
 * @param {any[]} tasks 任务列表
 * @param {number} runningCount 正在运行的任务数
 * @return {*}
 */
class SuperTask {
  tasks: any[];
  runningCount: number;
  ParallelCount: number;
  constructor(ParallelCount = 4) {
    this.tasks = []; // 存储任务
    this.runningCount = 0; // 正在运行的任务数
    this.ParallelCount = ParallelCount; // 并发数
  }
  addTask(task: any) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this.run();
    });
  }
  run() {
    while (this.runningCount < this.ParallelCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.runningCount--;
          this.run();
        });
    }
  }
}
//异步任务调度器，用于控制异步任务的并发数,如
export const superTask = new SuperTask();

/**
 * @description: 消除异步的传染性, 使得异步函数可以像同步函数一样使用
 * @param fn 一定要是异步函数
 * @param args 传入的参数是fn的参数
 * @returns
 */
export function asyncWrapper(fn, ...args) {
  const data = [...args];
  const cache: any = []; //缓存fn的返回值
  let i = 0; //缓存第几次调用fn
  const func = fn;
  fn = () => {
    if (cache[i]) {
      if (cache[i].status === 'fulfilled') {
        return cache[i].data;
      } else if (cache[i].status === 'rejected') {
        throw cache[i].error;
      }
    }
    const result = {
      status: 'pending',
      data: null,
      error: null,
    };
    cache[i++] = result;
    throw func(...data)
      .then((res) => {
        result.status = 'fulfilled';
        result.data = res;
      })
      .catch((err) => {
        result.status = 'rejected';
        result.error = err;
      });
  };
  try {
    fn();
  } catch (error) {
    if (error instanceof Promise) {
      const funcRun = () => {
        i = 0;
        fn();
      };
      error.then(funcRun, funcRun);
    }
  }
}
