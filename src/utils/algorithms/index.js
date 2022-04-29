export const bubbleSort = (array, setArray, min, i, j, setI, setJ) => {
  let dataArray = [...array];
  const size = array.length;
  let swap = dataArray[j];

  if (j === size - i - 1) {
    setJ(0);
    setI(i + 1);
  }

  if (i < size - 1 && j < size - i - 1) {
    if (swap > dataArray[j + 1]) {
      dataArray[j] = dataArray[j + 1];
      dataArray[j + 1] = swap;
      setArray(dataArray);
      setJ(j + 1);
    } else {
      setJ(j + 1);
    }
  }
};

export const selectionSort = async (array, setArray, min, i, j, setI, setJ) => {
  let dataArray = [...array];
  let size = array.length;
  if (dataArray[j] < dataArray[min.get()]) {
    min.set(j);
  }
  if (j === size - 1) {
    let swap = dataArray[i];
    dataArray[i] = dataArray[min.get()];
    dataArray[min.get()] = swap;
    setArray(dataArray);
    min.set(i + 1);
    setJ(i + 1);
    setI(i + 1);
  } else if (i < size && j < size) {
    setJ(j + 1);
  }
};
