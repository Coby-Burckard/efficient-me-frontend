import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import configureStore from "./store/store";
import AppRouter from "./routers/AppRouter";

//setting up the store
const store = configureStore();

console.log(store);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
