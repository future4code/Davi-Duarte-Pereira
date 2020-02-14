import axios from 'axios'
import {push} from 'connected-react-router'
import {routes} from '../containers/Router'

const baseUrl = 'https://us-central1-futuretube-newton-davi.cloudfunctions.net/tubeApi'

export const signup = (
  name, 
  email, 
  password, 
  birthdate, 
  photo, 
  id
) => async (dispatch) => {
  try {
    const data = {
      name, 
      email, 
      password, 
      birthdate, 
      photo, 
      id  
    }
    await axios.post(`${baseUrl}/signup`, data)
    dispatch(push(routes.root))
  } catch (err) {
    return err.message
  }
}

export const setLoggedInState = (isLoggedIn) => ({
  type: "SET_LOGGED_IN",
  payload: {
    isLoggedIn
  }
})