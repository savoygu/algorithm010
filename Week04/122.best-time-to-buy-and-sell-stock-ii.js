/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
   * 3. 动态规划
   * 
   * 每天都有三种动作：买入(buy)，卖出(sell)，无操作(rest)
   * 
   *  (1). 状态 dp[i][j] 定义：
   *   第一维 i 表示索引为 i 的那一天能获得的最大利润
   *   第二维 j 表示索引为 i 的那一天是持有股票，还是持有现金。
   *    这里 0 表示持有现金(cash)，1 表示持有股票(stock)
   * 
   *  (2). 状态转移方程
   *   Case 1，今天没有股票，有两种可能：
   *    1. 昨天手上就没有股票，今天不做任何操作(rest)
   *    2. 昨天手上有一只股票，今天按照时价卖掉了(sell)，收获了一笔钱
   *   Case 2，今天持有一只股票，有两种可能：
   *    1. 昨天手上就有这只股票，今天不做任何操作(rest)
   *    2. 昨天手上没有股票，今天按照时价买入了一只(buy)，花掉了一笔钱
   *   
   *   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
   *   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
   * 
   */
  /*
  const n = prices.length
  if (n < 2) return 0

  const dp = Array.from({ length: n }, _ => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[n - 1][0]
  */
  /*
  const n = prices.length
  if (n < 2) return 0

  const cash = new Array(n).fill(0)
  const hold = new Array(n).fill(0)

  cash[0] = 0
  hold[0] = -prices[0]

  for (let i = 1; i < n; i++) {
    cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i])
    hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i])
  }

  return cash[n - 1]
  */
  
  /**
   * 峰谷法
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。遍历一次。
   *  空间复杂度：O(1)。需要常量的空间。
   */
  /*
  const n = prices.length
  if (n < 2) return 0
  
  let maxProfit = 0
  let peak = valley = prices[0]
  let i = 0

  while (i < n - 1) {
    while(i < n - 1 && prices[i] >= prices[i + 1]) i++
    valley = prices[i]

    while(i < n - 1 && prices[i] <= prices[i + 1]) i++
    peak = prices[i]
    maxProfit += peak - valley
  }

  return maxProfit
  */

  
  /*
  const n = prices.length
  if (n < 2) return 0
  
  let maxProfit = 0
  let peak = 0, valley = prices[0]

  for (let i = 1; i < n; i++) {
    const price = prices[i]
    if (price < peak) { // 峰值
      maxProfit += peak - valley
      valley = price
      peak = 0
    } else {
      if (price > peak) { // 找最大峰值
        peak = price
      }
      if (price < valley) { // 找最小峰谷
        valley = price
      }
    }
  }

  if (peak > valley) maxProfit += peak - valley
  return maxProfit
  */

  /**
   * 2. 贪心算法
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。遍历一次。
   *  空间复杂度：O(1)。需要常量的空间。
   */
  /*
  let maxProfit = 0
  for(let i = 1, n = prices.length; i < n; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
  */

  /**
   * 1. 暴力搜索
   */
  /*
  const n = prices.length
  if (n < 2) {
    return 0
  }

  let res = 0
  dfs(0, 0, 0)
  return res

  /**
   * 
   * @param {Number} idx 当前是第几天，从0 开始
   * @param {Number} status 0 表示不持有股票，1 表示持有股票
   * @param {Number} profit 当前 收益
   */
  /*
  function dfs (idx, status, profit) {
    if (idx === n) {
      res = Math.max(res, profit)
      return
    }
    dfs(idx + 1, status, profit)

    if (status === 0) {
      dfs(idx + 1, 1, profit - prices[idx])
    } else {
      dfs(idx + 1, 0, profit + prices[idx])
    }
  }
  */
  
};
// @lc code=end
