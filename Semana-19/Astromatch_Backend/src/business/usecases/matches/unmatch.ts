import { AuthServiceGateway } from './../../gateways/services/authService';
import { UserGateway } from './../../gateways/user/user';


export class UnmatchUseCase {
  constructor(
    private userGateway: UserGateway,
    private authServiceGateway: AuthServiceGateway
  ){}

  async execute(userAuthToken: string, idOfTheMatched: string) {
    const personWhoLikedId = this.authServiceGateway.getUserIdFromToken(userAuthToken)

    const doesUserExists = await this.userGateway.verifyIfUserExists(idOfTheMatched)

    if (!doesUserExists) {
      throw new Error('User not found. Please, try again.')
    }

    await this.userGateway.unmatch(personWhoLikedId, idOfTheMatched)

    return {
      message: "User unmatched successfuly."
    }
  }
}

