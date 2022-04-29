import React from "react";
import Button from "../../Button";
import "./index.css";

const ErrorPage = () => {
  return (
    <div className="error-div">
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Error Occured<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Something went wrong.</p>
          </div>
        </div>
      </div>
      <Button path="/" title="Go back to home page" />
    </div>
  );
};

export default ErrorPage;
