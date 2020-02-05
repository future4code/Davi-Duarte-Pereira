import { AuthServiceGateway } from './../business/gateways/authServiceGateway';
import * as firebase from 'firebase-admin'

export class FirebaseAuthService implements AuthServiceGateway {
  async signUp(email: string, password: string): Promise<any> {
    try {
      const credential = await firebase.auth().createUser({email, password})

      return credential.uid
    } catch (e) {
      throw new Error (e)
    }
  }
}
