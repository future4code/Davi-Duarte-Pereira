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

export default function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.signup} component={Signup} />
        <Route path={routes.changePassword} component={ChangePassword} />
        <PrivateRouter isLoggedIn={props.isLoggedIn} path={routes.home}>
          <Home/>
        </PrivateRouter>
        <PrivateRouter isLoggedIn={props.isLoggedIn} path={routes.detailedVideo}>
          <DetailedVideo/>
        </PrivateRouter>
        <PrivateRouter isLoggedIn={props.isLoggedIn} path={routes.uploadVideo}>
          <UploadVideo/>
        </PrivateRouter>
        <PrivateRouter isLoggedIn={props.isLoggedIn} path={routes.deleteVideo}>
          <DeleteVideo/>
        </PrivateRouter>
        <Route path={routes.root} component={Login}/>
      </Switch>
    </ConnectedRouter>
  );
}

