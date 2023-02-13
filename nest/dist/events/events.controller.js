"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const code_1 = require("../interface/code");
const create_events_dto_1 = require("./create-events.dto");
const upevents_1 = require("./upevents");
const events_entity_1 = require("./events.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EventsController = EventsController_1 = class EventsController {
    constructor(events) {
        this.events = events;
        this.logger = new common_1.Logger(EventsController_1.name);
    }
    async findAll() {
        this.logger.log('查询所有数据');
        const Data = new code_1.ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = await this.events.find();
        this.logger.debug('查询所有数据', Data.data.length);
        return Data;
    }
    async practice(name) {
        const Data = new code_1.ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = await this.events.find({
            select: ['name', 'when'],
            where: { name: name },
            take: 2,
        });
        return Data;
    }
    async findOne(id) {
        const event = await this.events.findOne(id);
        const Data = new code_1.ResponseData();
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
    async create(input) {
        const event = await this.events.save(Object.assign(Object.assign({}, input), { when: new Date() }));
        const Data = new code_1.ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        Data.data = event;
        return Data;
    }
    async update(id, input) {
        const data = await this.events.findOne(id);
        await this.events.save(Object.assign(Object.assign(Object.assign({}, data), input), { when: input.when ? new Date(input.when) : data.when }));
        const Data = new code_1.ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        return Data;
    }
    async delete(id) {
        const Data = new code_1.ResponseData();
        Data.code = 200;
        Data.msg = 'success';
        const date = await this.events.findOne(id);
        await this.events.remove(date);
        return Data;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/practice'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "practice", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_events_dto_1.CreateEventsDto]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upevents_1.UpdateEventsDto]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "delete", null);
EventsController = EventsController_1 = __decorate([
    (0, common_1.Controller)('/events'),
    __param(0, (0, typeorm_1.InjectRepository)(events_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventsController);
exports.EventsController = EventsController;
//# sourceMappingURL=events.controller.js.map