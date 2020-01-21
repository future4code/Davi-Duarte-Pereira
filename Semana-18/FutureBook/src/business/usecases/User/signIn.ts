import { HashGenerator } from './../../../services/hashGenerator';
import { AuthGenerator } from './../../../services/authgenerator';
import { UserGateway } from './../../gateways/User/user';

export class SignInUseCase {
  constructor(
    private userGateway: UserGateway,
    private tokenGateway: AuthGenerator,
    private cryptographyGateway: HashGenerator
  ){}

  async execute(
    email: string, 
    password: string, 
  ) : Promise <SignInUseCaseOutput> {
    const user = await this.userGateway.getUserByEmail(email);
    const comparedPassword = await this.cryptographyGateway.compareHash(
      password,
      user.getPassword()
    );

    if (!comparedPassword) {
      throw new Error("Incorrect password. Try again.");
    }

    return {
      token: this.tokenGateway.generate(user.getId())
    };
  }

}


export interface SignInUseCaseOutput {
  token: string;
}