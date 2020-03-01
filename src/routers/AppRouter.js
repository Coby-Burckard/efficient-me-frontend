import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInOutButton from "../components/LogInOutButton";
import StartUserPage from "../components/StartUserPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={LogInOutButton} />
      <Route path="/userpage" exact component={StartUserPage} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
