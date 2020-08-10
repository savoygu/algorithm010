/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  /**
   * 2. 压缩空间
   */  
  const m = word1.length
  const n = word2.length

  const dp = new Array(n + 1).fill(0)

  for (let i = 0; i < m; i++) {
    let lu = dp[0]
    dp[0] = i + 1

    for (let j = 0; j < n; j++) {
      [dp[j + 1], lu] = [Math.min(dp[j] + 1, dp[j + 1] + 1, lu + Number(word1[i] !== word2[j])), dp[j + 1]]
    }
    console.log(dp)
  }
  
  return dp[n]
  /**
   * DP 
   * 
   * 1. 明确 dp 数组含义
   *  dp[i][j]：对于 s1[1..i] 和 s2[1..j]，它们的最小操作次数是 dp[i][j]
   * 2. 定义 base case
   *   第一行，第一列 为当前的下标值，其他值为 0
   * 3. 状态转移方程
   *   word1[i - 1] === word2[j - 1]: dp[i][j] = dp[i - 1][j - 1]
   *   word1[i - 1] !== word2[j - 1]: dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
   * 
   */
  
  /*
  const m = word1.length
  const n = word2.length

  const dp = Array.from({ length: m + 1 }, (_, outIdx) => new Array(n + 1).fill(0).map((inIt, inIdx) => {
    if (outIdx === 0) return inIdx
    if (inIdx === 0) return outIdx
    
    return inIt
  }))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }

  return dp[m][n]
  */
};
// @lc code=end

