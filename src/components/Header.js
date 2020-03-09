import React from "react";
import { NavLink } from "react-router-dom";
import LogInOutButton from "./LogInOutButton";

const Header = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/userpage">User Page</NavLink>
    <LogInOutButton />
  </div>
);

export { Header as default };
