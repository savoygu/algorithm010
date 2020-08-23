/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/gu-piao-jiao-yi-xi-lie-tan-xin-si-xiang-he-dong-2/
  /**
   * 动态规划
   */
  const n = prices.length
  if (n < 2) return 0
  
  const dp = Array.from({ length: n }, _ => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]) // 昨天没有 或者 昨天买入今天卖出
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1]) // 昨天持有 或者 昨天没有今天买入

  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]) // 买入股票时注意冷冻期
  }

  return dp[n - 1][0]
};
// @lc code=end

