<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-08 17:55:59
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-11 05:01:37
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/example/upload/index.vue
 * @Description: 
 * 
-->
<template>
  <ComponentPage>
    <n-upload
      :on-before-upload="beforUpload"
      :directory="directory"
    >
      <n-button @click="directory = false">上传文件</n-button>
      <n-button @click="directory = true">上传目录</n-button>
    </n-upload>
    <n-progress
    type="line"
    :percentage="Percentage"
    :indicator-placement="'inside'"
    processing
  />
  </ComponentPage>
</template>

<script setup lang="ts">
import hashWorker from "./hash-worker.ts?worker";
import { useAsyncQueue } from "@vueuse/core";
const { token } = useAppStore();
const CHUNK_SIZE = 1 * 1024 * 1024;
const directory = ref(false);

// 拆分文件
const  splitFile = async(file, size = CHUNK_SIZE) => {
  const fileChunkList: any = [];
  let curChunkIndex = 0;
  while (curChunkIndex <= file.size) {
    // fileChunkList.push({chunk:new Blob([file.slice(curChunkIndex, curChunkIndex + size)],{type:fileType.value})});
    fileChunkList.push({chunk:file.slice(curChunkIndex, curChunkIndex + size)});
    curChunkIndex += size;
  }
  return fileChunkList;
};

// 计算文件hash
const calculateHash = (chunkList,name) => {
  return new Promise((resolve) => {
    const woke = new hashWorker();
    woke.postMessage({chunkList:chunkList,fileName:name});
    woke.onmessage = (e) => {
      const { percentage, hash } = e.data;
      //解析文件hash进度
      HashPercentage.value = percentage;
      if (hash) {
        // 当hash计算完成时，执行resolve
        resolve(hash);
      }
    };
  });
};
// 上传分片
const uploadChunks = async (chunksData, hash) => {
  const formDataList = chunksData.map(({ chunk, hash }) => {
    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("hash", hash);
    formData.append("suffix", fileType.value);
    return { formData };
  });
  //将要上传的分片组装起来
  const requestList = formDataList.map(({ formData }, index) => {
    return function(){
    return  request({
      method: "post",
      url: "http://172.20.10.14:3000/nest-api/chunk/upload",
      headers:{Authorization:`Bearer ${token}`},
      data: formData,
      //这里加入onprogress主要是获取每个区块的进度
        onprogress: (e) => {
        let list: any = [...chunksData];
        list[index].progress = parseInt(String((e.loaded / e.total) * 100));
        chunkList.value = list;
      }
    }).then((res)=>{
      Percentages.value=Percentages.value+1
    }) ;
    }   
  });
  const param= {
    fileHash:hash.value,
    suffix:fileType.value,
    directory:directory.value,
    name:fileName.value,
    size:CHUNK_SIZE
  }
  const merge=async()=>{
   return await mergeRequest(param).then(({msg})=>{
    window.$message.success(msg)
   });
  }
  //合并文件
  requestList.push(merge)
  // 进行按顺序上传
  await useAsyncQueue(requestList);
};

const HashPercentage = ref();//解析文件hash进度
const Percentages = ref(0);//解析文件进度
const fileName=ref("")//文件名
const fileType = ref(""); //文件名
const chunkList = ref([]); //分片集合
const hash: any = ref(); //hash
const Percentage= computed(()=>{
  //Math.floor(Percentages.value / chunkList.value.length* 100)等于nan的时候为0
  if(isNaN(Math.floor(Percentages.value / chunkList.value.length* 100))){
    return 0
  }
  return Math.floor(Percentages.value / chunkList.value.length* 100);
})
/**
 *@deprecated 切片上传
 * @param param0 
 */
const beforUpload = async ({ file }) => {
  return new Promise(async (resolve, reject) => {
    console.log(file)
  //进度条重置
  Percentages.value=0
  fileName.value=file.name
  fileType.value = file.type;
  //保存分片
  let List = await  splitFile(file.file);
  chunkList.value =List
  // 计算hash,List不能被prox代理，否则worker会报错
  hash.value = await calculateHash(List,file.fullPath);
  console.log("文件的hash为：", hash.value);
  // 秒传：验证文件是否存在服务器
  const { data} = await uploadverfileIsExist({
    fileHash: hash.value,
    suffix:file.type,
    directory:directory.value,
    name:fileName.value
  });
  const {shouldUpload, uploadedChunkList }=data
  if (!shouldUpload) {
    window.$message.warning("文件已存在");
    return;
  }
  let uploadedChunkIndexList: any = [];
  if (uploadedChunkList && uploadedChunkList.length > 0) {
    uploadedChunkIndexList = uploadedChunkList.map((item) => {
      const arr = item.split("-");
      return parseInt(arr[arr.length - 1]);
    });
    window.$message.warning(
      "已上传的区块号：" + uploadedChunkIndexList.toString()
    );
  }
  const chunksData: any = chunkList.value
    .map(({ chunk }, index) => ({
      chunk: chunk,
      hash: hash.value + "-" + index,
      progress: 0,
    }))
    .filter((item2) => {
      // 过滤掉已上传的块
      const arr = item2.hash.split("-");
      return (
        uploadedChunkIndexList.indexOf(parseInt(arr[arr.length - 1])) === -1
      );
    });
  chunkList.value = chunksData;
  // 开始上传分片
 await uploadChunks(chunksData, hash);
  })
};
/**
 * 上传的请求
 */
const request = ({
  url,
  method = "post",
  data,
  headers = {},
  onprogress
}) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.upload.onprogress = onprogress
    xhr.send(data);
    xhr.onload = (e:any) => {
      resolve({
        data: e.target.response 
      });
    };
  });
}
</script>

<style scoped></style>
