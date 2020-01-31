import { getTokenFromHeaders } from './index';
import { SignUpUseCaseInput, SignUpUseCase } from './../business/usecases/user/signup';
import { UserDatabase } from '../data/userDatabase';
import { V4IdService } from '../services/id/v4idService';
import { JWTauthService } from '../services/auth/jwtAuthService';
import { BCryptHashService } from '../services/hash/bcryptHashService';
import { MomentJSService } from '../services/timestamp/moment';
import { SignInUseCase } from '../business/usecases/user/signin';
import { GetProfilesUseCase } from '../business/usecases/user/getProfiles';
import { GetAllMatchesUseCase } from '../business/usecases/matches/getAllMatches';
import { MatchUseCase } from '../business/usecases/matches/match';
import { UnmatchUseCase } from '../business/usecases/matches/unmatch';


export class ApiRouter {
  public static async handleRoute(path: string, event: any): Promise<any> {
    // Para testar o helloWorld, bata no endpoint: url/helloWorld
    switch (path) {
      // Method: POST
      case "signup":
        try {
          const input: SignUpUseCaseInput = {
            name: event.body.name,
            email: event.body.email,
            password: event.body.password,
            birthday: event.body.birthday,
            photo: event.body.photo
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

          return result

        } catch (err) {
          return {
            ...err,
            errMessage: err.message
          }
        }
      // Method: POST
      case "signin":
        try {
          const useCase = new SignInUseCase(
            new UserDatabase(),
            new JWTauthService(),
            new BCryptHashService()
          )
      
          const result = await useCase.execute(event.body.email, event.body.password)
          
          return result      
        } catch (err) {
          return {
            ...err,
            errorMessage: err.message
          }
        }
      // Method: GET
      case "profiles":
        try {
          const token = getTokenFromHeaders(event.headers)
      
          const useCase = new GetProfilesUseCase(
            new UserDatabase(),
            new JWTauthService()
          )
      
          const result = await useCase.execute(token)
      
          return result
      
        } catch (err) {
          return {
            ...err,
            errorMessage: err.message
          }
        }
      // Method: GET
      case "matches":
        try {
          const token = getTokenFromHeaders(event.headers)
      
          const useCase = new GetAllMatchesUseCase(
            new UserDatabase(),
            new JWTauthService()
          )
      
          const result = await useCase.execute(token)
      
          return result
      
        } catch (err) {
          return {
            ...err,
            errorMessage: err.message
          }
        }
      // Method: POST
      case "match":
        try {
          const useCase = new MatchUseCase(
            new UserDatabase(),
            new JWTauthService()
          )
          
          const result = await useCase.execute(getTokenFromHeaders(event.headers), event.body.id)
      
          return result
          
        } catch (err) {
          return {
            ...err,
            errorMessage: err.message
          }
        }
      // Method: POST
      case "unmatch":
        try {
          const useCase = new UnmatchUseCase(
            new UserDatabase(),
            new JWTauthService()
          )
      
          const result = await useCase.execute(getTokenFromHeaders(event.headers), event.body.id)
      
          return result
          
        } catch (err) {
          return {
            ...err,
            errorMessage: err.message
          }
        }
      default:
        throw new Error("This rout doesnt exist. Please, try again");
    }
  }
}
