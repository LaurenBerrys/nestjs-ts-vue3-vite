<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-08 17:55:59
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-11 11:39:56
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/upload/src/NvapUpload.vue
 * @Description: 
 * 
-->
<template>
  <n-upload
    :on-before-upload="beforUpload"
    directory-dnd
    :directory="directory"
    class="upload"
  >
  <template #default>
    <!-- <n-button @click="directory = false">上传文件</n-button>
    <n-button @click="directory = true" :disabled="true">上传目录</n-button> -->
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <icon-system-uicons:upload-alt />
        </n-icon>
      </div>
      <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </template>
  </n-upload>
  <n-progress
       type="line"
       :percentage="Percentage"
       :indicator-placement="'inside'"
       processing
     />
</template>

<script setup lang="ts">
import { useAsyncQueue } from "@vueuse/core";
import { calculateHash, splitFile } from "./hooks/common";
const CHUNK_SIZE = 1 * 1024 * 1024;
const directory = ref(false);
const Percentages = ref(0); //解析文件进度
const fileName = ref(""); //文件名
const fileType = ref(); //文件名
const chunkList:any = ref([]); //分片集合
const hash: any = ref(); //hash
// 上传分片
const uploadChunks = async (chunksData, hash) => {
  console.log(chunksData,1111);
  const formDataList = chunksData.map(({ chunk, hash }) => {
    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("hash", hash);
    formData.append("suffix", fileType.value);
    return { formData };
  });
  //将要上传的分片组装起来
  const requestList = formDataList.map(({ formData }, index) => {
    return async () => {
      await PostUpload(formData).then(() => {
        Percentages.value = Percentages.value + 1;
      });
    };
  });
  const param = {
    fileHash: hash.value,
    suffix: fileType.value,
    directory: directory.value,
    name: fileName.value,
    size: CHUNK_SIZE,
  };
  const merge = async () => {
    return await mergeRequest(param).then(({ msg }) => {
      window.$message.success(msg);
    });
  };
  //合并文件
  requestList.push(merge);
  // 进行按顺序上传
  await useAsyncQueue(requestList);
};
const Percentage = computed(() => {
  if (isNaN(Math.floor((Percentages.value / chunkList.value.length) * 100))) {
    return 0;
  }
  return Math.floor((Percentages.value / chunkList.value.length) * 100);
});
/**
 *@deprecated 切片上传
 * @param param0
 */
const beforUpload = async ({ file }) => {
   //进度条重置
   Percentages.value = 0;
  fileName.value = file.name;
  fileType.value = file.type;
  //保存分片
  let List = await splitFile(file.file, CHUNK_SIZE);
  chunkList.value = List;
  // 计算hash,List不能被prox代理，否则worker会报错
  hash.value = await calculateHash(List, file.fullPath);
  const chunkData = await fileIsExist();
  // chunkList.value =chunkData
  // 开始上传分片
  if(chunkData){
    await uploadChunks(chunkData, hash);
  }
};
// 秒传：验证文件是否存在服务器
//并且进行过滤
const fileIsExist = async () => {
  const { data } = await uploadverfileIsExist({
    fileHash: hash.value,
    suffix: fileType.value,
    directory: directory.value,
    name: fileName.value,
  });
  const { shouldUpload, uploadedChunkList } = data;
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
  return chunkList.value
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
};
</script>

<style scoped lang="scss">
.upload{
  width: 100%;
  height: 100%;
}
</style>
