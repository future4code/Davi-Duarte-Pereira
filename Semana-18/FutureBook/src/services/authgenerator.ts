import * as jwt from 'jsonwebtoken';

export interface AuthGenerator {
  generate(userId: string): string
}

export class JWTauthGenerator implements AuthGenerator {
  public generate(userId: string): string {
    const secretKey: string = process.env.JWT_SECRET || ''

    const token = jwt.sign({ userId }, secretKey, {
      expiresIn: '1h'
    });

    return token;
  }
}

