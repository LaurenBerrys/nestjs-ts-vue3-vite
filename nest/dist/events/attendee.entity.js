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
exports.Attendee = void 0;
const typeorm_1 = require("typeorm");
const events_entity_1 = require("./events.entity");
let Attendee = class Attendee {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", Number)
], Attendee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: '姓名',
    }),
    __metadata("design:type", String)
], Attendee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => events_entity_1.Event, (event) => event.attendees, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'event_id',
    }),
    __metadata("design:type", events_entity_1.Event)
], Attendee.prototype, "event", void 0);
Attendee = __decorate([
    (0, typeorm_1.Entity)('Attendee')
], Attendee);
exports.Attendee = Attendee;
//# sourceMappingURL=attendee.entity.js.map