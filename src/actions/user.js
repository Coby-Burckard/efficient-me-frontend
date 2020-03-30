import { loginRequest, localAuth, createRequest } from "../ajaxOrLocal/user";

//asycn login function to log in from server
const startLogin = payload => {
  return dispatch => {
    loginRequest(payload).then(response => {
      if (response.status !== 200) {
        dispatch(loginError("Invalid response from server"));
        return;
      } else {
        response.json().then(token => {
          dispatch(login(token.token));
        });
      }
    });
  };
};

const loginError = error => {
  return {
    type: "LOGIN_ERROR",
    error
  };
};

const startLocalLogin = () => {
  return dispatch => {
    const token = localAuth();
    dispatch(login(token));
    return token;
  };
};

const login = token => {
  return {
    type: "LOGIN",
    token: token
  };
};

//async logout function
const logout = dispatch => {
  return dispatch => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "DELETE_DATA" });
  };
};

const startCreateUser = user => {
  return dispatch => {
    createRequest(user).then(response => {
      if (response.status !== 201) {
        dispatch(createError("invalid response from server"));
      } else {
        dispatch(
          startLogin({
            userName: user.username,
            password: user.password
          })
        );
      }
    });
  };
};

const createError = error => {
  return {
    type: "CREATE_ERROR",
    error
  };
};

export { login, startLocalLogin, startLogin, logout, startCreateUser };
