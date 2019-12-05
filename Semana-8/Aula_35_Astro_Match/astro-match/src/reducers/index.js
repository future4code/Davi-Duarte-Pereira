import { combineReducers } from 'redux'
import routes from './routes'
import profiles from './profiles'
import matches from './matches'

const rootReducer = combineReducers({
  routes, // equivalente a routes: routes
  profiles, // equivalente a profiles: profiles
  matches,
})

export default rootReducer;
