import { User } from './../entities/user';
import { AuthServiceGateway } from './../gateways/authServiceGateway';
import { UserDataSource } from './../gateways/userDataSource';


export class SignUpUseCase {
  constructor(
    private userDataSource: UserDataSource,
    private authServiceGateway: AuthServiceGateway
  ){}

  async execute(input: SignUpUseCaseInput): Promise<Object>{

    const userId = await this.authServiceGateway.signUp(input.email, input.password)

    const newUser: User = new User(
      input.name,
      input.email,
      input.password,
      input.birthday,
      input.photo,
      userId
    )

    await this.userDataSource.saveNewUser(newUser)

    return {
      message: 'User created successfully!'
    }

  }
}


export interface SignUpUseCaseInput {
  name: string,
  password: string
  email: string,
  birthday: string,
  photo: string
}
