import React from "react";
import { useParams } from "react-router";
import Algorithm from "../Algorithm";
import Breadcrumbs from "../Breadcrumbs";
import Controller from "../Controller";
import "./index.css";

const Sort = () => {
  let { id } = useParams();

  return (
    <div className="sort-div">
      <Breadcrumbs name={id} />
      <Controller />
      <Algorithm />
    </div>
  );
};

export default Sort;
