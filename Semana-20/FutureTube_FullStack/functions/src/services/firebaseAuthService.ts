import * as admin from 'firebase-admin'

export class FirebaseAuthService {
  async signUp(email: string, password: string): Promise<any> {
    try {
      const credential = await admin.auth().createUser({email, password})
      return credential.uid
    } catch (e) {
      throw new Error(e)
    }
  }

}
