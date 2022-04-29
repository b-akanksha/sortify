import { BubbleSort } from "../../utils/algorithms/BubbleSort";
import initArrayForScreenSize from "../../utils/helpers/initArrayForScreenSize";
import { InsertionSort } from "../../utils/algorithms/InsertionSort";
import { MergeSort } from "../../utils/algorithms/MergeSort";
import { QuickSort } from "../../utils/algorithms/QuickSort";
import { SelectionSort } from "../../utils/algorithms/SelectionSort";

const initialState = {
  sortingAlgorithms: [
    { component: BubbleSort, title: "Bubble", name: "Bubble Sort" },
    { component: SelectionSort, title: "Selection", name: "Selection Sort" },
    { component: InsertionSort, title: "Insertion", name: "Insertion Sort" },
    { component: MergeSort, title: "Merge", name: "Merge Sort" },
    { component: QuickSort, title: "Quick", name: "Quick Sort" },
  ],
  sortingArray: initArrayForScreenSize(),
  algorithm: 0,
  progress: "reset",
  speed: 3,
};

export default initialState;
