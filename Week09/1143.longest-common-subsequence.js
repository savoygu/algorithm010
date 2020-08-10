/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  /**
   * 3. DP 压缩空间（优化）
   * 
   * last: 表示当前 dp[j] (dp[i][j]) 左上角的数，相当于 dp[i - 1][j - 1]，初始化的时候为 0
   * temp: 表示当前 dp[j] (dp[i][j]) 正上方的数，相当于dp[i- 1][j]
   * dp[j - 1]: 表示当前 dp[j] (dp[i][j]) 左边的数，相当于 dp[i][j - 1]
   * 
   * 每一轮结束后，last 的值都向前滚动一个，变成正上方的数，也就是 tmp
   */
  const m = text1.length
  const n = text2.length
  
  const dp = new Array(n + 1).fill(0)
  let tmp = 0
  
  for (let i = 1; i < m + 1; i++) {
    let last = 0
    for (let j = 1; j < n + 1; j++) {
      tmp = dp[j]
      if (text1[i - 1] === text2[j - 1]) {
        dp[j] = last + 1
      } else {
        dp[j] = Math.max(tmp, dp[j - 1])
      }
      last = tmp
    }
  }

  return dp[n]
  
  /**
   * 2. 动态规划
   *  
   *  第一步：明确 dp 数组的含义
   *   dp[i][j]：对于 s1[1..i] 和 s2[1..j]，它们的 LCS 长度是 dp[i][j]
   *  第二步：定义 base case 
   *   让索引为 0 的行和列表示空串，dp[0][..]和dp[..][0] 都应该初始化为 0，这就是 base case 。
   *  第三步：找状态转移方程
   *   状态转移说简单些就是做选择，比如求 s1 和 s2 的最长公共子序列，不妨称这个子序列为 lcs。
   *    那么对于 s1 和 s2 中的每个字符，有什么选择？很简单，两种选择，要么在 lcs 中，要么不在。
   */

  /*
  const m = text1.length
  const n = text2.length

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
  */

  /**
   * 1. 递归
   */

  /*
  function dp (i, j) {
    if (i === - 1 || j === -1) return 0

    if (text1[i] === text2[j]) {
      return dp(i - 1, j - 1) + 1
    } else {
      return Math.max(dp(i - 1, j), dp(i, j - 1))
    }
  }

  return dp(text1.length - 1, text2.length - 1)
  */
};
// @lc code=end

