import { FeedGateway } from './../../gateways/Feed/feedGateway';


export class GetFeedUseCase {
  constructor(
    private feedGateway: FeedGateway
  ){}

  async execute(userId: string): Promise<GetFeedOutput> {    
    const responses = await this.feedGateway.getFeed(userId)
    return {
      posts: responses.map((response) => ({
        photo: response.post.getPhoto(),
        description: response.post.getDescription(),
        creationDate: response.post.getDate(),
        postType: response.post.getPostType(),
        userName: response.userName
      }))
    }
  }
}

export interface GetFeedOutput {
  posts: Array<{
    photo: string
    description: string
    creationDate: Date
    postType: string
    userName: string
  }>
}