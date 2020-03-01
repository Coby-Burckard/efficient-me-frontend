import hostURL from "./settings";

const loginRequest = ({ userName = "", password = "" }) => {
  return fetch(`${hostURL}/api/getToken/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: `${userName}`,
      password: `${password}`
    })
  });
};

export { loginRequest };
