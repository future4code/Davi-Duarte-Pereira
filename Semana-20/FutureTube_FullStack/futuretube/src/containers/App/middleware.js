import React from 'react'
import { connect } from 'react-redux'
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline
} from "@material-ui/core"
import * as firebase from 'firebase/app'
import JssProvider from "react-jss"
import { create } from "jss"
import { createBrowserHistory } from "history"
import theme from "../../style/theme"
import Router from "../Router"
import { setLoggedInState } from '../../actions/auth'

// TODO: resolve JssProvider component

// const generateClassName = createGenerateClassName()
// const jss = create({
//   ...jssPreset(),
//   insertionPoint: document.getElementById("jss-insertion-point")
// })

export const history = createBrowserHistory()

class MiddlewareApp extends React.Component {
  
  componentDidMount() {
    const { setLoggedInState } = this.props
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setLoggedInState(true)
      } else {
        setLoggedInState(false)
      }
    });
  }

  render(){
    console.log('IS LOGGED', this.props.isLoggedIn)
    return (
        // <JssProvider jss={jss} generateClassName={generateClassName}> 
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router history={history} isLoggedIn={this.props.isLoggedIn} />
          </MuiThemeProvider>
        //  </JssProvider> 
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  setLoggedInState: (isLoggedIn) => dispatch(setLoggedInState(isLoggedIn))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiddlewareApp);