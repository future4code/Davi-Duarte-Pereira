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
class MatchUseCase {
    constructor(userGateway, authServiceGateway) {
        this.userGateway = userGateway;
        this.authServiceGateway = authServiceGateway;
    }
    execute(userAuthToken, idOfTheMatched) {
        return __awaiter(this, void 0, void 0, function* () {
            const personWhoLikedId = this.authServiceGateway.getUserIdFromToken(userAuthToken);
            const doesUserExists = yield this.userGateway.verifyIfUserExists(idOfTheMatched);
            if (!doesUserExists) {
                throw new Error('User not found. Please, try again.');
            }
            yield this.userGateway.match(personWhoLikedId, idOfTheMatched);
            return {
                message: "User matched successfuly."
            };
        });
    }
}
exports.MatchUseCase = MatchUseCase;
