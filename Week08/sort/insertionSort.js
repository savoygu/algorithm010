function insertionSort(array) {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    let preIndex = i - 1;
    const current = array[i];

    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
  return array;
}
