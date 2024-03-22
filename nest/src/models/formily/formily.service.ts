/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:56:17
 * @LastEditTime: 2024-03-12 16:30:58
 * @Description:
 */
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Formily } from "src/entities/Formily.entity";
import { ResponseData } from "src/interface/code";
import { FindManyOptions, ILike, Repository } from "typeorm";

@Injectable()
export class FormilyService {
  private readonly logger = new Logger(FormilyService.name);
  constructor(
    @InjectRepository(Formily)
    private readonly Formily: Repository<Formily>
  ) {}
  async find(name?,code?,id?, page?, pageSize?): Promise<ResponseData> {
    const Data = new ResponseData();
    const queryOptions: FindManyOptions<Formily> = {
      where: {},
      skip: (page - 1) * pageSize,
      take: pageSize,
    };
    if (name) {
      queryOptions.where = { name: ILike(`%${name}%`) };
    }
    if(id){
      queryOptions.where = { id };
    }
    //模糊查询
    const [list, pageCount] = await this.Formily.findAndCount(queryOptions);
    Data.data = {
      pageSize,
      pageCount,
      list,
    };
    return Data;
  }
  async create(input: any): Promise<ResponseData> {
    const Data = new ResponseData();
    await this.Formily.save(input);
    Data.code = 200;
    Data.msg = "success";
    return Data;
  }
  async update(id, input): Promise<ResponseData> {
    const data = await this.Formily.findOneBy({ id });
    const menu = {
      ...data,
      ...input,
    };
    //更新数据
    await this.Formily.save(menu);
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = "success";
    Data.data = menu;
    return Data;
  }
  async delete(id): Promise<ResponseData> {
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = "success";
    const date = await this.Formily.findOneBy({
      id,
    });
    await this.Formily.remove(date);
    return Data;
  }
}
