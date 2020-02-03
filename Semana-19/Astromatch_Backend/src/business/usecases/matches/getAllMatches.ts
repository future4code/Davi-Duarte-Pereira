import { AuthServiceGateway } from './../../gateways/services/authService';
import { UserGateway, UserFeedResponse } from './../../gateways/user/user';


export class GetAllMatchesUseCase {
  constructor(
    private userGateway: UserGateway,
    private authServiceGateway: AuthServiceGateway
  ){}

  async execute(token: string): Promise<UserFeedResponse[]> {
    const userId = this.authServiceGateway.getUserIdFromToken(token);

    const doesUserExists: boolean = await this.userGateway.verifyIfUserExists(userId)

    if (!doesUserExists) {
      throw new Error('User not found. Please, try again.')
    }

    const users: UserFeedResponse[] = await this.userGateway.getAllMatches(userId)

    return users
  }
}

