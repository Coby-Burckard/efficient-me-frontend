import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/homePage/HomePage";
import StartUserPage from "../components/StartUserPage";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import CreateUserForm from "../components/CreateUserForm";

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className="router-root">
      <Header />
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PublicRoute path="/create" exact component={CreateUserForm} />
        <PublicRoute path="/login" exact component={LoginForm} />
        <PrivateRoute path="/userpage" exact component={StartUserPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };
