import { UserGateway } from './../business/gateways/User/user';
import { DatabaseBoilerplate } from './databaseBoilerplate';
import { User } from '../business/entities/user';


export class UserDatabase extends DatabaseBoilerplate implements UserGateway {

  private static USERS_TABLE = 'users_futurebook'
  private static USERS_RELATIONS_TABLE = 'users_relations_futurebook'

  public async createNewUser(input: User): Promise<void> {
    try {
      await this.connection.raw(
        `INSERT INTO ${UserDatabase.USERS_TABLE} (id, name, email, password) VALUES(
          '${input.getId()}',
          '${input.getName()}', 
          '${input.getEmail()}', 
          '${input.getPassword()}');
        `
      )
    } catch (e) {
      throw new Error(e)
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM ${UserDatabase.USERS_TABLE} WHERE email='${email}';`
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

  public async verifyIfUserExists(id: string): Promise<boolean> {
    const query = await this.connection.raw(
      `SELECT * FROM ${UserDatabase.USERS_TABLE} WHERE id='${id}';`
    )

    const returnedUser = query[0][0]
    return Boolean(returnedUser)
  }

  public async followUser(followerId: string, followedId: string): Promise<void> {
    try {
      await this.connection.raw(
        `
          INSERT INTO ${UserDatabase.USERS_RELATIONS_TABLE} (follower_id, followed_id) 
          VALUES ('${followerId}','${followedId}');
        `
      )
    } catch (e) {
      throw new Error(e)
    }
  }

  public async unfollowUser(followerId: string, userToUnfollowId: string): Promise<void> {
    try {
      await this.connection.raw(
        `
          DELETE FROM ${UserDatabase.USERS_RELATIONS_TABLE}
          WHERE (follower_id = '${followerId}') and (followed_id = '${userToUnfollowId}');
        `
      )
    } catch (e) {
      throw new Error(e)
    }
  }

  


}

