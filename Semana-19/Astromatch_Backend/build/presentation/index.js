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
const unmatch_1 = require("./../business/usecases/matches/unmatch");
const express_1 = __importDefault(require("express"));
const signup_1 = require("../business/usecases/user/signup");
const userDatabase_1 = require("../data/userDatabase");
const jwtAuthService_1 = require("../services/auth/jwtAuthService");
const bcryptHashService_1 = require("../services/hash/bcryptHashService");
const moment_1 = require("../services/timestamp/moment");
const v4idService_1 = require("../services/id/v4idService");
const signin_1 = require("../business/usecases/user/signin");
const getProfiles_1 = require("../business/usecases/user/getProfiles");
const match_1 = require("../business/usecases/matches/match");
const getAllMatches_1 = require("../business/usecases/matches/getAllMatches");
exports.getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
const authenticate = (req) => {
    const authService = new jwtAuthService_1.JWTauthService();
    return authService.getUserIdFromToken(exports.getTokenFromHeaders(req.headers));
};
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
// signupEndpoint
app.post('/:route', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday,
            photo: req.body.photo
        };
        const userDatabase = new userDatabase_1.UserDatabase();
        const v4 = new v4idService_1.V4IdService();
        const jwt = new jwtAuthService_1.JWTauthService();
        const bcrypt = new bcryptHashService_1.BCryptHashService();
        const moment = new moment_1.MomentJSService();
        const useCase = new signup_1.SignUpUseCase(userDatabase, v4, jwt, bcrypt, moment);
        const result = yield useCase.execute(input);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
// signinEndpoint
app.post('/:route', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const useCase = new signin_1.SignInUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService(), new bcryptHashService_1.BCryptHashService());
        const result = yield useCase.execute(req.body.email, req.body.password);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
// getProfilesEndpoint
app.get('/:route', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = exports.getTokenFromHeaders(req.headers);
        const useCase = new getProfiles_1.GetProfilesUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
        const result = yield useCase.execute(token);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
// getMatchesEndpoint
app.get('/:route', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = exports.getTokenFromHeaders(req.headers);
        const useCase = new getAllMatches_1.GetAllMatchesUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
        const result = yield useCase.execute(token);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
// matchEndpoint
app.post('/:route/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const useCase = new match_1.MatchUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
        const result = yield useCase.execute(exports.getTokenFromHeaders(req.headers), req.params.id);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
// unmatchEndpoint
app.post('/:route/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const useCase = new unmatch_1.UnmatchUseCase(new userDatabase_1.UserDatabase(), new jwtAuthService_1.JWTauthService());
        const result = yield useCase.execute(exports.getTokenFromHeaders(req.headers), req.params.id);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
exports.default = app;
