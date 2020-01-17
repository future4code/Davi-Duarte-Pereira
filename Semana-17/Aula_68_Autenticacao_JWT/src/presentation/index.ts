import { SignInUseCaseInput } from './../business/usecases/User/signIn';
import { SignUpUseCase, SignUpUseCaseInput } from './../business/usecases/User/signUp';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';
import { BCryptHashGenerator } from '../services/hashGenerator';
import { V4IdGenerator } from '../services/IdGenerator';
import { JWTauthGenerator } from '../services/authgenerator';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response) => {

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

  res.send(result)

})

app.post('/signin', async (req: Request, res: Response) => {
  const input: SignInUseCaseInput = {
    email: req.body.email,
    password: req.body.password
  }

  const jwt = new JWTauthGenerator()
  const bcrypt = new BCryptHashGenerator()

})

export default app