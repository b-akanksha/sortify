import initialState from "../initilaState";
import { actionTypes } from "../actions";

const { SET_ALGORITHM } = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALGORITHM:
      return { ...state, algorithm: payload };
    default:
      return { ...state };
  }
};

export default reducer;
