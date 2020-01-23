import { Post } from "../../entities/post";


export interface FeedResponse {
  post: Post
  user: string
}

export interface FeedGateway {
  getFeed(userId: string): Promise<FeedResponse[]> 
} 