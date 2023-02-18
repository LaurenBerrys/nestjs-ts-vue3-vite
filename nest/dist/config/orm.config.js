"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: 'nest',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: true,
}));
//# sourceMappingURL=orm.config.js.map