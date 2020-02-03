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
class GetProfilesUseCase {
    constructor(userGateway, authServiceGateway) {
        this.userGateway = userGateway;
        this.authServiceGateway = authServiceGateway;
    }
    execute(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = this.authServiceGateway.getUserIdFromToken(token);
            const doesUserExists = yield this.userGateway.verifyIfUserExists(userId);
            if (!doesUserExists) {
                throw new Error('User not found. Please, try again.');
            }
            const users = yield this.userGateway.getAllUsers(userId);
            return users;
        });
    }
}
exports.GetProfilesUseCase = GetProfilesUseCase;
