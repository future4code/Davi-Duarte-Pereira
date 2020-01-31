"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
class MomentJSService {
    getTreatedDateForSQL(date) {
        const treatedDate = moment_1.default(date).format("YYYY-MM-DD");
        return treatedDate;
    }
    getUserAge(date) {
        const treatedDate = this.getTreatedDateForSQL(date);
        const userAge = Number(moment_1.default(treatedDate).fromNow().split(' ')[0]);
        if (!this.verifyUserMajority(userAge)) {
            throw new Error("Users aged below 18 years are not allowed.");
        }
        return userAge;
    }
    verifyUserMajority(age) {
        const isUserAnAdult = age >= 18 ? true : false;
        return isUserAnAdult;
    }
}
exports.MomentJSService = MomentJSService;
