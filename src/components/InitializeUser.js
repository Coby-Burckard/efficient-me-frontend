import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLocalLogin } from "../actions/user";
import { startLoadUserData } from "../actions/userData";
import AppRouter from "../routers/AppRouter";

const InitializePage = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = dispatch(startLocalLogin());
    console.log(token);
    dispatch(startLoadUserData(token)).then(() => {
      setDataLoaded(true);
    });
  }, [dispatch]);

  return <>{dataLoaded ? <AppRouter /> : <></>}</>;
};

export { InitializePage as default };
