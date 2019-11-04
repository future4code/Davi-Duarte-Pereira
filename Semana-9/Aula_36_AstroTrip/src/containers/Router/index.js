import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

export const routes = {
  homePage: "/",
  userLogin: "/user/login",
  trips: "/trips/list",
  userTripDetails: "/trips/user/details",
  admTripDetails: "/trips/adm/details",
  applicationForm: "/application-form",
  admLogin: "/login",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.admLogin} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
