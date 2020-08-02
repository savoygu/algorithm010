function shellSort(array) {
  const len = array.length;

  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;
      const current = array[i];
      while (j - gap >= 0 && current < array[j - gap]) {
        array[j] = array[j - gap];
        j = j - gap;
      }
      array[j] = current;
    }
  }

  return array;
}
