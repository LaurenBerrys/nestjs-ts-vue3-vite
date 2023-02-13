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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const typeorm_1 = require("typeorm");
const attendee_entity_1 = require("./attendee.entity");
let Event = class Event {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, comment: '姓名' }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '描述' }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '时间' }),
    __metadata("design:type", Date)
], Event.prototype, "when", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '密钥' }),
    __metadata("design:type", String)
], Event.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendee_entity_1.Attendee, (attendee) => attendee.event),
    __metadata("design:type", Array)
], Event.prototype, "attendees", void 0);
Event = __decorate([
    (0, typeorm_1.Entity)('Event')
], Event);
exports.Event = Event;
//# sourceMappingURL=events.entity.js.map