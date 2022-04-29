import React from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../Breadcrumbs";
import Controller from "../Controller";
import "./index.css";

const Sort = () => {
  let { id } = useParams();

  return (
    <div className="sort-div">
      <Breadcrumbs name={id} />
      <Controller />
    </div>
  );
};

export default Sort;
