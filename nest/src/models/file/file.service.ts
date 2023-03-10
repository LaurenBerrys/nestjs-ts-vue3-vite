/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs-extra';//文件操作模块
import * as formidable from 'formidable'; //读取流数据
import * as concat from 'concat-files'; //合并
import { ResponseData } from '../../interface/code';
import * as mimeTypes from 'mime-types';//获取文件扩展名
import * as rimraf from 'rimraf'; //删除真个目录
const uploadDir = './public/uploads/'
@Injectable()
export class FileService {
  private readonly logger = new Logger(FileService.name);
  //directory是用来判断是目录上传还是文件上传false是文件上传
  //查询文件是否上传
  async checkChunk(req: any): Promise<ResponseData> {
    console.log(req);
    const { fileHash, suffix,directory,name } = req;
    const Data = new ResponseData();
    let fileExtension
    if(!directory){
      fileExtension = '.' + mimeTypes.extension(suffix)
    }else{
      fileExtension =suffix!==null?'.' +mimeTypes.extension(suffix):name
    }
    if (fs.existsSync(path.join(uploadDir, fileHash) + fileExtension)) {
      Data.code = 200
      Data.data = {
        shouldUpload: false,
      }
      Data.msg = '此文件已上传'
      return Data
    }
    const list = await getUploadedChunkList(fileHash)
    if (list.length > 0) {
      Data.code = 200
      Data.data = {
        shouldUpload: true,
        uploadedChunkList: list
      }
      Data.msg = '分片数据'
      return Data
    }
    Data.code = 200
    Data.data = {
      shouldUpload: true,
      uploadedChunkList: []
    }
    Data.msg = '没上传过'
    return Data
  }
  // 上传切片
  async uploadChunk(req: any) {
    const Data = new ResponseData()
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) return;
        const chunk = files.chunk.filepath; //目标源路径
        const hash = fields.hash;
        const suffix = fields.suffix;
        // 注意这里的hash包含文件的hash和块的索引，所以需要使用split切分
        const chunksDir = path.resolve(uploadDir, hash.split("-")[0]);
        if (!fs.existsSync(chunksDir)) {
          await fs.mkdirs(chunksDir);
        }
        await fs.move(chunk, chunksDir + "/" + hash);
      })
      Data.code = 200
      Data.msg = '收到文件块'
      return Data
    } catch (error) {
      Data.code = 400
      Data.msg = 'error'
      return Data
    }

  }

  // 合并切片
  async merageChuank(req: any) {
    try {
      const { fileHash, suffix ,directory,name} = req
      let fileExtension
      if(!directory){
         fileExtension = '.' + mimeTypes.extension(suffix)
      }else{
         fileExtension = suffix?'.' +mimeTypes.extension(suffix):name
      }
      this.logger.log(fileExtension,'fileExtension')
      const filePath = path.join(uploadDir, fileHash) + fileExtension;
      await mergeFileChunk(filePath, fileHash);
      const Data = new ResponseData()
      Data.code = 200
      Data.msg = "上传成功"
      return Data
    } catch (error) {
      console.log(error);
      
    }
  
  }
}
/**
 * 
 * @param filePath 指定位置创建可写流
 * @param fileHash hash名字
 */
async function mergeFileChunk(filePath, fileHash) {
  const chunksDir = path.resolve(uploadDir, fileHash);
  const chunkPaths = await fs.readdir(chunksDir);
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
  const concatArr = chunkPaths.map(element => {
    return path.resolve(chunksDir, element)
  });
  try {
    await new Promise<void>((resolve, reject) => {
      concat(concatArr, filePath, (err) => {
        if (err) reject(err);
        // 合并后删除保存切片的目录
        resolve();
      });
    }).then(()=>{
      rimraf(chunksDir)
    });
  } catch (error) {
    console.log(error, 222);
  }

}
// 获取已上传的文件列表
const getUploadedChunkList = async (fileHash) => {
  const isExist = fs.existsSync(path.resolve(uploadDir, fileHash))
  if (isExist) {
    return await fs.readdir(path.resolve(uploadDir, fileHash))
  }
  return []
}