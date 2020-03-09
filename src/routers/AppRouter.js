import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import HomePage from "../components/homePage/HomePage";
import StartUserPage from "../components/StartUserPage";
import Header from "../components/Header";

const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PrivateRoute path="/userpage" exact component={StartUserPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };
