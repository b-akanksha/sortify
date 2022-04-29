import React from "react";
import Button from "../Button";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Sortify<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Let's sort it.</p>
          </div>
        </div>
      </div>
      <footer>
        <Button path="/" title="Sort1" />
        <Button path="/" title="Sort2" />
      </footer>
    </div>
  );
};

export default Home;
