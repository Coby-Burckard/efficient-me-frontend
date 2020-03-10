import { loginRequest, localAuth, createRequest } from "../ajaxOrLocal/user";

//asycn login function to log in from server
const startLogin = payload => {
  return dispatch => {
    loginRequest(payload)
      .then(response => {
        response.json().then(token => {
          dispatch(login(token.token));
        });
      })
      .catch(error => {
        console.log("login error: ", error);
      });
  };
};

const startLocalLogin = () => {
  return dispatch => {
    const token = localAuth();
    dispatch(login(token));
  };
};

const login = token => {
  return {
  type: "LOGIN",
  token: token
}};

//async logout function
const logout = () => ({
  type: "LOGOUT"
});

const startCreateUser = (user) => {
  return dispatch => {
    createRequest(user)
      .then(response => {
        if (response.status !== 201){
        } else {
          return response.json()
        }
      })
      .then(responseJSON => {
        dispatch(startLogin({
          userName: user.username,
          password: user.password
        }))
      })
  }
}

export { login, startLocalLogin, startLogin, logout, startCreateUser };
