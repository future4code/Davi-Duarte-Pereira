import { User } from './../../entities/user';

export interface UserGateway {
  createNewUser(input: User): Promise<void>
}
