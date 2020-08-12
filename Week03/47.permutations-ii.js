/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

  const len = nums.length
  const res = []
  if (!len) return res

  // 排序（升序或者降序都可以），排序是剪枝的前提
  nums.sort((a, b) => a - b)

  const used = new Array(len).fill(false)
  const path = []

  dfs(nums, len, 0, path, used, res)

  return res

  function dfs (nums, len, depth, path, used, res) {
    if (len === depth) {
      res.push(path.slice())
      return
    }

    for (let i = 0; i < len; i++)  {
      if (used[i]) continue
      
      // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
      // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      
      path.push(nums[i])
      used[i] = true
      dfs(nums, len, depth + 1, path, used, res)
      // 回溯部分的代码，和 dfs 之前的代码是对称的
      used[i] = false
      path.pop()
    }    
  }
};
// @lc code=end

