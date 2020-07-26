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
   * DP
   * 
   * 实现思路：
   *   1. 如果word1 和 word2 当前字符一样，则不需要做任何操作
   *   2. 如果当前字符不一样，会有三种操作：替换、插入、删除
   * 
   * 复杂度分析：
   *  时间复杂度：O(mn)，m 是 word1 的长度，n 是 word2 的长度
   *  空间复杂度：O(mn)，需要大小为 O(mn) 的 dp 数组来记录状态值。
   * 
   * 运行结果：
   *  1146/1146 cases passed (156 ms)
   *  Your runtime beats 12.14 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (43.1 MB)
   */

  const n1 = word1.length
  const n2 = word2.length

  const dp = Array.from({ length: n1 + 1 }, _ => {
    return Array.from({ length: n2 + 1 }, _ => {
      return 0
    })
  })

  // 第一行
  for (let j = 1; j <= n2; j++) dp[0][j] = dp[0][j - 1] + 1
  // 第一列
  for (let i = 1; i <= n1; i++) dp[i][0] = dp[i - 1][0] + 1

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
    }
  }

  return dp[n1][n2]
};
// @lc code=end

