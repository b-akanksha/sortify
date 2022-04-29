export const actionTypes = {
  SET_ALGORITHM: "SET_ALGORITHM",
  SET_SORTING_ARRAY: "SET_SORTING_ARRAY",
  SET_PROGRESS: "SET_PROGRESS",
  SET_SPEED: "SET_SPEED",
  RESET: "RESET",
};

export const setAlgorithm = (payload) => ({
  type: actionTypes.SET_ALGORITHM,
  payload,
});

export const setSortingArray = (payload) => ({
  type: actionTypes.SET_SORTING_ARRAY,
  payload,
});

export const setProgress = (payload) => ({
  type: actionTypes.SET_PROGRESS,
  payload,
});

export const setSpeed = (payload) => ({
  type: actionTypes.SET_SPEED,
  payload,
});

export const reset = () => ({ type: actionTypes.RESET });
