import { HashServiceGateway } from './../../gateways/services/hashService';
import { AuthServiceGateway } from './../../gateways/services/authService';
import { UserGateway } from './../../gateways/user/user';

export class SignInUseCase {
  constructor(
    private userGateway: UserGateway,
    private tokenGateway: AuthServiceGateway,
    private cryptographyGateway: HashServiceGateway
  ){}

  async execute (
    email: string,
    password: string
  ): Promise <SignInUseCaseOutput> {
    const user = await this.userGateway.getUserByEmail(email)
    const comparedPassword = await this.cryptographyGateway.compareHash(
      password,
      user.getPassword()
    )

    if (!comparedPassword) {
      throw new Error("Incorrect password. Try again.")
    }

    return {
      token: this.tokenGateway.generate(user.getId())
    }
  }
}

export interface SignInUseCaseOutput {
  token: string
}


