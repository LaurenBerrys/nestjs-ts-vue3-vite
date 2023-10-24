"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
console.log(process.env.DB_URL, 'process.env.DB_URL');
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mongodb',
    url: 'mongodb://root:1235@0.0.0.0/nest?authSource=admin',
    database: 'nest',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    useUnifiedTopology: true,
    synchronize: true,
}));
//# sourceMappingURL=orm.config.prod.js.map