/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/

  /**
   * 1. 递归 方式二
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，其中 n 是树中的节点个数。
   *  空间复杂度：O(n)，除去返回的答案需要的 O(n) 空间之外，我们还需要使用 O(n) 的空间存储哈希映射，
   *   以及 O(h)（其中 h 是树的高度）的空间表示递归时栈空间。这里 h < n，所以总空间复杂度为 O(n)。
   * 
   * 运行结果：
   *  203/203 cases passed (84 ms)
   *  Your runtime beats 93.76 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (38.8 MB)
   */
  const preLen = preorder.length
  const inLen = inorder.length
  
  const map = new Map()
  for (let i = 0; i < inLen; i++) {
    map.set(inorder[i], i)
  }
  
  return buildTreeHelper(preorder, 0, preLen - 1, inorder, 0, inLen - 1)
  
  function buildTreeHelper (preorder, preLeft, preRight, inorder, inLeft, inRight) {
    if (preLeft > preRight) {
      return null
    }

    const rootVal = preorder[preLeft]
    const root = new TreeNode(rootVal)
    const index = map.get(rootVal)
    const numL = index - inLeft
    
    root.left = buildTreeHelper(preorder, preLeft + 1, preLeft + numL, inorder, inLeft, index - 1, map)
    root.right = buildTreeHelper(preorder, preLeft + numL + 1, preRight, inorder, index + 1, inRight)
    
    return root
  }
  
  /**
   * 1. 递归 方式一 
   * 
   * 运行结果：
   *  203/203 cases passed (180 ms)
   *  Your runtime beats 28.88 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (111.7 MB)
   */
  
  /*
  if (!preorder.length || !inorder.length) return null
 
  const root = new TreeNode(preorder[0]) // 根节点
  const rootIndex = inorder.indexOf(preorder[0])
 
  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
  root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
  
  return root
  */
};
// @lc code=end

