function insertionSort (arr) {
  const n = arr.length

  for (let step = 1; step < n; step++) {
    const key = arr[step]
    let j = step - 1

    while(j >= 0 && key < arr[j]) { // j 下标的元素就是比 key 小的元素
      arr[j + 1] = arr[j]
      j--
    }
    
    arr[j + 1] = key // 所以 key 在 j + 1 位置
  }

  return arr
}

const arr = [-2, 45, 0, 11, -9]
insertionSort(arr)
console.log(arr)
