import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import express, {Request, Response}  from 'express'
import cors from 'cors'
import { SignUpUseCaseInput, SignUpUseCase } from './business/usecases/signUp'
import { UserDatabase } from './data/userDatabase'

const app = express()
app.use(cors())

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const newUser: SignUpUseCaseInput = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday,
      photo: req.body.photo,
      id: req.body.id
    }

    const useCase =  new SignUpUseCase(new UserDatabase())

    const result = await useCase.execute(newUser)

    res.status(200).send(result)

  } catch (err) {
    return {
      ...err,
      errorMessage: err.message
    }
  }
})

export default app

admin.initializeApp()

export const tubeApi = functions.https.onRequest(app)

