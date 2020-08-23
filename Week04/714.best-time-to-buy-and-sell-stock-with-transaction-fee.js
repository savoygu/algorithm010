/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const n = prices.length
  if (n < 2) return 0

  const dp = Array.from({ length: n }, _ => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee) // 昨天没有 或者昨天买入今天卖出
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]) // 昨天持有 或者昨天没有今天买入
  }

  return dp[n - 1][0]
};
// @lc code=end

