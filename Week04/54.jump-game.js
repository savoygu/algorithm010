/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 贪心算法

  /*
  for(let i = 0, j = 0, n = nums.length; i <= j; i++) {
    if (i + nums[i] > j) j = nums[i] + i
    if (j >= n - 1) return true
  }

  return false
  */

  // /*
  for (let i = 0, j = 0, n = nums.length; i < n; i++) {
    if (i > j) break
    if (i + nums[i] > j) j = nums[i] + i
    if (j >= nums.length - 1) return true
  }
  
  return false
  // */

  /*
  for (let i = 0, j = 0, n = nums.length; i < n; i++) {
    if (i <= j) {
      if (i + nums[i] > j) j = nums[i] + i
      if (j >= n - 1) return true
    }
  }

  return false
  */
};
// @lc code=end

