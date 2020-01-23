import { UserGateway } from "../../gateways/User/user";
import { AuthGenerator } from "../../../services/authgenerator";


export class FollowUserUseCase {
  constructor(
    private userGateway: UserGateway,
    private authGateway: AuthGenerator
  ){}

  async execute(followerToken: string, followedId: string) {
    const followerId = this.authGateway.getUserIdFromToken(followerToken);

    if (!await this.userGateway.verifyIfUserExists(followedId)) {
      throw new Error('User not found. Please, try again.')
    }

    await this.userGateway.followUser(followerId, followedId);

    return {
      message: "User followed successfuly."
    }
  }
}


