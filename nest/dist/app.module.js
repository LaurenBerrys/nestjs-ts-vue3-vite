"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orm_config_prod_1 = require("./config/orm.config.prod");
const user_module_1 = require("./models/user/user.module");
const role_module_1 = require("./models/role/role.module");
const menu_list_module_1 = require("./models/menu-list/menu-list.module");
const auth_module_1 = require("./core/auth/auth.module");
const user_controller_1 = require("./models/user/user.controller");
const file_module_1 = require("./models/file/file.module");
const formily_module_1 = require("./models/formily/formily.module");
const project_module_1 = require("./models/project/project.module");
const entity_module_1 = require("./models/entity/entity.module");
const websockt_1 = require("./websockt/websockt");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [orm_config_prod_1.default],
                expandVariables: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: orm_config_prod_1.default,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            menu_list_module_1.MenuListModule,
            file_module_1.FileModule,
            formily_module_1.FormilyModule,
            project_module_1.ProjectModule,
            entity_module_1.EntityModule,
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, websockt_1.default],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map