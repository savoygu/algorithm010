/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

  // https://leetcode.com/problems/subsets-ii/discuss/361902/Java-solution-without-sort
  const res = []
  const path = []
  const dontAdd = new Set()
  dfs(nums, 0, path, dontAdd, res)
  return res

  function dfs (nums, i, path, dontAdd, res) {
    if (i >= nums.length) {
      res.push(path.slice())
      return
    }

    // to add
    if (!dontAdd.has(nums[i])) {
      path.push(nums[i])
      dfs(nums, i + 1, path, dontAdd, res)
      path.pop()
    }
    
    // not to add.  when backtracking, mind the case where the element aldready in the set
    let newAdded = false
    if (!dontAdd.has(nums[i])) {
      dontAdd.add(nums[i])
      newAdded = true
    }
    dfs(nums, i + 1, path, dontAdd, res)
    if (newAdded) dontAdd.delete(nums[i])
  }

  /*
  nums.sort((a, b) => a - b)
  
  const res = [[]]
  let prevIdx = 0

  for (let i = 0; i < nums.length; i++) {
    const len = res.length
    for (let j = prevIdx; j < len; j++) {
      res.push([...res[j], nums[i]])
    }
    if (nums[i + 1] === nums[i]) prevIdx = len
    else prevIdx = 0
  }

  return res
  */


  // 回溯 + 剪枝
  /*
  const len = nums.length
  if (!len) return []

  nums.sort((a, b) => a - b)

  const res = []
  backtrack(nums, [], 0, res)
  return res

  function backtrack (nums, path, start, res) {
    res.push(path.slice())
    
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      
      path.push(nums[i])
      backtrack(nums, path, i + 1, res)
      path.pop()
    }
  }
  */

};
// @lc code=end
