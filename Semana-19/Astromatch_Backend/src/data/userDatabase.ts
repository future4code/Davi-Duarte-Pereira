import { UserGateway } from './../business/gateways/user/user';
import { BaseDatabase } from "./baseDatabase";
import { User } from '../business/entities/user';



export class UserDatabase extends BaseDatabase implements UserGateway {

  private static USERS_TABLE = 'users_astromatch'
  private static USERS_RELATIONS_TABLE = 'matches_astromatch'

  public async createNewUser(input: User): Promise<void> {
    try {
      await this.connection.raw(
        `
          INSERT INTO ${UserDatabase.USERS_TABLE} (id, name, email, birthday, age, photo, password) 
          VALUES (
            '${input.getId()}', 
            '${input.getName()}', 
            '${input.getEmail()}', 
            '${input.getbirthday()}', 
            ${input.getAge()}, 
            '${input.getPhoto()}', 
            '${input.getPassword()}'
          );
        `
      )
    } catch (e) {
      throw new Error(e)
    }
  }

}



