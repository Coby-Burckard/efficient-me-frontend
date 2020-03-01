import React from "react";
import { useDispatch } from "react-redux";
import { startLocalLogin } from "../actions/user";

const InitializeUser = () => {
  const dispatch = useDispatch();
  dispatch(startLocalLogin());
  return <></>;
};

export { InitializeUser as default };
