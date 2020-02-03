import { AuthServiceGateway } from './../../business/gateways/services/authService';
import * as jwt from 'jsonwebtoken';


export class JWTauthService implements AuthServiceGateway {

  private static SECRET_KEY = "JWT_SECRET"

  public generate(userId: string): string {
    const token = jwt.sign({ userId }, this.getJwtSecretKey(), {
      expiresIn: '1h'
    });

    return token;
  }

  public getUserIdFromToken(token: string): string {
    const verifiedResult = jwt.verify(token, this.getJwtSecretKey()) as {
      userId: string
    }
    return verifiedResult.userId;
  }

  private getJwtSecretKey(): string {
    if (!process.env[JWTauthService.SECRET_KEY]) {
      throw new Error(
        "Jwt secret key not found. Maybe you have forgotten to export it."
      );
    }
    return process.env[JWTauthService.SECRET_KEY]!;
  }
}

