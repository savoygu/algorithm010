/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length
  if (n < 2) return 0

  let buy = Number.MAX_VALUE, profit = 0 // 最小价格 、 最大收益

  for (let price of prices) {
    profit = Math.max(profit, price - buy)
    buy = Math.min(price, buy)
    
    /*
    if (price < buy) {
      buy = price
    } else if (price - buy > profit) {
      profit = price - buy
    }
    */
  }

  return maxProfit
};
// @lc code=end

