/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {

  /**
   * 3. 颜色标记法，左 - 右 - 根
   * 
   * 运行结果：
   *  68/68 cases passed (76 ms)
   *  Your runtime beats 24.73 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (33.4 MB)
   */
  const WHITE = 0, GRAY = 1
  const res = []
  const stack = [[WHITE, root]]

  while(stack.length) {
    const [color, node] = stack.pop()
    if (node === null) continue
    if (color === WHITE) {
      stack.push([GRAY, node])
      stack.push([WHITE, node.right])
      stack.push([WHITE, node.left])
    } else {
      res.push(node.val)
    }
  }
  
  return res

  /**
   * 2. 基于栈的遍历
   */

  // 方法二：单条件、while 循环，出栈之前先看看，非空入空无脑入，空了出栈再访问

  /*
  if (!root) return []
  
  const stack = [root]
  const res = []

  while(stack.length) {
    const node = stack[stack.length - 1]

    if (node) {
      stack.push(null)

      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    } else {
      stack.pop()

      const node = stack.pop()
      res.push(node.val)
    }
  }
  
  return res
  */
  
  // 方法一：类似与前序遍历，然后反转， 根 -> 右 -> 左
    // 前序口诀：单条件、while 循环，无脑出栈无脑入

  /*
  if (!root) return []

  const res = []
  const stack = [root]

  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return res.reverse()
  */

  /*
  const res = []
  const stack = []
  let curr = root
  
  while(curr !== null || stack.length > 0) {
    while(curr !== null) {
      res.push(curr.val)
      stack.push(curr.left)
      curr = curr.right
    }
    curr = stack.pop()
  }
  return res.reverse()
  */

  /**
   * 1. 递归，左 - 右 - 根
   */
  
  /*  
  return root ? 
    [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : 
    []
  */
  
  // 利用辅助函数

  /*
  const res =  []
  helper(root, res)
  return res

  function helper(node, res) {
    if (node) {
      if (node.left) helper(node.left, res)
      if (node.right) helper(node.right, res)
      res.push(node.val)
    }
  }
  */
};
// @lc code=end

