import { User } from '../entities/user';


export interface UserDataSource {
  saveNewUser(input: User): Promise<void>
}

