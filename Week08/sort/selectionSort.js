function selectionSort (arr) {
  const n = arr.length

  for (let step = 0; step < n - 1; step++) {
    let minIdx = step

    for (let i = step + 1; i < n; i++) {
      if (arr[i] < arr[minIdx]) {
        minIdx = i
      }
    }
    
    [arr[minIdx], arr[step]] = [arr[step], arr[minIdx]]
  }
  
  return arr
}

const arr = [-2, 45, 0, 11, -9]
selectionSort(arr)
console.log(arr)