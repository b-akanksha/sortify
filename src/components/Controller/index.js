import { IconButton, Slider, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setProgress,
  setSortingArray,
  setSpeed,
} from "../../redux/actions";
import useStyles from "../../styles/useStyles";
import { convertArrayStringToArray } from "../../utils/helpers/convertArrayStringToArray";
import { convertInputToArrayString } from "../../utils/helpers/convertInputToArrayString";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import "./index.css";

const Controller = () => {
  const classes = useStyles();

  const { sortingArray, progress, speed } = useSelector((state) => state.sort);

  const [arrayInput, setArrayInput] = React.useState(sortingArray);
  const [isPaused, setIsPaused] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (progress === "reset") {
      setIsPaused(false);
    }
  }, [progress]);

  const generate = () => {
    let newArray = Array.from(
      {
        length: sortingArray.length,
      },
      () => Math.floor(Math.random() * 100)
    );
    setArrayInput(newArray);
    dispatch(setSortingArray(newArray));
    dispatch(reset());
  };

  const arrayDataChangeHandler = (value) => {
    console.log("value", value);
    const arrayString = convertInputToArrayString(value);
    console.log("arrayString", arrayString);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    console.log("array", array);
    dispatch(setSortingArray(array));
    dispatch(reset());
  };

  const onStart = () => {
    setIsPaused(false);
    dispatch(setProgress("start"));
  };

  const onPause = () => {
    setIsPaused(true);
    dispatch(setProgress("pause"));
  };

  const setSpeedValue = (value) => dispatch(setSpeed(value));

  const resetClick = () => {
    setIsPaused(false);
    dispatch(reset());
  };

  return (
    <div className="controller">
      <div className="array-div">
        <TextField
          id="outlined-basic"
          label="Input"
          variant="outlined"
          width="150"
          onChange={(event) => arrayDataChangeHandler(event.target.value)}
          value={arrayInput}
          className={classes.textField}
          InputProps={{
            className: classes.input,
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
        {isPaused ? (
          <IconButton onClick={onStart} className={classes.button}>
            <PauseIcon className={classes.iconButton} />
          </IconButton>
        ) : (
          <IconButton onClick={onPause} className={classes.button}>
            <PlayArrowIcon className={classes.iconButton} />
          </IconButton>
        )}
        <Slider
          className={classes.slider}
          key={`slider-${speed}`}
          defaultValue={speed}
          onChange={(event, value) => setSpeedValue(value)}
          aria-labelledby="discrete-slider"
          step={1}
          marks
          min={1}
          max={5}
        />
        <IconButton onClick={resetClick} className={classes.button}>
          <RotateLeftIcon className={classes.iconButton} />
        </IconButton>
      </div>
    </div>
  );
};

export default Controller;
