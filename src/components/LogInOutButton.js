import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin, logout } from "../actions/user";
import { useHistory} from 'react-router-dom'

const LogInOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const history = useHistory()

  const loginClick = () => {
    history.push("/login")
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
