import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/userpage">User Page</NavLink>
  </div>
);

export { Header as default };
