/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  /**
   * 主要思想：一旦在一个回文串的两端，对称地加上相同的元素，那么新行程的字符串仍然是一个回文串
   * 
   * 方法：设定两个下标，从左往右扫描。一旦 i 和 j 下标重合，那么 i 下标移动到头部，从头开始扫描，j 下标向后移动一个元素。
   *  当 i 下标和 j 下标指向的元素相同的时候，判断除去这两个相同元素剩下的字符串是否是回文串，如果是，那么最长回文串就是当前形成的新串。如果不是，那么继续往后扫描。
   */

  /**
   * DP
   * 
   * 1. 状态定义 dp[i][j]: 字符串从 i 到 j 是否是回文串，如果是，当前长度是 j - i + 1
   * 2. dp 方程 s[i] === s[j] dp[i][j] = dp[i + 1][j - 1]
   */

  const n = s.length
  if (n <= 1) return s

  const dp = Array.from({ length: n }, (_, oi) => new Array(n).map((_, ii) => oi === ii))
  
  let max = 1, start = 0
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < n - 1 && i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
        continue
      }
      else dp[i][j] = j - i <= 2 || dp[i + 1][j - 1]

      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1
        start = i
      }
    }
  }

  return s.substr(start, max)
   
  /*
  if (s.length <= 1) return s

  let res = 1, l = r = 0

  if (s[0] === s[1]) { res = 2; r = 1 }

  const dp = Array.from({ length: s.length }, _ => new Array(s.length))

  for (let j = 2; j < s.length; j++)  {
    dp[j][j] = true

    for (let i = 0; i < j; i++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])

      const len = j - i + 1
      if (dp[i][j] && len > res) {
        res = len
        l = i
        r = j
      }
    }
  }
  
  return s.slice(l, r + 1)
  */
  
  /**
   * 中心扩散
   */
   
  /*
  if (!s) return s
  
  let res = 1, l = r = 0

    diffusion(k - 1, k + 1) // 奇数：以 k 为中心，向两边扩散
    diffusion(k, k + 1) // 偶数：以 k, k + 1 为中心，向两边扩散
  }

  function diffusion (i, j) {
    while(i >= 0 && j < s.length && s[i] === s[j]) {
      const len = j - i + 1
      if (len > res) {
        [res, l, r] = [len, i, j]
      }
      i--
      j++
    }
  }
  
  return s.slice(l, r + 1)
  */
};
// @lc code=end

