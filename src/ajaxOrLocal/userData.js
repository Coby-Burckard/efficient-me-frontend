import hostURL from "./settings";

const fetchUserData = token => {
  return fetch(`${hostURL}/api/userPage/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
};

export { fetchUserData };
