/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-09 15:48:57
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-11 10:00:38
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/upload/src/hash-worker.ts
 * @Description: 
 * 
 */
import SparkMD5 from 'spark-md5'
const ctx: Worker = self as any;
    ctx.onmessage = (e) => {
      const  {chunkList,fileName} = e.data;
      const spark = new SparkMD5.ArrayBuffer();
      let percentage = 0;
      let count = 0;
      const loadNext = index => {
          count++;
          spark.append(chunkList[index].chunk);
          if (count === chunkList.length) {
            //加入文件名防止hash重复
            let name= new TextEncoder().encode(fileName);
            spark.append(name);
            self.postMessage({
              percentage: 100,
              hash: spark.end()
            })
            self.close();
          } else {
            percentage += (100 / chunkList.length)
            self.postMessage({
              percentage
            })
            loadNext(count)
          }
        }
      loadNext(count)
    }
  export default ctx