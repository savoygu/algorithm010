/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  /**
   * 1. 递归
   * 2. 中序遍历
   */

  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/validate-binary-search-tree/solution/yan-zheng-er-cha-sou-suo-shu-by-leetcode-solution/

  /**
   * 2. 中序遍历
   *  
   * 实现思路：
   *  基于二叉树的性质，可以进一步指导二叉搜索树中序遍历得到的值构成的序列一定是升序的，这个启示我们在中序遍历时
   *   实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可。如果均大于说明这个序列是升序的，整棵树是二叉搜索树，
   *   否则不是。
   * 
   * 复杂度分析：
   *  时间复杂度 : O(n)，其中 n 为二叉树的节点个数。二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
   *  空间复杂度 : O(n)，其中 n 为二叉树的节点个数。栈最多存储 n 个节点，因此需要额外的 O(n) 的空间。
   * 
   * 运行结果：
   *  75/75 cases passed (112 ms)
   *  Your runtime beats 6.84 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.8 MB)
   *
   */ 
  
  // 递归
  const res = [Number.NEGATIVE_INFINITY]
  return helper(root, res)

  
  function helper (node, res) {
    if (!node) return true
    
    if (!helper(node.left, res)) {
      return false
    }
  
    if (res[res.length - 1] >= node.val) {
      return false
    } else {
      res.push(node.val)
    }

    return helper(node.right, res)
  }
   
  // 非递归
  /*
  if (!root) return true

  const res = []
  const stack = []
  let p = root

  while(p || stack.length) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      const node = stack.pop()
      if (res.length > 0 && res[res.length - 1] >= node.val) {
        return false
      } else {
        res.push(node.val)
      }
      p = node.right
    }
  }

  return true
  */

  /**
   * 1. 递归
   * 
   * 复杂度分析：
   *  时间复杂度: O(n)，其中 n 为二叉树的节点个数。在递归调用的时候二叉树的每个节点最多被访问一次，
   *   因此时间复杂度为 O(n)。
   *  空间复杂度：O(n)，其中 n 为二叉树的节点个数。递归函数在递归过程中需要为每一层递归函数分配栈空间，
   *   所以这里需要额外的空间且该空间取决于递归的深度，即二叉树的高度。最坏情况下二叉树为一条链，树的高度为 n，
   *   递归最深达到 n 层，故最坏情况下空间复杂度为 O(n)。
   * 
   * 运行结果：
   *  75/75 cases passed (88 ms)
   *  Your runtime beats 37.17 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.5 MB)
   */
  /*
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)

  function dfs (node, min, max) {
    if (!node) return true
    if (node.val <= min || node.val >= max) return false

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
  }
  */
 
};
// @lc code=end

