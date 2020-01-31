import { UnmatchUseCase } from './../business/usecases/matches/unmatch';
import express, {Request, Response} from 'express'
import { SignUpUseCaseInput, SignUpUseCase } from '../business/usecases/user/signup'
import { UserDatabase } from '../data/userDatabase'
import { JWTauthService } from '../services/auth/jwtAuthService'
import { BCryptHashService } from '../services/hash/bcryptHashService'
import { MomentJSService } from '../services/timestamp/moment'
import { V4IdService } from '../services/id/v4idService'
import { SignInUseCase } from '../business/usecases/user/signin'
import { GetProfilesUseCase } from '../business/usecases/user/getProfiles'
import { MatchUseCase } from '../business/usecases/matches/match'
import { GetAllMatchesUseCase } from '../business/usecases/matches/getAllMatches';


export const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

const authenticate = (req: Request) => {
  const authService = new JWTauthService()
  return authService.getUserIdFromToken(getTokenFromHeaders(req.headers))
}

const app = express()
app.use(express.json()) // Linha mágica (middleware)

// signupEndpoint
app.post('/:route', async (req: Request, res: Response) => {

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

// signinEndpoint
app.post('/:route', async (req: Request, res: Response) => {

  try {
    const useCase = new SignInUseCase(
      new UserDatabase(),
      new JWTauthService(),
      new BCryptHashService()
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

// getProfilesEndpoint
app.get('/:route', async (req: Request, res: Response) => {
  try {
    const token = getTokenFromHeaders(req.headers)

    const useCase = new GetProfilesUseCase(
      new UserDatabase(),
      new JWTauthService()
    )

    const result = await useCase.execute(token)

    res.status(200).send(result)

  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

// getMatchesEndpoint
app.get('/:route', async (req: Request, res: Response) => {
  try {
    const token = getTokenFromHeaders(req.headers)

    const useCase = new GetAllMatchesUseCase(
      new UserDatabase(),
      new JWTauthService()
    )

    const result = await useCase.execute(token)

    res.status(200).send(result)

  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    })
  }
})

// matchEndpoint
app.post('/:route/:id', async (req: Request, res: Response) => {
  try {
    const useCase = new MatchUseCase(
      new UserDatabase(),
      new JWTauthService()
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

// unmatchEndpoint
app.post('/:route/:id', async (req: Request, res: Response) => {
  try {
    const useCase = new UnmatchUseCase(
      new UserDatabase(),
      new JWTauthService()
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
