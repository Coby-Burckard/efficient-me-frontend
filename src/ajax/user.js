const host = 8000

const loginRequest = ({userName='', password=''}) => {
  return fetch(`http://127.0.0.1:${host}/api/getToken/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: `${userName}`,
      password: `${password}`,
  })})
}

const logoutRequest = () => {
  console.log('hello')
}

export { loginRequest, logoutRequest }