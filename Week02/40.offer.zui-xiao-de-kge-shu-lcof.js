/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  // https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/3chong-jie-fa-miao-sha-topkkuai-pai-dui-er-cha-sou/

  /**
   * 1. 暴力解法 -> 先排序，再去前 k 个数
   * 2. 大根堆/小根堆 -> 存储最小的 k 个数
   * 3. 快排思想
   * 4. 二叉树搜索
   * 5. 计数排序
   */

  /**
   * 5. 数据范围有限时直接计数排序就行了：O(N)
   */
  /*
  if (k == 0 || arr.length == 0) {
    return []
  }

  const counter = new Array(10001).fill(0)
  for (let num of arr) {
    counter[num]++
  }

  const res = new Array(k)
  let idx = 0

  for (let num = 0; num < counter.length; num++) {
    while(counter[num]-- > 0 && idx < k) {
      res[idx++] = num
    }
    if (idx == k) break;
  }
  
  return res
  */

  /**
   * 4. 二叉搜索树（BST）
   */
  // TODO: js 没有数据结构

  /**
   * 递归：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/tu-jie-top-k-wen-ti-de-liang-chong-jie-fa-you-lie-/
   * 
   * 非递归：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/wei-ruan-mian-shi-jiao-xun-x-by-jerry_nju/
   * 
   * 3. 快排思想
   */

  /*
  if (k == 0 || arr.length == 0) {
      return []
  }
  // 最后一个参数表示我们要找的是下标为 k-1 的数
  return quickSearch(arr, 0, arr.length - 1, k - 1)

  function quickSearch(arr, low, high, k) {
    // 每快排切分1次，找到排序后下标为 j 的元素，如果 j 恰好等于 k 就返回 j 以及 j 左边所有的数；
    const j = partition(arr, low, high);
    if (j === k) return arr.slice(0, j + 1)

    // 否则根据下标 j 与 k 的大小关系来决定继续切分左段还是右段。
    return j > k ? quickSearch(arr, low, j - 1, k) : quickSearch(arr, j + 1, high, k)
  }

  // 快排切分，返回下标 j，使得比 arr[j] 小的数都在 j 的左边，比 arr[j] 大的数都在 j 的右边。
  function partition (arr, low, high) {
    const v = arr[low]
    let i = low, j = high + 1
    
    while(true) {
      while(++i <= high && arr[i] < v);
      while(--j >= low && arr[j] > v);

      if (i >= j) break;

      [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    arr[low] = arr[j]
    arr[j] = v
    return j
  }
  */

  /**
   * 2. 大根堆/小根堆
   */
  const length = arr.length
  if (k >= length) return arr

  const heap = new MaxHeap(arr.slice(0, k))
  for (let i = k; i < length; i++) {
    if (heap.top() > arr[i]) {
      heap.extract()
      heap.insert(arr[i])
    }
  }

  return heap.container
  
  // function heapify (arr, length, i) {
  //   let largest = i
  //   let left = i * 2 + 1
  //   let right = left + 1

  //   if (left < length && arr[left] > arr[largest]) {
  //     largest = left
  //   }

  //   if (right < length && arr[right] > arr[largest]) {
  //     largest = right
  //   }

  //   if (largest !== i) {
  //     [arr[i], arr[largest]] = [arr[largest], arr[i]]
  //     heapify(arr, length, largest)

  //     if([left] < arr[right]) [arr[left], arr[right]] = [arr[right], arr[left]]
  //   }

  //   return arr
  // }

  // function heapSort (arr) {
  //   let length = arr.length
  //   let i = Math.floor(length / 2 - 1) // 最后一个父节点位置
  //   let k = length - 1

  //   while(i >= 0) { // 自下而上排序
  //     heapify(arr, length, i)
  //     i--
  //   }

  //   console.log(arr, k)
    
  //   while (k >= 0) {
  //     [arr[0], arr[k]] = [arr[k], arr[0]]
  //     heapify(arr, k, 0)
  //     k--
  //   }

  //   return arr
  // }
  
  /**
   * 1. 暴力解法
   */
  
  // return arr.sort((a, b) => a - b).slice(0, k)
};

function swap (arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

class MaxHeap {
  constructor(arr = []) {
    this.container = []
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data) {
    const container = this.container
    container.push(data)

    let index = container.length - 1
    while(index) {
      const parent = Math((index - 1) / 2)
      if (container[index] <= container[parent]) {
        break
      }
      swap(container, index, parent)
      index = parent
    }
  }

  extract() {
    const container = this.container
    if (!container.length) return null

    swap(container, 0, container.length - 1)

    const data = container.pop()
    const length = container.length
    let index = 0, exchange = index * 2 + 1

    while(exchange < length) {
      // 如果有右节点，并且有节点的值大于左节点的值
      let right = index * 2 + 2
      if (right < length && container[right] > container[exchange]) {
        exchange = right
      }

      if (container[exchange] <= container[index]) break;

      swap(container, exchange, index)
      
      index = exchange
      exchange = index * 2 + 1
    }
    
    return data
  }

  top() {
    return this.container.length ? this.container[0] : null
  }
}