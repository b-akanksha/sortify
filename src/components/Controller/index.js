/* eslint-disable react-hooks/exhaustive-deps */
import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "../../styles/useStyles";
import SortIcon from "@material-ui/icons/Sort";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import "./index.css";
import useTrait from "../../utils/helpers/useTrait";

const Controller = () => {
  const classes = useStyles();

  const { sortingAlgorithms, algorithm } = useSelector((state) => state.sort);

  const [arrayInput, setArrayInput] = React.useState([]);

  let sort = sortingAlgorithms[algorithm].title;

  const timeoutRef = React.useRef();
  const [i, setI] = React.useState(0);
  const [j, setJ] = React.useState(0);
  const min = useTrait(0);

  React.useEffect(() => {
    if (sort && arrayInput?.length) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        sort(arrayInput, setArrayInput, min, i, j, setI, setJ);
      }, 500);
    }
  }, [i, j]);

  const handleChange = (e) => {
    let str = e.target.value;
    setArrayInput(str.split(",").map((num) => Number(num)));
  };

  const generate = () => {
    let newArray = Array.from(
      {
        length: 10,
      },
      () => Math.floor((Math.random() + 1) * 10)
    );
    setArrayInput(newArray);
    document.getElementById("input").value = newArray;
  };

  const onStart = () => {
    console.log(arrayInput);
    document.getElementById("input").value = "";
    min.set(0);
    sort(arrayInput, setArrayInput, min, i, j, setI, setJ);
  };

  const resetClick = () => {
    document.getElementById("input").value = "";
    setArrayInput([]);
    min.set(0);
    setJ(0);
    setI(0);
  };

  const colors = ["#E15554", "#985277", "#922D50"];
  return (
    <div className="graph">
      <div className="controller">
        <div className="array-div">
          <TextField
            id="input"
            placeholder="Input"
            variant="outlined"
            onChange={handleChange}
            className={classes.textField}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <button onClick={generate} className="sort-button">
            Generate
          </button>
        </div>
        <div className="controls-div">
          <Button
            onClick={onStart}
            className={classes.button}
            startIcon={<SortIcon className={classes.iconButton} />}
          >
            Sort
          </Button>
          <Button
            onClick={resetClick}
            className={classes.button}
            startIcon={<RotateLeftIcon className={classes.iconButton} />}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="visualizer">
        {arrayInput.length > 0 ? (
          arrayInput.map((element, index) => (
            <div
              className="bar-graph"
              key={index}
              style={{
                height: (element + 3) * 10,
                backgroundColor: colors[index % 3],
              }}
            >
              {element}
            </div>
          ))
        ) : (
          <p>Enter an input array or use the generate button</p>
        )}
      </div>
    </div>
  );
};

export default Controller;
