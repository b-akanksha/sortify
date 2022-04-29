import React from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../Breadcrumbs";
import "./index.css";

const Sort = () => {
  let { id } = useParams();

  return (
    <div className="sort-div">
      <Breadcrumbs name={id} />
      {id}
    </div>
  );
};

export default Sort;
