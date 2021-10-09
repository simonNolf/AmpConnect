"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_json_1 = __importDefault(require("../../ressources/database.config.json"));
const sequelize_typescript_1 = require("sequelize-typescript");
const modules_model_1 = __importDefault(require("../model/modules.model"));
// @ts-ignore
const sequelize = new sequelize_typescript_1.Sequelize({
    database: database_config_json_1.default.database,
    dialect: database_config_json_1.default.dialect,
    username: 'root',
    password: '',
    storage: database_config_json_1.default.storage,
    models: [modules_model_1.default]
});
exports.default = sequelize;
//# sourceMappingURL=DataBase.config.js.map