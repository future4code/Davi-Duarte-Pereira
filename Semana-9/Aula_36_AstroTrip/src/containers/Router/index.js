import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import TripsList from "../TripListPage";
import TripDetailedPage from "../TripDetailedPage";
import ApplicationFormPage from "../ApplicationFormPage";

export const routes = {
  homePage: "/",
  trips: "/trips/list",
  tripDetails: "/trips/details",
  tripCreate: "/trips/create",
  applicationForm: "/application-form",
  login: "/login",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.trips} component={TripsList} />
        <Route path={routes.tripDetails} component={TripDetailedPage} />
        <Route path={routes.applicationForm} component={ApplicationFormPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
