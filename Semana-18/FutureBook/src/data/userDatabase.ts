import { UserGateway } from './../business/gateways/User/user';
import { DatabaseBoilerplate } from './databaseBoilerplate';
import { User } from '../business/entities/user';


export class UserDatabase extends DatabaseBoilerplate implements UserGateway {

  public async createNewUser(input: User): Promise<void> {
    try {
      await this.connection.raw(
      `INSERT INTO davi.users_futurebook (id, name, email, password) VALUES(
        '${input.getId()}',
        '${input.getName()}', 
        '${input.getEmail()}', 
        '${input.getPassword()}');
      `
    )} catch (e) {
      throw new Error(e)
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM users_futurebook WHERE email='${email}';`
    );
    const returnedUser = query[0][0];

    if (!returnedUser) {
      throw new Error('User not found.');
    }

    const newUser = new User(
      returnedUser.name,
      returnedUser.email,
      returnedUser.password,
      returnedUser.id
    )

    return newUser
  }
}

