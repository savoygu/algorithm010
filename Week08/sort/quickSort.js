function quickSort(array, left, right) {
  const len = array.length;
  const left = typeof left != "number" ? 0 : left;
  const right = typeof right != "number" ? len - 1 : right;
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  const pivot = left;
  let index = pivot + 1;

  for (var i = index; i <= right; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, index);
      index++;
    }
  }

  swap(array, pivot, index - 1);

  return index - 1;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
