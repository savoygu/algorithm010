/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 1. 暴力解法 -> 双重循环
   * 2. 双指针(左右夹逼) -> 移动最小高度指针
   */

  /**
   * 2. 双指针
   * 
   * 复杂度分析：
   *   时间复杂度: O(n)
   *   空间复杂度: O(1)
   *
   * 运行结果：
   *   50/50 cases passed (76 ms)
   *   Your runtime beats 65.85 % of javascript submissions
   *   Your memory usage beats 11.76 % of javascript submissions (36.6 MB)
   */
  let i = 0, j = height.length - 1, maxArea = 0

  while(i < j) {
    if (height[i] > height[j]) {
      maxArea = Math.max(maxArea, height[j] * (j - i))
      j--
    } else {
      maxArea = Math.max(maxArea, height[i] * (j - i))
      i++
    }
  }

  return maxArea


   /**
    * 1. 暴力解法
    * 
    * 复杂度分析： 
    *   时间复杂度: O(n^2)
    *   空间复杂度: O(1)
    * 
    * 运行结果：
    *   50/50 cases passed (1648 ms)
    *   Your runtime beats 5.01 % of javascript submissions
    *   Your memory usage beats 5.88 % of javascript submissions (37 MB)
    */
  // let maxArea = 0

  // for(let i = 0, length = height.length; i < length - 1; i++) {
  //   for (let j = 1; j < length; j++) {
  //     maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i))
  //   }
  // }

  // return maxArea
};
// @lc code=end

