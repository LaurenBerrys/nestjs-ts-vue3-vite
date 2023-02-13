/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 19:26:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-13 17:05:01
 * @FilePath: /porject/src/events/events.controller.ts
 * @Description:
 *
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ResponseData } from '../interface/code';
import { CreateEventsDto } from './create-events.dto';
import { UpdateEventsDto } from 'src/events/upevents';
import { Event } from './events.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Controller('/events')
export class EventsController {
  //记录日志
  private readonly logger = new Logger(EventsController.name);
  constructor(
    //InjectRepository用于注入Repository
    //Repository用于操作数据库
    @InjectRepository(Event)
    private readonly events: Repository<Event>,
  ) {}
  @Get()
  async findAll(): Promise<ResponseData> {
    this.logger.log('查询所有数据');
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = 'success';
    Data.data = await this.events.find();
    this.logger.debug('查询所有数据', Data.data.length);
    return Data;
  }
  @Get('/practice')
  async practice(@Param('name') name): Promise<ResponseData> {
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = 'success';
    Data.data = await this.events.find({
      select: ['name', 'when'],
      where: { name: name },
      take: 2,
    });
    return Data;
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<ResponseData> {
    const event = await this.events.findOne(id);
    const Data = new ResponseData();
    if (!event) {
      Data.code = 404;
      Data.msg = 'not found';
      return Data;
    }
    Data.code = 200;
    Data.msg = 'success';
    Data.data = event;
    return Data;
  }
  //create方法用于创建数据
  @Post()
  async create(@Body() input: CreateEventsDto): Promise<ResponseData> {
    const event = await this.events.save({
      ...input,
      when: new Date(),
    });
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = 'success';
    Data.data = event;
    return Data;
  }
  @Patch(':id')
  async update(
    @Param('id') id,
    @Body() input: UpdateEventsDto,
  ): Promise<ResponseData> {
    const data = await this.events.findOne(id);
    await this.events.save({
      ...data,
      ...input,
      when: input.when ? new Date(input.when) : data.when,
    });
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = 'success';
    return Data;
  }
  @Delete(':id')
  async delete(@Param('id') id): Promise<ResponseData> {
    const Data = new ResponseData();
    Data.code = 200;
    Data.msg = 'success';
    const date = await this.events.findOne(id);
    await this.events.remove(date);
    return Data;
  }
}
