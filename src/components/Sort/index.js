import React from "react";
import { useParams } from "react-router";
import "./index.css";

const Sort = () => {
  let { id } = useParams();

  return <div className="sort-div">{id}</div>;
};

export default Sort;
