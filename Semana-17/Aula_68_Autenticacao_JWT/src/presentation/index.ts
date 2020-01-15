import { SignUpUseCase, SignUpUseCaseInput } from './../business/usecases/User/signUp';
import express, {Request, Response} from 'express'
import { UserDatabase } from '../data/userDatabase';
import { BCryptHashGenerator } from '../services/hashGenerator';
import { V4IdGenerator } from '../services/IdGenerator';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response) => {

  const input: SignUpUseCaseInput =  {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  const v4 = new V4IdGenerator()
  const bcrypt = new BCryptHashGenerator();
  const database = new UserDatabase(bcrypt);
  const useCase = new SignUpUseCase(database, v4);

  const result = await useCase.execute(input)

  res.send(result)

})

export default app