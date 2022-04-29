import React from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../Breadcrumbs";
import Controller from "../Controller";
import "./index.css";

const Sort = () => {
  let { id } = useParams();

  return (
    <div className="sort-div">
      <div className="main">
        <Breadcrumbs name={id} />
        <Controller />
      </div>
      <footer>
        <p>
          <i>
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/akanksha-bhat-255b4315a/"
              target="_blank"
              rel="noreferrer"
            >
              Akanksha
            </a>
          </i>
        </p>
      </footer>
    </div>
  );
};

export default Sort;
