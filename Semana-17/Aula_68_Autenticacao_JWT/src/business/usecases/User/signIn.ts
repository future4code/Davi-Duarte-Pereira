import { UserGateway } from './../../gateways/User/user'


export class SignInUseCase {
  constructor(
    private userGateway: UserGateway 
  ){}

  async execute(){
    
  }
}

export interface SignInUseCaseInput {
  email: string,
  password: string
}