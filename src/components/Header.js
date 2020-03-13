import React from "react";
import { NavLink } from "react-router-dom";
import LogInOutButton from "./LogInOutButton";
import logo from './svg/logo.svg'

const Header = () => (
  <div className="header">
    <div className="content-container">
      <div className="header__body">
        <img className="header__logo" src={logo} alt="logo" />
        <LogInOutButton />
      </div>
    </div>
  </div>
);

export { Header as default };
