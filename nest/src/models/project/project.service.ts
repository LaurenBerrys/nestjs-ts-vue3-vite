/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-12-22 10:20:43
 * @LastEditTime: 2024-03-12 12:22:28
 * @Description:
 */
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/entities/project.entity";
import { ResponseData } from "src/interface/code";
import { encryptPassword, makeSalt } from "src/utils/cryptogram";
import { Repository, ILike, FindManyOptions } from "typeorm";

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name);
  constructor(
    @InjectRepository(Project)
    private readonly Project: Repository<Project>
  ) {}
  async findAll(page, pageSize): Promise<ResponseData> {
    const Data = new ResponseData();
    Data.data = await this.Project.find();
    let pageCount = await this.Project.count();
    pageCount = Math.ceil(pageCount / pageSize);

    let list = await this.Project.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    Data.data = {
      pageSize,
      pageCount,
      list,
    };
    return Data;
  }
  async find(name, page, pageSize): Promise<ResponseData> {
    const Data = new ResponseData();
    const queryOptions: FindManyOptions<Project> = {
      where: {},
      skip: (page - 1) * pageSize,
      take: pageSize,
    };
    if (name) {
      queryOptions.where = { name: ILike(`%${name}%`) };
    }
    //模糊查询
    const [list, pageCount] = await this.Project.findAndCount(queryOptions);
    Data.data = {
      pageSize,
      pageCount,
      list,
    };
    return Data;
  }
  async create(input: any): Promise<ResponseData> {
    const Data = new ResponseData();
    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPassword(input.password, salt); // 加密密码
    input.password = hashPassword;
    input.salt = salt;
    await this.Project.save(input);
    Data.code = 200;
    Data.msg = "success";
    return Data;
  }
  async update(id, input): Promise<ResponseData> {
    const data = await this.Project.findOneBy({ id });
    const obj = {
      ...data,
      ...input,
    };
    //更新数据
    await this.Project.save(obj);
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = "success";
    Data.data = obj;
    return Data;
  }
  async delete(id): Promise<ResponseData> {
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = "success";
    const date = await this.Project.findOneBy({
      id,
    });
    await this.Project.remove(date);
    return Data;
  }
}
