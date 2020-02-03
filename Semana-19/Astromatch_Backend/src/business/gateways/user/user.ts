import { User } from './../../entities/user';

export interface UserFeedResponse {
  id: string
  name: string
  birthday: string
  age: number
  photo: string
}

export interface UserGateway {
  createNewUser(input: User): Promise<void>
  getUserByEmail(email: string): Promise<User>
  verifyIfUserExists(id: string): Promise<boolean>
  getAllUsers(userId: string): Promise<UserFeedResponse[]>
  getAllMatches(userId: string): Promise<UserFeedResponse[]>
  match(personWhoLikedId: string, likedPersonId: string): Promise<void>
  unmatch(personWhoLikedId: string, userToUnmatchId: string): Promise<void>
}
