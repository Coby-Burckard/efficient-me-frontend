import { createReducer } from "@reduxjs/toolkit";
import { localLogin, localLogout } from "../ajaxOrLocal/user";

const defaultState = {
  user: "",
  createError: "",
  loginError: ""
};

const userReducer = createReducer(defaultState, {
  LOGIN: (state, action) => {
    localLogin(action.token);
    state.createError = "";
    state.loginError = "";
    state.user = action.token;
  },
  LOGOUT: state => {
    localLogout();
    state.user = "";
  },
  CREATE_ERROR: (state, action) => {
    state.createError = action.error;
  },
  LOGIN_ERROR: (state, action) => {
    state.loginError = action.error;
  }
});

export { userReducer as default };
