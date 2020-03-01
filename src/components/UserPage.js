import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadUserData } from "../actions/userData";

const UserPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.user);
  dispatch(startLoadUserData(token));

  return <div>UserPage</div>;
};

export { UserPage as default };
