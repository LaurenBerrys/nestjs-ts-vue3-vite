/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 15:56:17
 * @LastEditTime: 2023-09-01 17:59:40
 * @Description:
 */
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Formily } from "src/entities/Formily.entity";
import { ResponseData } from "src/interface/code";
import { Repository } from "typeorm";

@Injectable()
export class FormilyService {
  private readonly logger = new Logger(FormilyService.name);
  constructor(
    @InjectRepository(Formily)
    private readonly Formily: Repository<Formily>
  ) {}
  async findOne(id: string): Promise<ResponseData> {
    console.log(id,'ididididid')
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = "success";
    //查找指定id
    Data.data = await this.Formily.find();
    this.logger.debug("查询指定id数据",  id);
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
