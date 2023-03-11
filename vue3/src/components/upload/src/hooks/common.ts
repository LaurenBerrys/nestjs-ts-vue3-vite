/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-11 11:02:25
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-11 11:09:12
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/upload/src/hooks/common.ts
 * @Description: 
 * 
 */
import hashWorker from "../hash-worker.ts?worker";
  /**
   * @description 切割文件
   * @param file 文件
   * @param size 切割每块的大小
   * @returns 数组
   */
 export  const  splitFile = async(file, size ) => {
    const fileChunkList: any = [];
    let curChunkIndex = 0;
    while (curChunkIndex <= file.size) {
      fileChunkList.push({chunk:file.slice(curChunkIndex, curChunkIndex + size)});
      curChunkIndex += size;
    }
    return fileChunkList;
  };
    /**
   * @description 计算文件的hash
   * @param chunkList 文件数组
   * @param name 路径名字
   * @returns 数组
   */
 export const calculateHash = (chunkList,name) => {
    return new Promise((resolve) => {
      const woke = new hashWorker();
      woke.postMessage({chunkList:chunkList,fileName:name});
      woke.onmessage = (e) => {
        const { hash } = e.data;
        if (hash) {
          // 当hash计算完成时，执行resolve
          resolve(hash);
        }
      };
    });
  };