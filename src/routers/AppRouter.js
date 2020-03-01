import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInOutButton from "../components/LogInOutButton";
import UserPage from "../components/UserPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={LogInOutButton} />
      <Route path="/userpage" exact component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
