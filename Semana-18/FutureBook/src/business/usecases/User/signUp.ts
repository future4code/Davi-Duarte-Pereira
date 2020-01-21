import { HashGenerator } from './../../../services/hashGenerator';
import { IdGenerator } from './../../../services/IdGenerator';
import { UserGateway } from './../../gateways/User/user';
import { User } from '../../entities/user';
import { AuthGenerator } from '../../../services/authgenerator';

export class SignUpUseCase {
  constructor(
    private userGateway: UserGateway,
    private idGenerator: IdGenerator,
    private authGenerator: AuthGenerator,
    private hashGenerator: HashGenerator
  ){}

  async execute(input: SignUpUseCaseInput) {

    this.validatePassword(input.password);

    const newUser = new User( 
      input.name, 
      input.email, 
      await this.hashGenerator.generate(input.password), 
      this.idGenerator.generate()
    );

    await this.userGateway.createNewUser(newUser);

    return {
      auth: this.authGenerator.generate(newUser.getId())
    }
  }

  private validatePassword(password: string) {
    if (password.length <= 6) {
      throw new Error(`Your password should have at least 7 characters.`);
    }
  }
}

export interface SignUpUseCaseInput {
  name: string
  email: string
  password: string
  id?: string
}


