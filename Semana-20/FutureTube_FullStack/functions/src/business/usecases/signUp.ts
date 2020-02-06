import { User } from './../entities/user';
import { UserDataSource } from './../gateways/userDataSource';


export class SignUpUseCase {
  constructor(
    private userDataSource: UserDataSource,
  ){}

  async execute(input: SignUpUseCaseInput): Promise<Object>{

    const newUser: User = new User(
      input.name,
      input.email,
      input.password,
      input.birthday,
      input.photo,
      input.id
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
  photo: string,
  id: string
}
