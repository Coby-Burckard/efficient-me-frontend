import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = e => {
    setUserName(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const submitLogin = e => {
    e.preventDefault();
    dispatch(
      startLogin({
        userName,
        password
      })
    );
  };

  return (
    <div className="user-form">
      <div className="user-form__container">
        <form onSubmit={submitLogin}>
          <input
            type="text"
            value={userName}
            onChange={onUserNameChange}
            placeholder="User Name"
          />
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
          <div className="button-container">
            <button className="link-button link-button--submit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
