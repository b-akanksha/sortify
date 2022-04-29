import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Button = ({ path, title }) => {
  return (
    <NavLink to={path} type="button" className="sort-button">
      {title}
    </NavLink>
  );
};

export default Button;
