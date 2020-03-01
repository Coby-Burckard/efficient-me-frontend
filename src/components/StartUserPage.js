import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadUserData } from "../actions/userData";
import UserPage from "./userPage/UserPage";

const StartUserPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.user);
  dispatch(startLoadUserData(token));

  return <UserPage />;
};

export { StartUserPage as default };
