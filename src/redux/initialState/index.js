import { bubbleSort, selectionSort } from "../../utils/algorithms";

const initialState = {
  sortingAlgorithms: [
    { title: bubbleSort, name: "Bubble Sort" },
    { title: selectionSort, name: "Selection Sort" },
  ],
  algorithm: 0,
};

export default initialState;
