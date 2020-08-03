function bubbleSort (arr) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1])
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  
  return arr
}


const arr = [-2, 45, 0, 11, -9]
bubbleSort(arr)
console.log(arr)