import { fetchUserData } from "../ajaxOrLocal/userData";

//fetching user data from the server
const startLoadUserData = token => {
  return dispatch => {
    return fetchUserData(token)
      .then(response => response.json())
      .then(responseJSON => dispatch(loadUserData(responseJSON)))
      .catch(error => console.log("error loading user data: ", error));
  };
};

const loadUserData = userData => ({
  type: "LOAD_USER_DATA",
  userData
});

export { startLoadUserData };
