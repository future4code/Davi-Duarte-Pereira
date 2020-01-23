import { CreateNewPostUseCase, CreateNewPostUCInput } from './../business/usecases/Post/createNewPost';
import { SignInUseCase } from './../business/usecases/User/signIn';
import { SignUpUseCase, SignUpUseCaseInput } from './../business/usecases/User/signUp';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';
import { BCryptHashGenerator } from '../services/hashGenerator';
import { V4IdGenerator } from '../services/IdGenerator';
import { JWTauthGenerator } from '../services/authgenerator';
import { PostDatabase } from '../data/postDatabase';
import { FollowUserUseCase } from '../business/usecases/User/follow';
import { UnfollowUserUseCase } from '../business/usecases/User/unfollow';

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response) => {

  try { 
    const input: SignUpUseCaseInput =  {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    const jwt = new JWTauthGenerator()
    const v4 = new V4IdGenerator()
    const bcrypt = new BCryptHashGenerator()
    const database = new UserDatabase()
    const useCase = new SignUpUseCase(database, v4, jwt, bcrypt)

    const result = await useCase.execute(input)

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }

})

app.post('/signin', async (req: Request, res: Response) => {

  try {
    const useCase = new SignInUseCase(
      new UserDatabase(),
      new JWTauthGenerator(),
      new BCryptHashGenerator()
    )

    const result = await useCase.execute(req.body.email, req.body.password);
    res.status(200).send(result);

  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

app.post('/createNewPost', async (req: Request, res: Response) => {

  try {
    const useCase = new CreateNewPostUseCase(
      new V4IdGenerator(),
      new PostDatabase(),
      new JWTauthGenerator()
    )

    const input: CreateNewPostUCInput = {
      photo: req.body.photo,
      description: req.body.description,
      postType: req.body.type,
      authToken: getTokenFromHeaders(req.headers)
    }

    const result = await useCase.execute(input);

    console.log

    res.status(200).send(result);

  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

app.post('/follow/:id', async (req: Request, res: Response) => {
  try {
    const useCase = new FollowUserUseCase(
      new UserDatabase(),
      new JWTauthGenerator()
    )
    
    const result = await useCase.execute(getTokenFromHeaders(req.headers), req.params.id)

    res.status(200).send(result)
    
  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

app.post('/unfollow/:id', async (req: Request, res: Response) => {
  try {
    const useCase = new UnfollowUserUseCase(
      new UserDatabase(),
      new JWTauthGenerator()
    )

    const result = await useCase.execute(getTokenFromHeaders(req.headers), req.params.id)

    res.status(200).send(result)
    
  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

export default app
