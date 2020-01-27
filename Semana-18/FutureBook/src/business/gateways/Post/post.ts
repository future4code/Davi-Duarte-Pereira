import { Post } from "../../entities/post";


export interface PostGateway {
  createNewPost(input: Post): Promise<void>
}