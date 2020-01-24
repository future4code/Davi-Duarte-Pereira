import { FeedGateway, FeedGatewayInput } from './../../gateways/Feed/feedGateway';
import { GetFeedOutput } from './getFeed';


export class GetPaginatedFeedUseCase {
  private static POSTS_BY_PAGE = 10
  constructor(
    private feedGateway: FeedGateway
  ){}

  async execute(input: GetPaginatedFeedUseCaseInput): Promise<GetFeedOutput> {


    let page = input.page
    if (page <= 0) {
      page = 1
    }
    
    const offset = GetPaginatedFeedUseCase.POSTS_BY_PAGE * (page - 1)

    const data: FeedGatewayInput = {
      userId: input.userId,
      type: input.type,
      limit: GetPaginatedFeedUseCase.POSTS_BY_PAGE,
      offset,
      ordenation: input.ordenation
    }

    const responses = await this.feedGateway.getPaginatedFeed(data)

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

export interface GetPaginatedFeedUseCaseInput {
  userId: string, 
  type: string, 
  page: number, 
  ordenation: string
}
