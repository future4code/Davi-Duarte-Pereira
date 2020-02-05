import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import express, {Request, Response}  from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.post('/signup', (req: Request, res: Response) => {
  res.send("Endpoint created successfully!")
})

admin.initializeApp()

export const tubeApi = functions.https.onRequest(app)

