import initialState from "../initialState";
import { actionTypes } from "../actions";

const { SET_ALGORITHM, RESET } = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALGORITHM:
      return { ...state, algorithm: payload };
    case RESET:
      return { ...state, sortingArray: [] };
    default:
      return { ...state };
  }
};

export default reducer;
