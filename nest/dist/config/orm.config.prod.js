"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("orm.config", () => ({
    type: "mysql",
    host: "120.77.83.106",
    username: "admin",
    password: "Admin@123456",
    database: "nest",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
}));
//# sourceMappingURL=orm.config.prod.js.map