/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 作者：user7746o
  // 链接：https://leetcode-cn.com/problems/top-k-frequent-elements/solution/javascript-qian-k-ge-gao-pin-yuan-su-by-user7746o/
  
  /**
   * 3. 桶排序
   * 
   * 实现思路：
   *  首先创建 map 来存储数组到频率的映射 num -> freq
   *  然后创建一个数组（有数量的桶），将频率作为数组下标，对于出现频率不同的数字集合，存入对应的数组下标（桶内）即可
   *  最后倒序取出对应的数字（频率是以下标存储的，频率越高，越在数组后面）
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)
   *  空间复杂度：O(n)
   * 
   * 运行结果：
   *  21/21 cases passed (80 ms)
   *  Your runtime beats 87.95 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (37.6 MB)
   * 
   */

  const map = new Map()
  
  // key -> freq
  nums.map(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  
  if (map.size <= k) return [...map.keys()]

  return bucketSort(map, k)

  function bucketSort (map, k) {
    let arr = [], res = []
    map.forEach((value, key) => {
      if (!arr[value]) {
        arr[value] = []
      }

      arr[value].push(key)
    })

    for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
      if (arr[i]) {
        res.push(...arr[i])
      }
    }
    return res
  }
  
  /**
   * 
   * 2. 哈希表 + 小顶堆
   *
   *  实现思路：
   *     遍历一遍数组统计每个元素的频率，并将元素值（ key ）与出现的频率（ value ）保存到 map 中，
   *       通过 map 数据构建一个前 k 个高频元素小顶堆，小顶堆上的任意节点值都必须小于等于其左右子节点值，即堆顶是最小值。
   *   具体步骤如下：
   *     - 遍历数据，统计每个元素的频率，并将元素值（ key ）与出现的频率（ value ）保存到 map 中
   *     - 遍历 map ，将前 k 个数，构造一个小顶堆
   *     - 从 k 位开始，继续遍历 map ，每一个数据出现频率都和小顶堆的堆顶元素出现频率进行比较，
   *       如果小于堆顶元素，则不做任何处理，继续遍历下一元素；如果大于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
   *     - 遍历完成后，堆中的数据就是前 k 大的数据
   *
   *  复杂度
   *   时间复杂度：O(nlogk)
   *    遍历数组需要 O(n) 的时间复杂度，一次堆化需要 O(logk) 时间复杂度，所以利用堆求 Top k 问题的时间复杂度为 O(nlogk)
   *   空间复杂度：O(n)
   */

  /**
   * 运行结果：
   *  21/21 cases passed (92 ms)
   *  Your runtime beats 47.95 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.4 MB)
   */

  /*
  const swap = (arr, i, j) => ([[arr[i], arr[j]] = [arr[j], arr[i]]])

  class Heap {
    constructor(comparator = (x, y) => x > y) {
      this.container = []
      this.comparator = comparator
    }

    insert(data) { 
      const container = this.container
      container.push(data)

      let index = container.length - 1
      while(index) {
        const parent = Math.floor((index - 1) / 2)

        if (!this.comparator(container[index], container[parent])) {
          return
        }

        swap(container, index, parent)
        index = parent
      }
    }

    extract() {
      const { container, comparator } = this
      if (!container.length) return null

      swap(container, 0, container.length - 1)

      const data = container.pop()
      const length = container.length
      let index = 0, exchange = index * 2 + 1
      
      while (exchange < length) {
        const right = index * 2 + 2

        if (right < length && comparator(container[right], container[exchange])) {
          exchange = right
        }

        if (!comparator(container[exchange], container[index])) {
          break
        }

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
  
  const map = new Map(), heap = new Heap((x, y) => map.get(x) < map.get(y))

  // key -> freq
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })

  if (map.size <= k) return [...map.keys()]

  map.forEach((value, key, map) => {

    if (heap.container.length < k) heap.insert(key)
    else if (map.get(heap.top()) < value) {
      heap.extract()
      heap.insert(key)
    }

  })

  return heap.container
  */
   
  /*
  class BinaryHeap {
    constructor(capacity, comparator) {
      this.capacity = capacity
      this.comparator = comparator
      this.stack = []
    }

    insert(value) {
      if (this.stack.length < this.capacity) {
        this.stack.push(value)
        this.swim(this.stack.length - 1)
      } else {
        if (this.comparator(value, this.stack[0]) > 0) {
          this.stack[0] = value
          this.sink(0)
        }
      }
    }

    parent(index) {
      return Math.floor((index - 1) / 2);
    }

    kthChild(index, k) {
      return 2 * index + k
    }

    minChild(index) {
      const leftChild = this.kthChild(index, 1)
      const rightChild = this.kthChild(index, 2)
      return this.comparator(leftChild, rightChild) < 0 ? leftChild : rightChild
    }

    // 上浮下标为 index 的节点
    swim(index) {
      // if (index >= this.stack.length) return;
      // const parentIndex = Math.floor((index - 1) / 2);
      // if (this.comparator(this.stack[index], this.stack[parentIndex]) >= 0) return;
      // this.exchange(index, parentIndex);
      // this.swim(parentIndex);

      const insertValue = this.stack[index]
      while(index > 0 && this.comparator(insertValue, this.stack[this.parent(index)]) < 0) {
        this.stack[index] = this.stack[this.parent(index)]
        index = this.parent(index)
      }
      this.stack[index] = insertValue
    }

    // 下沉下标为 index 的节点
    sink(index) {
      // if (index * 2 + 1 >= this.stack.length) return;
      // let next = index * 2 + 1;
      // if (next + 1 < this.stack.length && this.comparator(this.stack[next], this.stack[next + 1]) > 0) {
      //   next = next + 1;
      // }
      // if (this.comparator(this.stack[index], this.stack[next]) <= 0) return;
      // this.exchange(index, next);
      // this.sink(next);

      let child
      const temp = this.stack[index]
      while(this.kthChild(index, 1) < this.stack.length) {
        child = this.minChild(index)
        if (this.comparator(temp, this.stack[child]) < 0) break;
        this.stack[index] = this.stack[child]
        index = child
      }
      this.stack[index] = temp
    }

    exchange(idx1, idx2) {
      const temp = this.stack[idx1];
      this.stack[idx1] = this.stack[idx2];
      this.stack[idx2] = temp;
    }
  }

  const map = new Map()
  for (const num of nums) map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  const heap = new BinaryHeap(k, (a, b) => a.value - b.value)
  for (const [key, value] of map) heap.insert({ key, value })
  return heap.stack.map(el => el.key)
  */

  /* 
  const map = new Map(), heap = [] // [, ]
  nums.forEach(item => {
    map.has(item) ? 
      map.set(item, map.get(item) + 1) :
      map.set(item, 1)
  })
  
  if (map.size <= k) { // 元素数量不大于 k
    return [...map.keys()]
  }
  
  let i = 0;
  for (let [key, value] of map) {
    if (i < k) { // 取前 k 个建堆
      heap.push(key) // 插入堆
      if (i === k - 1) { // 正好 k 个，开始建堆
        buildHeap(heap, map, k)
      }
    } else if (map.get(heap[0]) < value) {
      heap[0] = key
      heapifyDown(heap, map, k, 0)
    }
    i++
  }
  
  // heap.shift()
  return heap
  
  function buildHeap(heap, map, k) {
    if (k === 1) return // 如果只需要一个频率高的元素，那么此时已经建堆完成
    // 从最后一个非叶子节点开始，自上而下式堆化
    // 最后一个元素索引为 k - 1 节点的父节点的索引 Math.floor((k - 1 - 1) / 2) 开始
    for (let i = Math.floor((k - 2) / 2); i >= 0; i--) { 
      heapifyDown(heap, map, k, i)
    }
  }
  
  function heapifyDown(heap, map, k, i) { // 自上而下
    while(true) { 
      let minIndex = i, left = 2 * i + 1, right = 2 * i + 2
      if (left <= k && map.get(heap[left]) < map.get(heap[i])) {
        minIndex = left
      }
      
      if (right <= k && map.get(heap[right]) < map.get(heap[minIndex])) {
        minIndex = right
      }
      
      if (minIndex !== i) {
        [heap[i], heap[minIndex]] = [heap[minIndex], heap[i]]
        // swap(heap, i, minIndex)
        i = minIndex
      } else {
        break
      }
    }
  }
  */

  
  /**
   * 1. 哈希表 + 排序
   *
   *  实现思路：
   *   先进行数量统计，实现不同元素与元素数量的映射 { el -> count }
   *   map 没法排序，所以会把 el 作为 key，count 作为 value 存到数组中，
   *     然后方便利用 count 进行按照从大到小的顺序排序
   *   排序完成后，再把 key 取出来，再截取前 k 个元素
   *
   */

   /*
   const map = new Map(), arr = [...new Set(nums)]
   nums.forEach(num => {
     map.set(num, map.has(num) ? map.get(num) + 1 : 1)
   })

   return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
   */
};
// @lc code=end

