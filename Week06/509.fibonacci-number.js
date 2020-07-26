/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/

  // Note: 动态规划三要素
  // 重叠子问题、最优子结构、状态转移方程
  
  /**
   * 动态规划
   *  1. 重复子问题
   *  2. 状态定义
   *  3. dp 方程
   */
  
  if (N === 0) return 0

  let a = 0, b = 1
  for (let i = 2; i <= N; i++) {
    c = a + b
    a = b
    b = c
  }
  return b
};
// @lc code=end
