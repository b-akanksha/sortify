import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Button = ({ path, title, handleClick }) => {
  return (
    <NavLink
      to={path}
      type="button"
      className="sort-button"
      onClick={handleClick}
    >
      {title}
    </NavLink>
  );
};

export default Button;
