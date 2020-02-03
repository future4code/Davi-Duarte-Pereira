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
const index_1 = require("./index");
const signup_1 = require("./../business/usecases/user/signup");
const userDatabase_1 = require("../data/userDatabase");
const v4idService_1 = require("../services/id/v4idService");
const jwtAuthService_1 = require("../services/auth/jwtAuthService");
const bcryptHashService_1 = require("../services/hash/bcryptHashService");
const moment_1 = require("../services/timestamp/moment");
const signin_1 = require("../business/usecases/user/signin");
const getProfiles_1 = require("../business/usecases/user/getProfiles");
const getAllMatches_1 = require("../business/usecases/matches/getAllMatches");
const match_1 = require("../business/usecases/matches/match");
const unmatch_1 = require("../business/usecases/matches/unmatch");
class ApiRouter {
    static handleRoute(path, event) {
        return __awaiter(this, void 0, void 0, function* () {
            // Para testar o helloWorld, bata no endpoint: url/helloWorld
            switch (path) {
                // Method: POST
                case "signup":
                    try {
                        const input = {
                            name: event.body.name,
                            email: event.body.email,
                            password: event.body.password,
                            birthday: event.body.birthday,
                            photo: event.body.photo
                        };
                        const userDatabase = new userDatabase_1.UserDatabase();
                        const v4 = new v4idService_1.V4IdService();
                        const jwt = new jwtAuthService_1.JWTauthService();
                        const bcrypt = new bcryptHashService_1.BCryptHashService();
                        const moment = new moment_1.MomentJSService();
                        const useCase = new signup_1.SignUpUseCase(userDatabase, v4, jwt, bcrypt, moment);
                        const result = yield useCase.execute(input);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errMessage: err.message });
                    }
                // Method: POST
                case "signin":
                    try {
                        const useCase = new signin_1.SignInUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService(), new bcryptHashService_1.BCryptHashService());
                        const result = yield useCase.execute(event.body.email, event.body.password);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errorMessage: err.message });
                    }
                // Method: GET
                case "profiles":
                    try {
                        const token = index_1.getTokenFromHeaders(event.headers);
                        const useCase = new getProfiles_1.GetProfilesUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
                        const result = yield useCase.execute(token);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errorMessage: err.message });
                    }
                // Method: GET
                case "matches":
                    try {
                        const token = index_1.getTokenFromHeaders(event.headers);
                        const useCase = new getAllMatches_1.GetAllMatchesUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
                        const result = yield useCase.execute(token);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errorMessage: err.message });
                    }
                // Method: POST
                case "match":
                    try {
                        const useCase = new match_1.MatchUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
                        const result = yield useCase.execute(index_1.getTokenFromHeaders(event.headers), event.body.id);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errorMessage: err.message });
                    }
                // Method: POST
                case "unmatch":
                    try {
                        const useCase = new unmatch_1.UnmatchUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
                        const result = yield useCase.execute(index_1.getTokenFromHeaders(event.headers), event.body.id);
                        return result;
                    }
                    catch (err) {
                        return Object.assign(Object.assign({}, err), { errorMessage: err.message });
                    }
                default:
                    throw new Error("This rout doesnt exist. Please, try again");
            }
        });
    }
}
exports.ApiRouter = ApiRouter;
