import { User } from '../../entities/user';

export interface UserGateway {
  createNewUser(input: User): Promise<void>
  getUserByEmail(email: string): Promise<User>
  verifyIfUserExists(id: string): Promise<boolean>
  followUser(followerId: string, followedId: string): Promise<void>
}

