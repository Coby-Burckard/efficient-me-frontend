import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import configureStore from "./store/store";
import AppRouter from "./routers/AppRouter";
import InitializePage from "./components/InitializeUser";

//setting up the store
const store = configureStore();

const app = (
  <Provider store={store}>
    <InitializePage />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
