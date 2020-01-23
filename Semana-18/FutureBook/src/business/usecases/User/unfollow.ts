import { UserGateway } from './../../gateways/User/user'
import { AuthGenerator } from '../../../services/authgenerator'


export class UnfollowUserUseCase {
  constructor(
    private userGateway: UserGateway,
    private authGateway: AuthGenerator
  ){}

  async execute(userToken: string, userToUnfollowId: string){
    const followerId = this.authGateway.getUserIdFromToken(userToken)

    if (!await this.userGateway.verifyIfUserExists(userToUnfollowId)) {
      throw new Error('User not found. Please, try again.')
    }

    await this.userGateway.unfollowUser(followerId, userToUnfollowId)

    return {
      message: 'User unfollowed successfuly.'
    }
  }
}


