import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlgorithm } from "../../redux/actions";
import Button from "../Button";
import "./index.css";

const Home = () => {
  const { sortingAlgorithms } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const onClick = (id) => dispatch(setAlgorithm(id));

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
        {sortingAlgorithms.map((algorithm, index) => {
          let path = `/sort/${algorithm.name.toLowerCase()}`;

          return (
            <Button
              key={algorithm.title}
              path={path}
              title={algorithm.name}
              handleClick={() => onClick(index)}
            />
          );
        })}
      </footer>
    </div>
  );
};

export default Home;
