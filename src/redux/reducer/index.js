import initialState from "../initialState";
import { actionTypes } from "../actions";

const { SET_ALGORITHM, SET_SORTING_ARRAY, SET_PROGRESS, SET_SPEED } =
  actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALGORITHM:
      return { ...state, algorithm: payload };
    case SET_SORTING_ARRAY:
      return { ...state, algorithm: payload, progress: "reset" };
    case SET_PROGRESS:
      return { ...state, progress: payload };
    case SET_SPEED:
      return { ...state, speed: payload };
    default:
      return { ...state };
  }
};

export default reducer;
