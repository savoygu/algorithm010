/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {

  // 2. BFS 广度优先搜索

  /**
   * 运行结果：
   *  39/39 cases passed (100 ms)
   *  Your runtime beats 10.36 % of javascript submissions
   *  Your memory usage beats 8.33 % of javascript submissions (38.7 MB)
   */

  if (!root) return 0

  const queue = [root, null]
  let depth = 1, node

  while((node = queue.shift()) !== undefined) {
    if (node === null) {
      if (!queue.length) return depth
      depth++
      queue.push(null)
      continue
    }
    
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
   
  /*
  if (!root) return 0

  let depth = 0
  const queue = [root]

  while(queue.length) {
    const currentLevelNodeCount = queue.length

    for(let i = 0; i < currentLevelNodeCount; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  
  return depth
  */

  // 1. 递归
  /**
   * 运行结果：
   *  39/39 cases passed (80 ms)
   *  Your runtime beats 63.76 % of javascript submissions
   *  Your memory usage beats 8.33 % of javascript submissions (38.3 MB)
   */
  /*
  if (!root) return 0

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
  */

};
// @lc code=end

