import { createReducer } from "@reduxjs/toolkit";
import { localLogin, localLogout } from "../ajaxOrLocal/user";

const defaultState = {
  user: ""
};

const userReducer = createReducer(defaultState, {
  LOGIN: (state, action) => {
    localLogin(action.token);
    state.user = action.token;
  },
  LOGOUT: state => {
    localLogout();
    state.user = "";
  }
});

export { userReducer as default };
