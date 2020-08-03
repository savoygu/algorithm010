学习笔记

### 排序

冒泡排序

```javascript
function bubbleSort(array) {
  const len = array.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }

  return array
}
```

选择排序

```javascript
function selectionSort(array) {
  const len = array.length

  for(let i = 0; i < len - 1; i++) {
    let minIndex = i

    for(let j = i + 1; j < len; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }

  return array
} 
```

插入排序

```javascript
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
```

希尔排序

```javascript
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
```

归并排序

```javascript
function mergeSort(array) {
  const len = array.length;

  if (len < 2) {
    return array;
  }

  const middle = Math.floor(len / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}
```

快速排序

```javascript
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
```