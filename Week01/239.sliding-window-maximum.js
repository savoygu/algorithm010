/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // 作者：LeetCode
  // 链接：https://leetcode-cn.com/problems/sliding-window-maximum/solution/hua-dong-chuang-kou-zui-da-zhi-by-leetcode-3/
  
  /**
   * 1. 暴力解法
   * 2. 双向队列
   * 3. 动态规划
   */

  /**
   * 3. 动态规划
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)，我们对长度为 N 的数组处理了 3次。
   *  空间复杂度：O(N)，用于存储长度为 N 的 left 和 right 数组，以及长度为 N - k + 1的输出数组。
   * 
   * 运行结果：
   *  18/18 cases passed (144 ms)
   *  Your runtime beats 48.53 % of javascript submissions
   *  Your memory usage beats 25 % of javascript submissions (47 MB)
   * 
   */
  const n = nums.length
  if (n * k === 0) return []
  if (k === 1) return nums

  const res = []
  let left = new Array(n)
  let right = new Array(n)

  left[0] = nums[0]
  right[n - 1] = nums[n - 1]

  for (let i = 1; i < n; i++) {

    if (i % k === 0) {
      left[i] = nums[i]
    } else {
      left[i] = Math.max(left[i - 1], nums[i])
    }

    j = n - 1 - i

    if ((j + 1) % k === 0) {
      right[j] = nums[j]
    } else {
      right[j] = Math.max(right[j + 1], nums[j])
    }
  }

  for (let i = 0; i < n - k + 1; i++) {
    res.push(Math.max(right[i], left[i + k - 1]))
  }

  return res

  /**
   * 作者：AdamWong
   * 链接：https://leetcode-cn.com/problems/sliding-window-maximum/solution/shuang-xiang-dui-lie-jie-jue-hua-dong-chuang-kou-z/
   * 
   * 2. 双向队列
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)，每个元素被处理两次- 其索引被添加到双向队列中和被双向队列删除。
   *  空间复杂度：O(N)，输出数组使用了 O(N−k+1) 空间，双向队列使用了 O(k)。
   * 
   * 
   * 
   * 运行结果：
   *  18/18 cases passed (124 ms)
   *  Your runtime beats 76.49 % of javascript submissions
   *  Your memory usage beats 25 % of javascript submissions (45.9 MB)
   */
  /*
  const res = []
  const queue = [] // 递减栈
  
  for (let i = 0; i < k; i++) {
    while(queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
  }

  res.push(nums[queue[0]])
  
  for (let i = k; i < nums.length; i++) {
    if (queue.length && queue[0] <= i - k) {
      queue.shift()
    }

    while(queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    res.push(nums[queue[0]])
  }

  return res
  */

  /**
   * 1. 暴力解法
   * 
   * 实现思路：
   *  遍历每个滑动窗口，找到每个窗口的最大值。一共有 N - k + 1 个滑动窗口，每个有 k 个元素，
   *   于是算法的时间复杂度为 O(Nk)，表现较差。
   * 
   * 复杂度分析：
   *  时间复杂度：O(Nk)，其中 N 为数组中元素个数。
   *  空间复杂度：O(N−k+1)，用于输出数组。
   * 
   * 运行结果：
   *  18/18 cases passed (3532 ms)
   *  Your runtime beats 12.75 % of javascript submissions
   *  Your memory usage beats 25 % of javascript submissions (46.1 MB)
   */

  /*
  const n = nums.length
  if (n === 0) return []

  const res = []
   
  for (let i = 0; i < n - k + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j])
    }
    res.push(max)
  }
  
  return res
  */
};
// @lc code=end

