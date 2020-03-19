import React from "react";
import { useHistory } from "react-router-dom";
import headlineImg from "../svg/checklist.svg";

const Headline = () => {
  const history = useHistory();

  const handleSignUpClick = () => {
    history.push("/create");
  };

  return (
    <div className="content-container--s">
      <div className="body-container">
        <div className="headline__section--text">
          <h1 className="headline__title">Set yourself up for success</h1>
          <h2 className="headline__subtitle">
            <span className="headline__subtitle--app-name">Efficient Me</span>{" "}
            allows you to create and achieve SMART goals
          </h2>
          <button className="bold-button" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
        <div className="headline__section--img">
          <img className="headline__img" src={headlineImg} alt="checklist" />
        </div>
      </div>
    </div>
  );
};

export default Headline;
