/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-12-22 10:20:43
 * @LastEditTime: 2024-03-22 10:45:21
 * @Description:
 */
import { Inject, Logger } from "@nestjs/common";
import { ResponseData } from "src/interface/code";
import {
  Repository,
} from "typeorm";

import { InjectRepository } from "@nestjs/typeorm";
import { Pages } from "src/entities/Pages.entity";
export class PagesService {
  private readonly logger = new Logger(PagesService.name);
  constructor(
    @InjectRepository(Pages)
    private readonly Pages: Repository<Pages>,
  ) {}
  async createTable(frontendData): Promise<ResponseData> {
    const Response =new ResponseData()
    return Response
  }
  async find(param): Promise<ResponseData> {
    const Response =new ResponseData()
    return Response
 
  }
  async findInfo(name): Promise<ResponseData> {
    const Response =new ResponseData()
    return Response
  }
  async update(name, input): Promise<ResponseData> {
    const Response =new ResponseData()
    return Response
  }
  async delete(name): Promise<ResponseData> {
    const Response =new ResponseData()
    return Response
  }
}
