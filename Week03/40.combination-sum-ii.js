/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  const len = candidates.length
  const res = []
  if (!len) return res

  candidates.sort((a, b) => a - b)

  const path = []
  const used = new Array(len).fill(false)
  dfs(candidates, len, target, 0, 0, path, used, res)
  return res

  function dfs (candidates, len, target, sum, begin, path, used, res) {
    if (sum === target) {
      res.push(path.slice())
      return
    }

    for (let i = begin; i < len; i++) {
      if (sum + candidates[i] > target) break
      if (used[i]) continue
      // 剪枝
      if (i > 0 && candidates[i - 1] === candidates[i] && !used[i - 1]) continue
      
      path.push(candidates[i])
      used[i] = true
      dfs(candidates, len, target, sum + candidates[i], i, path, used, res)
      used[i] = false
      path.pop()
    }
    
  }

};
// @lc code=end

