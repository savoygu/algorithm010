/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  // DFS
  if (!root) return []

  const res = []
  dfs(root, 0)
  return res

  function dfs (node, level) {
    if (!node) return
    
    if (res.length <= level) {
      res.push(node.val)
    } else {
      res[level] = Math.max(res[level], node.val)
    }
    
    if (node.left) dfs(node.left, level + 1)
    if (node.right) dfs(node.right, level + 1)
  }


  // BFS
  /*
  if (!root) return []

  const res = []
  const q = [root]

  while(q.length) {
    const rows = []
    for (let i = 0, len = q.length; i < len; i++) {
      const node = q.shift()
      rows.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    
    res.push(Math.max.apply([], rows))
  }

  return res
  */
};
// @lc code=end

