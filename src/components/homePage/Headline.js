import React from "react";
import { useHistory } from "react-router-dom";

const Headline = () => {
  const history = useHistory();

  const handleSignUpClick = () => {
    history.push("/create");
  };

  return (
    <div className="content-container--s">
      <div className="body-container">
        <h1 className="header__title">Set yourself up for success</h1>
        <h2 className="header__subtitle">
          <span className="header__title--app-name">Efficient Me</span> allows
          you to create and achieve SMART goals
        </h2>
        <button className="bold-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Headline;
