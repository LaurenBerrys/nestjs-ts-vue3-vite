import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
@Module({
  imports: [
    // MulterModule.register({
    //   storage: diskStorage({
    //     // 配置文件上传后的文件夹路径
    //     destination: `./public/uploads/${dayjs().format('YYYY-MM-DD')}`,
    //     filename: (req, file, cb) => {
    //       // 在此处自定义保存后的文件名称
    //       const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
    //       return cb(null, filename);
    //     },
    //   }),
    // }),
  ],
  controllers: [
    FileController,
  ],
  providers: [FileService],
})
export class FileModule { }