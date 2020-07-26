/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  //https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/
  
  /**
   * 3. 动态规划
   * 
   * 运行结果：
   *  182/182 cases passed (216 ms)
   *  Your runtime beats 19.12 % of javascript submissions
   *  Your memory usage beats 16.67 % of javascript submissions (41.9 MB)
   */
  const dp = Array.from({ length: amount + 1 }, () => amount + 1)

  dp[0] = 0

  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]

  
  /**
   * 2. 带备忘录的递归
   * 
   * 运行结果：
   *  182/182 cases passed (280 ms)
   *  Your runtime beats 10.79 % of javascript submissions
   *  Your memory usage beats 16.67 % of javascript submissions (48 MB)
   */

  /*
  const memo = new Map()

  function dp (n) {
    if (memo.has(n)) return memo.get(n)
    
    if (n === 0) return 0 
    if (n < 0) return -1
    let res = Number.POSITIVE_INFINITY

    for (let coin of coins) {
      const subProblems = dp(n - coin)
      if (subProblems === -1) continue
      res = Math.min(res, 1 + subProblems)
    }

    memo.set(n, res !== Number.POSITIVE_INFINITY ? res : -1)
    
    return memo.get(n)
  }

  return dp(amount)
  */

  
  /**
   * 1. 暴力递归
   * 
   * 超时
   */

  /*
  function dp (n) {
    if (n === 0) return 0 
    if (n < 0) return -1
    let res = Number.POSITIVE_INFINITY

    for (let coin of coins) {
      const subProblems = dp(n - coin)
      if (subProblems === -1) continue
      res = Math.min(res, 1 + subProblems)
    }

    return res !== Number.POSITIVE_INFINITY ? res : -1
  }

  return dp(amount)
  */
};
// @lc code=end

