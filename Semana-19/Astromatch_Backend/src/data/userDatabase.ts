import { User } from './../business/entities/user';
import { UserGateway, UserFeedResponse } from './../business/gateways/user/user';
import { BaseDatabase } from "./baseDatabase";



export class UserDatabase extends BaseDatabase implements UserGateway {

  private static USERS_TABLE = 'users_astromatch'
  private static USERS_RELATIONS_TABLE = 'matches_astromatch'

  public async createNewUser(input: User): Promise<void> {
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
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM ${UserDatabase.USERS_TABLE} WHERE email='${email}'`
    )

    const returnedUser = query[0][0]

    if (!returnedUser) {
      throw new Error('User not found.')
    }

    const newUser = new User(
      returnedUser.name,
      returnedUser.email,
      returnedUser.password,
      returnedUser.id,
      returnedUser.birthday,
      returnedUser.age,
      returnedUser.photo
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

  public async getAllUsers(userId: string): Promise<UserFeedResponse[]> {
    const query = await this.connection.raw(
      `SELECT id, name, email, birthday, age, photo FROM ${UserDatabase.USERS_TABLE} WHERE id<>"${userId}";`
    )

    const users = query[0]

    const usersArray = users.map(this.dbModelToUser)

    const result: UserFeedResponse[] = usersArray.map((user: User) => {
      return {
        id: user.getId(),
        name: user.getName(),
        birthday: user.getbirthday(),
        age: user.getAge(),
        photo: user.getPhoto()
      }
    })

    return result
  }

  public async getAllMatches(userId: string): Promise<UserFeedResponse[]> {
    const query = await this.connection.raw(
      `
        SELECT
         u.id, 
         u.name, 
         u.email, 
         u.birthday, 
         u.age, 
         u.photo,
         rel.is_a_match 
        FROM ${UserDatabase.USERS_RELATIONS_TABLE} rel
        JOIN ${UserDatabase.USERS_TABLE} u ON rel.id_liked_one=u.id
        WHERE rel.id_that_liked="${userId}" AND rel.is_a_match=1;
      `
    )

    const users = query[0]

    const usersArray = users.map(this.dbModelToUser)

    const result: UserFeedResponse[] = usersArray.map((user: User) => {
      return {
        id: user.getId(),
        name: user.getName(),
        birthday: user.getbirthday(),
        age: user.getAge(),
        photo: user.getPhoto()
      }
    })

    return result
  }


  public async match(personWhoLikedId: string, likedPersonId: string): Promise<void> {
    try {
      await this.connection.raw(
        `
        INSERT INTO ${UserDatabase.USERS_RELATIONS_TABLE} (id_that_liked, id_liked_one, is_a_match) 
        VALUES ('${personWhoLikedId}','${likedPersonId}', '${this.isAmatch()}');
        `
      ) 
    } catch (error) {
      throw new Error(error.message)
    }
  }

  public async unmatch(personWhoLikedId: string, userToUnmatchId: string): Promise<void> {
    try {
      await this.connection.raw(
        `
          DELETE FROM ${UserDatabase.USERS_RELATIONS_TABLE}
          WHERE (id_that_liked = '${personWhoLikedId}') and (id_liked_one = '${userToUnmatchId}');
        `
      )
    } catch (error) {
      throw new Error(error.message)
    }
  }


}



