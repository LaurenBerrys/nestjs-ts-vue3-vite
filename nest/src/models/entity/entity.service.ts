/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-12-22 10:20:43
 * @LastEditTime: 2024-03-21 14:42:45
 * @Description:
 */
import { Inject, Logger } from "@nestjs/common";
import { ResponseData } from "src/interface/code";
import {
  DataSource,
  EntitySchema,
  EntitySchemaColumnOptions,
  TableColumn,
  Table,
  getConnectionManager,
} from "typeorm";

import { getDataSourceToken } from "@nestjs/typeorm";
import { UpdateEntityDto } from "./entity.update";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
import { ConnectionMetadataBuilder } from "typeorm/connection/ConnectionMetadataBuilder";
export class EntityService {
  private readonly logger = new Logger(EntityService.name);
  private Tables = [] //表集合
  constructor(
    @Inject(getDataSourceToken())
    private readonly dataSource: DataSource,
  ) {
    this.initializeEntityMap();
  }

  async initializeEntityMap(): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    const tablesl = (await queryRunner.getTables()).filter(
      (item) => item.database == "nest"
    );
    const Entity = [
      "user",
      "User",
      "MenuList",
      "menulist",
      "role",
      "Formily",
      "grouper",
      "formily",
      "socket",
      "friendship",
      "project",
      "Project",
      "Chat",
      "chat",
      "Socket",
      "Grouper",
      "Friendship",
    ];
    this.Tables = tablesl.filter((item) => !Entity.includes(item.name));
  }
  //动态创表
  async createTable(frontendData): Promise<ResponseData> {
    const Data = new ResponseData();
    const queryRunner = this.dataSource.createQueryRunner();
    const table = await queryRunner.getTable(frontendData.name);
    if (table) {
      Data.code = 400;
      Data.msg = "表已存在";
      return Data;
    } else {
      const columns = frontendData.columns.map((item) => {
        const obj: any = {
          name: item.name,
          type: item.type,
          isGenerated: item.isPrimary ? true : false,
          isNullable: item.isNullable,
          isPrimary: item.isPrimary,
          comment: item.label,
        };
        if (item.default) obj.default = item.default;
        if (item.length) obj.length = item.length;
        return obj;
      });
      const newTable = new Table({
        name: frontendData.name,
        columns: columns,
      });
      this.Tables.push(newTable);
      await queryRunner.createTable(newTable, true);
      Data.data = "创建成功";
      Data.code = 200;
      Data.msg = "创建成功";
      return Data;
    }
  }
  async find(param): Promise<ResponseData> {
    const { name, page = 1, pageSize = 10 } = param;
    const Data = new ResponseData();
    if (!name) {
      const list = this.Tables.slice((page - 1) * pageSize, page * pageSize);
      const resultPromises = list.map((entity) => {
        return {
          name: entity.name,
          comment: entity.comment || "",
          isSync: true, //实体是否同步到表
        };
      });
      const obj = {
        list: resultPromises,
        pageSize,
        pageCount: Math.ceil(this.Tables.length / pageSize),
      };
      Data.data = obj;
    } else {
      const list = this.Tables.slice((page - 1) * pageSize, page * pageSize);
      const resultPromises = list.map((entity) => {
        return {
          name: entity.name,
          comment: entity.comment || "",
          isSync: true, //实体是否同步到表
        };
      });
      const obj = {
        list: resultPromises.filter((entity) => entity.name.includes(name)),
        pageSize,
        pageCount: Math.ceil(this.Tables.length / pageSize),
      };
      Data.data = obj;
    }
    return Data;
  }
  //查询实体详情
  async findInfo(name): Promise<ResponseData> {
    const Data = new ResponseData();
    const table =this.Tables.find((item) => item.name === name);
    if (!table) {
      Data.code = 400;
      Data.msg = "实体不存在";
      return Data;
    } else {
      Data.data = {
        list:table.columns,
      };;
      Data.code = 200;
    }
    return Data;
  }
  async update(name, input: UpdateEntityDto[]): Promise<ResponseData> {
    const Data = new ResponseData();
    const queryRunner = this.dataSource.createQueryRunner();
    const table=this.Tables.find((item) => item.name === name);
    const defaultColumn = [
      "id",
      "createdTime",
      "updateTime",
      "updatedBy",
      "createdBy",
    ];
    try {
      for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const newItem = table.columns.find(
          (newItem) => newItem.name === element.name
        );
        const isDefault = defaultColumn.includes(element.name);
        if (isDefault) continue; //结束本次循环;
        const options: any = {
          name: element.name,
          type: element.type,
          isGenerated: element.isPrimary ? true : false,
          isNullable: element.isNullable,
          isPrimary: element.isPrimary,
          comment: element.label,
        };
        if (element.default) options.default = element.default;
        if (element.length) options.length = element.length;
        const Column = new TableColumn(options);
        if (newItem) {
          table.columns.forEach((item,index) => {
            if (item.name == element.name) {
              table.columns.splice(index, 1, Column);
            }
          })
          await queryRunner.changeColumn(table, newItem, Column);
        } else {
          table.columns.push(Column);
          await queryRunner.addColumn(table, Column);
        }
      }
      table.columns.forEach(async (item,index) => {
        const newItem = input.find((newItem) => newItem.name === item.name);
        if (!newItem) {
          table.columns.splice(index, 1);
          await queryRunner.dropColumn(table, item);
        }
      });
      Data.msg = "修改成功";
    } catch (error) {
      Data.code = 400;
      Data.msg = "修改失败";
    }
    return Data;
  }
  async delete(name): Promise<ResponseData> {
    const Data = new ResponseData();
    const queryRunner = this.dataSource.createQueryRunner();
    const table = this.Tables.find((item) => item.name === name);
    //删除表
    this.Tables = this.Tables.filter((item) => item.name !== name);
    await queryRunner.dropTable(table);
    Data.code = 200;
    Data.msg = "删除成功";
    return Data;
  }
}
