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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../entities/user");
class SignUpUseCase {
    constructor(userGateway, idServiceGateway, authServiceGateway, hashServiceGateway, timestampServiceGateway) {
        this.userGateway = userGateway;
        this.idServiceGateway = idServiceGateway;
        this.authServiceGateway = authServiceGateway;
        this.hashServiceGateway = hashServiceGateway;
        this.timestampServiceGateway = timestampServiceGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validatePassword(input.password);
            const userAge = this.timestampServiceGateway.getUserAge(input.birthday);
            const userBirthday = this.timestampServiceGateway.getTreatedDateForSQL(input.birthday);
            const newUser = new user_1.User(input.name, input.email, yield this.hashServiceGateway.generate(input.password), this.idServiceGateway.generate(), userBirthday, userAge, input.photo);
            yield this.userGateway.createNewUser(newUser);
            return {
                auth: this.authServiceGateway.generate(newUser.getId())
            };
        });
    }
    validatePassword(password) {
        if (password.length <= 6) {
            throw new Error(`Your password should have at least 7 characters.`);
        }
    }
}
exports.SignUpUseCase = SignUpUseCase;
