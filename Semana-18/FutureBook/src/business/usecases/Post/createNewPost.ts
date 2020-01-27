import { IdGenerator } from './../../../services/IdGenerator';
import { AuthGenerator } from './../../../services/authgenerator';
import { Post } from "../../entities/post";
import { PostGateway } from '../../gateways/Post/post';

// TODO: TIPAR OS GATEWAYS DE FATO
export class CreateNewPostUseCase {
  constructor(
    private idGeneratorGateway: IdGenerator,
    private postDatabaseGateway: PostGateway,
    private authValidatorGateway: AuthGenerator
  ){}

  async execute(input: CreateNewPostUCInput){
    try {
    
      const userId = this.authValidatorGateway.getUserIdFromToken(input.authToken);

      const newPost = new Post(
        input.photo,
        input.description,
        new Date(),
        input.postType,
        this.idGeneratorGateway.generate(),
        userId
      )

      await this.postDatabaseGateway.createNewPost(newPost);

      return {
        message: "Post created successfuly."
      }

    } catch (e) {
      throw new Error(e)
    }
  }
}

export interface CreateNewPostUCInput {
  photo: string
  description: string,
  postType: string,
  authToken: string
}


