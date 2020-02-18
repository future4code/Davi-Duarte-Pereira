import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "../Login"
import Signup from '../Signup'
import ChangePassword from '../ChangePassword'
import Home from '../Home'
import DetailedVideo from '../DetailedVideo'
import UploadVideo from '../UploadVideo'
import DeleteVideo from '../DeleteVideo'
import { setLoggedInState } from '../../actions/auth'
import { connect } from 'react-redux'
import * as firebase from 'firebase/app'

export const routes = {
  root: '/',
  signup: "/signup",
  changePassword: "/password/change",
  home: "/home",
  detailedVideo: "/video/:id",
  uploadVideo: "/upload",
  deleteVideo: "/delete"
}

function PrivateRouter(props) {
  const {isLoggedIn, children, ...otherProps} = props

  return(
    <Route {...otherProps}>
      {isLoggedIn === true ? children : <Redirect to={{pathname: '/'}} />}
    </Route>
  )
}

class Router extends React.Component {

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
    const {history, isLoggedIn } = this.props

    console.log('IS LOGGED', isLoggedIn)
    return (
      <ConnectedRouter history={history}  >
        <Switch>
          <Route path={routes.signup} component={Signup} />
          <Route path={routes.changePassword} component={ChangePassword} />
          <PrivateRouter isLoggedIn={isLoggedIn} path={routes.home}>
            <Home/>
          </PrivateRouter>
          <PrivateRouter isLoggedIn={isLoggedIn} path={routes.detailedVideo}>
            <DetailedVideo/>
          </PrivateRouter>
          <PrivateRouter isLoggedIn={isLoggedIn} path={routes.uploadVideo}>
            <UploadVideo/>
          </PrivateRouter>
          <PrivateRouter isLoggedIn={isLoggedIn} path={routes.deleteVideo}>
            <DeleteVideo/>
          </PrivateRouter>
          <Route path={routes.root}>
            <Login isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  setLoggedInState: (isLoggedIn) => dispatch(setLoggedInState(isLoggedIn))
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)