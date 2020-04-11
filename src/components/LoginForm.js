import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../actions/user";
import { useHistory } from "react-router-dom";
import { startLoadUserData } from "../actions/userData";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.loginError);

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(
      startLogin({
        userName,
        password,
      })
    ).then((token) => {
      dispatch(startLoadUserData(token));
    });
  };

  const onSignUpClick = (e) => {
    history.push("/create");
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
          {!!error && <p className="user-form__error">{error}</p>}
          <div className="button-container">
            <button className="link-button link-button--submit" type="submit">
              Login
            </button>
            <button
              className="link-button link-button--submit"
              onClick={onSignUpClick}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
