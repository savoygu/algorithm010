/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 抵消（栈方法降维）
  let x = 0
  let m = 0

  for (let num of nums) {
    if (m === 0) x = num
    m += x === num ? 1 : -1
  }

  return x
  
  /**
   * 栈
   *  当元素和栈顶元素相等或者空栈入栈，否则出栈，最后栈中剩下的必然都是大于一半的那个元素
   */
  /*
  const stack = []
  for (let num of nums) {
    const len = stack.length
    if (stack[len - 1] === num || !len) {
      stack.push(num)
    } else {
      stack.pop()
    }
  }
  return stack[0]
  */
  
  /**
   * 复杂度分析：
   *  时间复杂度：O(N)
   *  空间复杂度：O(N)
   */
  /*
  const half = nums.length / 2
  const obj = {}
  
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1
    if (obj[num] > half) return num
  }

  return null
  */
  
  // 排序
  /**
   * 复杂度分析：
   *  时间复杂度：O(NlogN)
   *  空间复杂度：O(1)
   */
  /*
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
  */
};
// @lc code=end

