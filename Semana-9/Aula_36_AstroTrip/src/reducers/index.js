import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import trips from "./trips"
import detailedTrip from "./detailedTrips"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    detailedTrip,
  });
