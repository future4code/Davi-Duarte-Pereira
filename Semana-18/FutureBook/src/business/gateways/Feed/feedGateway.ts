import { Post } from "../../entities/post";


export interface FeedResponse {
  post: Post
  userName: string
}

export interface FeedGateway {
  getFeed(userId: string): Promise<FeedResponse[]> 
} 