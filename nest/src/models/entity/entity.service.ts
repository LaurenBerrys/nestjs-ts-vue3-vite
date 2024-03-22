/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-12-22 10:20:43
 * @LastEditTime: 2024-03-22 11:25:35
 * @Description:
 */
import { Inject, Logger } from "@nestjs/common";
import { ResponseData } from "src/interface/code";
import { DataSource, TableColumn, Table } from "typeorm";

import { getDataSourceToken } from "@nestjs/typeorm";
import { UpdateEntityDto } from "./entity.update";
export class EntityService {
  private readonly logger = new Logger(EntityService.name);
  private Tables = []; //表集合
  constructor(
    @Inject(getDataSourceToken())
    private readonly dataSource: DataSource
  ) {
    this.initializeEntityMap();
  }

  async initializeEntityMap(): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    const tablesl = (await queryRunner.getTables()).filter(
      (item) => item.database == "nest"
    );
    const Entity = [
      "pages",
      "Pages",
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
    const Response = new ResponseData();
    try {
      const queryRunner = this.dataSource.createQueryRunner();
      const table = await queryRunner.getTable(frontendData.name);
      if (table) {
        Response.code = 400;
        Response.msg = "表已存在";
        return Response;
      } else {
        const columns = frontendData.columns.map((item) => {
          const obj: any = {
            name: item.name,
            type: item.type,
            isNullable: item.isNullable,
            isPrimary: item.isPrimary,
            comment: item.label,
          };
          if (item.default) obj.default = item.default;
          if (item.length) obj.length = item.length;
          if (item.name == "createdTime" || item.name == "updateTime") {
            obj.type = "timestamp";
            obj.default = "CURRENT_TIMESTAMP";
          }
          if (item.name == "id") {
            obj.generationStrategy = "increment";
            obj.isGenerated=true
          }
          return obj;
        });
        const newTable = new Table({
          name: frontendData.name,
          columns: columns,
          comment:frontendData.comment
        });
        this.Tables.push(newTable);
        await queryRunner.createTable(newTable, true);
        Response.data = "创建成功";
        Response.code = 200;
        Response.msg = "创建成功";
        return Response;
      }
    } catch (error) {
      console.log(error);
      return Response;
    }
  }
  async find(param): Promise<ResponseData> {
    const { name, page = 1, pageSize = 10 } = param;
    const Response = new ResponseData();
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
      Response.data = obj;
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
      Response.data = obj;
    }
    return Response;
  }
  //查询实体详情
  async findInfo(name): Promise<ResponseData> {
    const Response = new ResponseData();
    const table = this.Tables.find((item) => item.name === name);
    if (!table) {
      Response.code = 400;
      Response.msg = "实体不存在";
      return Response;
    } else {
      Response.data = {
        list: table.columns,
      };
      Response.code = 200;
    }
    return Response;
  }
  async update(name, input: UpdateEntityDto[]): Promise<ResponseData> {
    const Response = new ResponseData();
    const queryRunner = this.dataSource.createQueryRunner();
    const table = this.Tables.find((item) => item.name === name);
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
        if (options.name == "createdTime" || options.name == "updateTime") {
          options.type = "timestamp";
          options.default = () => "CURRENT_TIMESTAMP(6)";
        }
        if (options.name == "id") {
          options.generationStrategy = "increment";
          options.isGenerated=true
        }
        const Column = new TableColumn(options);
        if (newItem) {
          table.columns.forEach((item, index) => {
            if (item.name == element.name) {
              table.columns.splice(index, 1, Column);
            }
          });
          await queryRunner.changeColumn(table, newItem, Column);
        } else {
          table.columns.push(Column);
          await queryRunner.addColumn(table, Column);
        }
      }
      table.columns.forEach(async (item, index) => {
        const newItem = input.find((newItem) => newItem.name === item.name);
        if (!newItem) {
          table.columns.splice(index, 1);
          await queryRunner.dropColumn(table, item);
        }
      });
      Response.msg = "修改成功";
    } catch (error) {
      Response.code = 400;
      Response.msg = "修改失败";
    }
    return Response;
  }
  async delete(name): Promise<ResponseData> {
    const Response = new ResponseData();
    const queryRunner = this.dataSource.createQueryRunner();
    const table = this.Tables.find((item) => item.name === name);
    //删除表
    this.Tables = this.Tables.filter((item) => item.name !== name);
    await queryRunner.dropTable(table);
    Response.code = 200;
    Response.msg = "删除成功";
    return Response;
  }
}
