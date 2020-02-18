import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline
} from "@material-ui/core"
import JssProvider from "react-jss"
import { create } from "jss"
import { createBrowserHistory } from "history"
import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "connected-react-router"
import theme from "../../style/theme"
import Router from "../Router"
import { generateReducers } from "../../reducers"

export const history = createBrowserHistory()

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.___REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
]

const store = createStore(generateReducers(history), compose(...middlewares))

class App extends React.Component {
  render(){
    
    return (
      <Provider store={store}>
        {/* <JssProvider jss={jss} generateClassName={generateClassName}> */}
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router history={history} />
          </MuiThemeProvider>
        {/* </JssProvider> */}
      </Provider>
    );
  }
}



export default App;