"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.postgres = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const Item_1 = require("../models/Item");
dotenv_1.default.config();
exports.postgres = new sequelize_typescript_1.Sequelize({
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    port: process.env.PORT ? parseInt(process.env.PORT) : 5432,
    dialect: 'postgres',
    logging: false,
    models: [Item_1.Item],
});
class Database {
    connect_db() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield exports.postgres.authenticate();
                console.log('Connection has been established successfully.');
                // Sync all defined models to the DB
                yield exports.postgres.sync();
                console.log('All models were synchronized successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.Database = Database;
