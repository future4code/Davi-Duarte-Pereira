import { User } from '../../entities/user';

export interface UserGateway {
  saveUser(input: User): Promise<void>
}

