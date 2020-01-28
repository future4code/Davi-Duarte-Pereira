import { TimestampServiceGateway } from './../../gateways/services/timestampService';
import { HashServiceGateway } from './../../gateways/services/hashService';
import { AuthServiceGateway } from './../../gateways/services/authService';
import { IdServiceGateway } from './../../gateways/services/idService';
import { UserGateway } from './../../gateways/user/user';
import { User } from '../../entities/user';


export class SignUpUseCase {
  constructor(
    private userGateway: UserGateway,
    private idServiceGateway: IdServiceGateway,
    private authServiceGateway: AuthServiceGateway,
    private hashServiceGateway: HashServiceGateway,
    private timestampServiceGateway: TimestampServiceGateway
  ){}

  async execute(input: SignUpUseCaseInput ): Promise<{auth: string}> {
    
    this.validatePassword(input.password)

    const userAge: number = this.timestampServiceGateway.getUserAge(input.birthday)

    const userBirthday: string = this.timestampServiceGateway.getTreatedDateForSQL(input.birthday)

    const newUser = new User(
      input.name,
      input.email,
      await this.hashServiceGateway.generate(input.password),
      this.idServiceGateway.generate(),
      userBirthday,
      userAge,
      input.photo
    )

    await this.userGateway.createNewUser(newUser)

    return {
      auth: this.authServiceGateway.generate(newUser.getId())
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
  birthday: string
  photo: string
}

