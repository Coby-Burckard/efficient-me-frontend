import hostURL from './settings';

const loginRequest = ({ userName = '', password = '' }) => {
  return fetch(`${hostURL}/api/getToken/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${userName}`,
      password: `${password}`,
    }),
  });
};

const localAuth = () => {
  let localToken = localStorage.getItem('token');
  if (!localToken) {
    localToken = '';
  }
  return localToken;
};

const localLogin = token => {
  localStorage.setItem('token', token);
};

const localLogout = () => {
  localStorage.removeItem('token');
};

const createRequest = user => {
  return fetch(`${hostURL}/api/createUser/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export { loginRequest, localLogin, localLogout, localAuth, createRequest };
