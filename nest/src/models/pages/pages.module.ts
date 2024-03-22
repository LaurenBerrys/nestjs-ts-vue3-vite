/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2024-03-22 10:33:28
 * @LastEditTime: 2024-03-22 10:35:32
 * @Description: 
 */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pages } from "src/entities/Pages.entity";
import { PagesController } from "./pages.controller";
import { PagesService } from "./pages.service";
@Module({
    imports: [TypeOrmModule.forFeature([Pages])
  ],
  controllers: [PagesController],
  providers: [PagesService],
})
export class EntityModule {}
