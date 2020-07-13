/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  /**
   * 1. 最小堆
   * 2. 动态规划
   */

  /**
   * 作者：jyd
   * 链接：https://leetcode-cn.com/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/
   * 
   * 2. 动态规划
   * 
   * 动态规划解析：
   *  状态定义：设动态规划列表 dp，dp[i] 代表第 i + 1 个丑数。
   *  转移方程：
   *   1. 当索引 a, b, c 满足以下条件时， dp[i] 为三种情况的最小值；
   *   2. 每轮计算 dp[i] 后，需要更新索引 a, b, c 的值，使其始终满足方程条件。实现方法：
   *    分别独立判断 dp[i] 和 dp[a]×2, dp[b]×3, dp[c]×5 的大小关系，若相等则将对应索引 a, b, c 加 1。
   *     dp[a]×2>dp[i−1]≥dp[a−1]×2
   *     dp[b]×3>dp[i−1]≥dp[b−1]×3
   *     dp[c]×5>dp[i−1]≥dp[c−1]×5
   *    dp[i]=min(dp[a]×2,dp[b]×3,dp[c]×5)
   *  初始状态： dp[0] = 1，即第一个丑数为 1；
   *  返回值： dp[n-1]，即返回第 n 个丑数。
   * 
   * 复杂度分析：
   *  时间复杂度：O(N) 其中 N = n，动态规划需遍历计算 dp 列表。
   *  空间复杂度：O(N) 长度为 N 的 dp 列表使用 O(N) 的额外空间。
   * 
   * 运行结果：
   *  执行用时：88 ms, 在所有 JavaScript 提交中击败了55.95%的用户
   *  内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
   */
  /*
  const dp = [1]
  let a = 0, b = 0, c = 0

  for (let i = 1; i < n; i++) {
    const n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5
    dp[i] = Math.min(n2, n3, n5)

    if (n2 === dp[i]) a++
    if (n3 === dp[i]) b++
    if (n5 === dp[i]) c++
  }

  return dp[n - 1]
  */

  /**
   * 1. 最小堆
   * 
   * 算法流程：
   *  - 准备最小堆 heap。准备 map，用于记录丑数是否出现过。
   *  - 将 1 放入堆中 
   *  - 从 0 开始，遍历 n 次：
   *    - 取出堆顶元素，放入数组 res 中
   *    - 用堆顶元素依此乘以 2、3、5
   *    - 检查结果是否出现过。若没有出现过，那么放入堆中，更新 map
   * 
   * 复杂度分析：
   *  时间复杂度：O(NlogN)
   *  空间复杂度：O(N)
   * 
   * 运行结果：
   *  执行用时：396 ms, 在所有 JavaScript 提交中击败了5.06%的用户
   *  内存消耗：45.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
   */
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
  
  const heap = new Heap((x, y) => x < y)
  const res = new Array(n)
  const map = {}
  const primes = [2, 3, 5]

  heap.insert(1)
  map[1] = true

  for (let i = 0; i < n; i++) {
    res[i] = heap.extract()
    
    for (const prime of primes) {
      let tmp = res[i] * prime
      if (!map[tmp]) {
        heap.insert(tmp)
        map[tmp] = true
      }
    }
  }
  
  return res[n - 1]
};