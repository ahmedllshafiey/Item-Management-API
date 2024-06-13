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
exports.Item = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
let Item = class Item extends sequelize_typescript_1.Model {
};
exports.Item = Item;
Item.ITEM_TABLE_NAME = "note";
Item.ITEM_ID = "id";
Item.ITEM_NAME = "name";
Item.ITEM_USAGE = "usage";
__decorate([
    sequelize_typescript_2.PrimaryKey,
    sequelize_typescript_2.AutoIncrement,
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        field: Item.ITEM_ID
    }),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING(100),
        field: Item.ITEM_NAME,
    }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING(250),
        field: Item.ITEM_USAGE,
    }),
    __metadata("design:type", String)
], Item.prototype, "usage", void 0);
exports.Item = Item = __decorate([
    (0, sequelize_typescript_2.Table)({
        tableName: "items",
    })
], Item);