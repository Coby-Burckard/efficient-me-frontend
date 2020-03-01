import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import configureStore from "./store/store";
import AppRouter from "./routers/AppRouter";
import InitializeUser from "./components/InitializeUser";

//setting up the store
const store = configureStore();

const app = (
  <Provider store={store}>
    <InitializeUser />
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
