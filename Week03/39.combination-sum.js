/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 做加法
  const len = candidates.length
  const res = []
  if (!len) return res
  
  // 排序是为了提前终止搜索
  candidates.sort((a, b) => a - b)

  const path = []
  dfs(candidates, len, target, 0, 0, path, res)
  return res

  function dfs (candidates, len, target, sum, begin, path, res) {
    if (sum === target) {
      res.push(path.slice())
      return
    }

    for (let i = begin; i < len; i++) {
       // 在数组有序的前提下，剪枝
      if (sum + candidates[i] > target) break

      path.push(candidates[i])
      dfs(candidates, len, target, sum + candidates[i], i, path, res)
      path.pop()
    }
  }
  
  // 做减法
  /*
  const len = candidates.length
  const res = []
  if (!len) return res

  candidates.sort((a, b) => a - b)

  const path = []
  const used = new Array(len).fill(false)

  dfs(candidates, len, target, 0, path, res)
  return res

  function dfs (candidates, len, residue, begin, path, res) {
    if (residue === 0) {
      res.push(path.slice())
      return
    }

    for (let i = begin; i < len; i++) {
      if (residue - candidates[i] < 0) break

      path.push(candidates[i])
      dfs(candidates, len, residue - candidates[i], i, path, res)
      path.pop()
    }
  }
  
  */
};
// @lc code=end

