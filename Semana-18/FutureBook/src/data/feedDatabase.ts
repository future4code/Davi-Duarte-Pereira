import { FeedGateway, FeedResponse } from './../business/gateways/Feed/feedGateway';
import { DatabaseBoilerplate } from "./databaseBoilerplate";
import { Post } from '../business/entities/post';

export interface PostFeedModel {
  post_id: string
  post_type: string,
  description: string,
  creation_date: Date
  photo: string
  poster_id: string
  userName: string
}



export class FeedDatabase extends DatabaseBoilerplate implements FeedGateway {

  public async getFeed(userId: string): Promise<FeedResponse[]> {
    try {
      const result = await this.connection.raw(
        `
          SELECT p.post_id, p.post_type, p.description, p.creation_date, p.photo, rel.followed_id as poster_id, u.name as userName 
          FROM users_relations_futurebook rel
          JOIN posts_futurebook p ON rel.followed_id=p.user_id
          JOIN users_futurebook u ON rel.followed_id=u.id
          WHERE follower_id="${userId}"
          ORDER BY p.creation_date DESC;
        `
      )
      
      const postsFromDB: PostFeedModel[] = result[0]
      
      return postsFromDB.map((post) => ({
        post: new Post(
          post.photo, 
          post.description, 
          new Date(post.creation_date), 
          post.post_type, 
          post.post_id, 
          post.poster_id
        ),
        userName: post.userName
      }))

    } catch (e) {
      throw new Error(e)
    }
  } 
}

