/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  /**
   * 回溯
   * 
   * 实现思路：
   *  从根节点开始，path 路径数组为空，代表状态是还没选择，它面临3个选择
   *   每个子节点又有3个选择，从上往下做出决策，选择就像走过一个点，组成了一条路径
   *   遍历到树的底部就结束遍历，没有可选的数字，此时path的长度和nums一样，它就是全排列之一
   */

  // /*
  const len = nums.length
  const res = []
  if (!len) return res

  const path = []
  const used = new Array(len).fill(false)

  dfs(nums, len, 0, path, used, res)
  
  return res

  function dfs (nums, len, depth, path, used, res) {
    if (depth === len) {
      res.push(path.slice())
      return
    }

    for (let i = 0; i < len; i++) {
      if (used[i]) continue

      path.push(nums[i])
      used[i] = true
      dfs(nums, len, depth + 1, path, used, res)
      used[i] = false
      path.pop()
    }
  }
  // */
  
  /*
  const ans = []
  dfs([])
  return ans
  function dfs (path) {
    // terminator
    if (path.length === nums.length) {
      ans.push(path.slice())
      return
    }
    // process logic
    for (const num of nums) {
      if (path.includes(num)) continue
      path.push(num)
      // drill down
      dfs(path)
      // reverse states
      path.pop()
    }
  }
  */

  // bfs
};
// @lc code=end

