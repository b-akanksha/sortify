import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Breadcrumbs = ({ name }) => {
  return (
    <div className="breadcrumbs-div">
      <NavLink to="/" className="nav-text">
        Home
      </NavLink>
      /<span className="span-text">{name}</span>
    </div>
  );
};

export default Breadcrumbs;
