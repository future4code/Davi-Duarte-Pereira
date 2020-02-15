import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import  auth from './auth'
import dateForm from './dateForm'

export const generateReducers = history => combineReducers({
  router: connectRouter(history),
  auth,
  dateForm
})