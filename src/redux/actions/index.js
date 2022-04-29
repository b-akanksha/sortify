export const actionTypes = {
  SET_ALGORITHM: "SET_ALGORITHM",
};

export const setAlgorithm = (payload) => ({
  type: actionTypes.SET_ALGORITHM,
  payload,
});
