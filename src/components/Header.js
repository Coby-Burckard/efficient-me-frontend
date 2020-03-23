import React from "react";
import { useHistory } from "react-router-dom";
import LogInOutButton from "./LogInOutButton";
import logo from "./svg/logo.svg";

const Header = () => {
  const history = useHistory();

  const titleClick = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <div className="content-container">
        <div className="header__body">
          <div className="header__side">
            <img className="header__logo" src={logo} alt="logo" />
            <h1 className="header__title">
              <button
                className="link-button link-button--title"
                onClick={titleClick}
              >
                Efficient Me
              </button>
            </h1>
          </div>
          <div className="header__side">
            <a
              className="header__subtitle"
              href="https://github.com/Coby-Burckard/efficient-me-frontend"
            >
              GitHub
            </a>
            <LogInOutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header as default };
