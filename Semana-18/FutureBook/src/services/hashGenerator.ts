import * as bcrypt from 'bcrypt'

export interface HashGenerator {
  generate(password: string): Promise<string>
  compareHash(password: string, hash: string): Promise<boolean>
}

export class BCryptHashGenerator implements HashGenerator {
  async generate(password: string): Promise<string> {
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    return hashedPassword;
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

