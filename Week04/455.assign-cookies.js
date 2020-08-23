/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let gi = 0, si = 0
  while(gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      gi++
    }
    si++
  }

  return gi
};
// @lc code=end