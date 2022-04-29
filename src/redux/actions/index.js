export const actionTypes = {
  SET_ALGORITHM: "SET_ALGORITHM",
  RESET: "RESET",
};

export const setAlgorithm = (payload) => ({
  type: actionTypes.SET_ALGORITHM,
  payload,
});

export const reset = () => ({ type: actionTypes.RESET });
