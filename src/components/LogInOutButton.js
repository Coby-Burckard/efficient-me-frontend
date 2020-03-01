import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin, logout } from "../actions/user";
import UserPage from "./UserPage";

const LogInOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const loginClick = () => {
    dispatch(startLogin({ userName: "admin", password: "admin" }));
  };

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      {!!user ? (
        <button onClick={logoutClick}>Logout</button>
      ) : (
        <>
          <button onClick={loginClick}>Login</button>
        </>
      )}
    </div>
  );
};

export default LogInOutButton;
