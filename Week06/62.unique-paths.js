/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // columns(m) rows(n)
  /*
  const dp = Array.from({ length: n }, (mItem, nIndex) => {
    return Array.from({ length: m }, (mItem, mIndex) => {
      if (mIndex === 0 || nIndex === 0) return 1
      return 0
    })
  })

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[n - 1][m - 1]
  */

  const cur = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1]
    }
  }
  return cur[n - 1]
};
// @lc code=end

