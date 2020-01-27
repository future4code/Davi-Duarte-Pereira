import { PostGateway } from './../business/gateways/Post/post';
import { DatabaseBoilerplate } from "./databaseBoilerplate";
import { Post } from '../business/entities/post';


export class PostDatabase extends DatabaseBoilerplate implements PostGateway {

  private static TABLE_NAME: string = "posts_futurebook"

  public async createNewPost(input: Post): Promise<void> {
    try {
      await this.connection.raw(
        `INSERT INTO ${PostDatabase.TABLE_NAME} (
          post_id, 
          user_id, 
          photo, 
          description, 
          creation_date, 
          post_type
        ) VALUES (
          '${input.getPostId()}',
          '${input.getUserId()}',
          '${input.getPhoto()}',
          '${input.getDescription()}',
          '${this.getSQLDateFromTSDate(input.getDate())}',
          '${input.getPostType()}'
        );`
      )
    } catch (e) {
      throw new Error(e);
    }
  } 
}

