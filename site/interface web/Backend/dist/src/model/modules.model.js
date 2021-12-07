"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Module = class Module extends sequelize_typescript_1.Model {
    get name() {
        return 'My name is ' + this.getDataValue('name');
    }
    set name(value) {
        this.setDataValue('name', value);
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)
], Module.prototype, "name", null);
Module = __decorate([
    sequelize_typescript_1.Table
], Module);
exports.default = Module;
//# sourceMappingURL=modules.classes.js.map