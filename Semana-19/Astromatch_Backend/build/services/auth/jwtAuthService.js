"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class JWTauthService {
    generate(userId) {
        const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
            expiresIn: '1h'
        });
        return token;
    }
    getUserIdFromToken(token) {
        const verifiedResult = jwt.verify(token, this.getJwtSecretKey());
        return verifiedResult.userId;
    }
    getJwtSecretKey() {
        if (!process.env[JWTauthService.SECRET_KEY]) {
            throw new Error("Jwt secret key not found. Maybe you have forgotten to export it.");
        }
        return process.env[JWTauthService.SECRET_KEY];
    }
}
exports.JWTauthService = JWTauthService;
JWTauthService.SECRET_KEY = "JWT_SECRET";
