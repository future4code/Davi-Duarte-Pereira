"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const user_1 = require("../business/entities/user");
class BaseDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: '54.211.186.233',
                user: 'davi',
                password: process.env.DATABASE_PASSWORD,
                database: 'davi_f4'
            }
        });
    }
    isAmatch() {
        return (Math.random() < 0.5) === true ? 1 : 0;
    }
    dbModelToUser(dbModel) {
        return new user_1.User(dbModel.name, dbModel.email, dbModel.password, dbModel.id, dbModel.birthday, dbModel.age, dbModel.photo);
    }
}
exports.BaseDatabase = BaseDatabase;
