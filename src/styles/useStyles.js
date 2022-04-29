import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textField: {
    width: "16rem",
    color: "white",
    paddingBottom: 0,
    fontWeight: 500,
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid #4D9DE0`,
    },
  },
  input: {
    color: "white",
  },
  iconButton: {
    fill: "black",
  },
  button: {
    margin: "0 8px",
    backgroundColor: "#ffb510",
    color: "black",
    border: `2px solid #ffb510`,
    borderRadius: "16px",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
      "& svg": {
        fill: "white",
      },
    },
  },
}));

export default useStyles;
