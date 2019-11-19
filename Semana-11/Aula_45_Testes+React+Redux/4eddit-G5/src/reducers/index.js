import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./Posts";
import snackbar from "./SnackBar";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    snackbar,
    // Outros reducers aqui
  });
