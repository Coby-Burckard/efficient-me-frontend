import { loginRequest } from "../ajaxOrLocal/user";

//asycn login function to log in from server
const startLogin = payload => {
  return dispatch => {
    loginRequest(payload)
      .then(response => {
        response.json().then(token => {
          dispatch(login(token));
          console.log("logged in");
        });
      })
      .catch(error => {
        console.log("login error: ", error);
      });
  };
};

const login = token => ({
  type: "LOGIN",
  token: token
});

//async logout function
const logout = () => ({
  type: "LOGOUT"
});

export { startLogin, logout };
