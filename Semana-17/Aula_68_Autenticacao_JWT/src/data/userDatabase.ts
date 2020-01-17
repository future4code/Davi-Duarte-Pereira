import { UserGateway } from './../business/gateways/User/user';
import { DatabaseBoilerplate } from './databaseBoilerplate';
import { User } from '../business/entities/user';


export class UserDatabase extends DatabaseBoilerplate implements UserGateway {

  public async saveUser(input: User): Promise<void> {
    try {
      await this.connection.raw(
      `INSERT INTO davi.users_Food4U (id, name, email, password) VALUES(
        '${input.getId()}',
        '${input.getName()}', 
        '${input.getEmail()}', 
        '${input.getPassword()}');
      `
    )} catch (e) {
      throw new Error(e)
    }
  }
}