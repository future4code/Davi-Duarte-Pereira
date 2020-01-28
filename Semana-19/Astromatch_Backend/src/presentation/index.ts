import express, {Request, Response} from 'express'
import { SignUpUseCaseInput, SignUpUseCase } from '../business/usecases/user/signup'
import { UserDatabase } from '../data/userDatabase'
import { JWTauthService } from '../services/auth/jwtAuthService'
import { BCryptHashService } from '../services/hash/bcryptHashService'
import { MomentJSService } from '../services/timestamp/moment'
import { V4IdService } from '../services/id/v4idService'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response) => {

  try { 
    const input: SignUpUseCaseInput =  {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      photo: req.body.photo
    }

    const userDatabase = new UserDatabase()
    const v4 =  new V4IdService()
    const jwt = new JWTauthService()
    const bcrypt = new BCryptHashService()
    const moment =  new MomentJSService()

    const useCase = new SignUpUseCase(
      userDatabase,
      v4,
      jwt,
      bcrypt,
      moment
    )

    const result = await useCase.execute(input)

    res.status(200).send(result)
    
  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }

})

export default app