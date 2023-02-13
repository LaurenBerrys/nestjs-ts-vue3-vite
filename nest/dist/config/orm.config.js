"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const events_entity_1 = require("../events/events.entity");
const attendee_entity_1 = require("../events/attendee.entity");
console.log(process.env.DB_URL);
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mongodb',
    url: process.env.DB_URL,
    database: 'nest',
    entities: [events_entity_1.Event, attendee_entity_1.Attendee],
    useUnifiedTopology: true,
    synchronize: true,
}));
//# sourceMappingURL=orm.config.js.map