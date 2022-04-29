import initialState from "../initialState";
import { actionTypes } from "../actions";

const { SET_ALGORITHM, SET_SORTING_ARRAY, SET_PROGRESS, SET_SPEED, RESET } =
  actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALGORITHM:
      return { ...state, algorithm: payload };
    case SET_SORTING_ARRAY:
      return { ...state, sortingArray: [...payload] };
    case SET_PROGRESS:
      return { ...state, progress: payload };
    case SET_SPEED:
      return { ...state, speed: payload };
    case RESET:
      return { ...state, progress: "reset", doneCount: 0 };
    default:
      return { ...state };
  }
};

export default reducer;
