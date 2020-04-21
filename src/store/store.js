import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";
import userData from "../reducers/userData";
import modalControl from "../reducers/modals";

// combining reducers into a 'root' reducer
const rootReducer = {
  user: userReducer,
  data: userData,
  modal: modalControl,
};

const configure = () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};

export default configure;
