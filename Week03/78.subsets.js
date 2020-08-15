/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 回溯
  const res = []
  backtrack(nums, [], 0, res)
  return res
  
  function backtrack (nums, path, start, res) {
    res.push(path.slice())
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(nums, path, i + 1, res)
      path.pop()
    }
  }
  
  /*
  const res = [[]]
  // preOrder(nums, 0, [], res)
  // inOrder(nums, 0, [], res)
  // postOrder(nums, 0, [], res)
  newPreOrder(nums, 0, [], res)
  return res

  function newPreOrder(nums, i, stack, res) {
    if (i >= nums.length) return
    stack.push(nums[i])
    res.push(stack.slice())
    newPreOrder(nums, i + 1, stack, res)
    stack.pop()
    newPreOrder(nums, i + 1, stack, res)
  }
  */

  // function postOrder (nums, i, subset, res) {
  //   if (i >= nums.length) return
  //   subset = subset.slice()

  //   postOrder(nums, i + 1, subset, res)
  //   subset.push(nums[i])
  //   postOrder(nums, i + 1, subset, res)
  //   res.push(subset)
  // }

  // function inOrder (nums, i, subset, res) {
  //   if (i >= nums.length) return
  //   subset = subset.slice()

  //   inOrder(nums, i + 1, subset, res)
  //   subset.push(nums[i])
    
  //   res.push(subset)
  //   inOrder(nums, i + 1, subset, res)
  // }

  // function preOrder (nums, i, subset, res) {
  //   if (i >= nums.length) return
  //   subset = subset.slice()
    
  //   res.push(subset)
  //   console.log(`i: ${i}`, subset, res)


  //   preOrder(nums, i + 1, subset, res)
  //   subset.push(nums[i])
  //   preOrder(nums, i + 1, subset, res)
  // }

  // dfs
  /*
  const res = []
  dfs(nums, 0, [], res)
  return res

  function dfs (nums, depth, subset, res) {
    if (depth === nums.length) {
      res.push(subset.slice())
      return
    }

    dfs(nums, depth + 1, subset, res)
    subset.push(nums[depth])
    dfs(nums, depth + 1, subset, res)
    subset.pop()
  }
  */
  
  
  // 逐个枚举，空集的幂集只有空集，每增加一个元素，让之前幂集中的每个集合，追加这个元素，就是新增的子集
  /*
  const res = [[]]

  for (let num of nums) {
    let sub = []
    for (let item of res) {
      sub.push([...item, num])
    }
    res.push(...sub)
  }

  return res
  */

};
// @lc code=end