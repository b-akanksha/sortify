import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textField: {
    width: "16rem",
    paddingBottom: 0,
    fontWeight: 500,
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid #ffb510`,
    },
  },
  input: {
    color: "white",
  },
  iconButton: {
    fill: "#ffb510",
  },
  slider: {
    color: "#ffb510",
    flexGrow: 1,
    flexBasis: "100%",
  },
  button: {
    margin: "0 8px",
  },
}));

export default useStyles;
