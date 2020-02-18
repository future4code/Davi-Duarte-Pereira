import { User } from './../business/entities/user'
import { UserDataSource } from './../business/gateways/userDataSource'
import * as firebase from 'firebase-admin'

export class UserDatabase implements UserDataSource {
  
  async saveNewUser(input: User): Promise<void> {
    try {
      await firebase.firestore().collection('users').doc(input.getId()).set({
        username: input.getName(),
        email: input.getEmail(),
        birthday: input.getBirthday(),
        photo: input.getPhoto()
      }) 
    } catch (e) {
      throw new Error(e)
    }
  }

}


