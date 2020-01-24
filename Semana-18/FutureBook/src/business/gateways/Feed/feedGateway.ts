import { Post } from "../../entities/post";


export interface FeedResponse {
  post: Post
  userName: string
}

export interface FeedGateway {
  getFeed(userId: string): Promise<FeedResponse[]>
  getPaginatedFeed(input: FeedGatewayInput): Promise<FeedResponse[]>
}

export interface FeedGatewayInput {
  userId: string 
  type: string 
  limit: number 
  offset: number 
  ordenation: string
}