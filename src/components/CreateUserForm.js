import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreateUser } from "../actions/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const onUserNameChange = e => {
    setUserName(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFirstChange = e => {
    setFirst(e.target.value);
  };

  const onLastChange = e => {
    setLast(e.target.value);
  };

  const submitLogin = e => {
    e.preventDefault();
    dispatch(
      startCreateUser({
        password,
        username: userName,
        first_name: first,
        last_name: last
      })
    );
  };

  return (
    <div className="user-form">
      <div className="user-form__container">
        <form onSubmit={submitLogin}>
          <input
            className="user-form__name"
            type="text"
            value={first}
            onChange={onFirstChange}
            placeholder="First Name"
          />
          <input
            className="user-form__name"
            type="text"
            value={last}
            onChange={onLastChange}
            placeholder="Last Name"
          />
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
