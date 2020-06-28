/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  /**
   * 递归
   * 作者：LeetCode-Solution
   * 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/er-cha-shu-de-zui-jin-gong-gong-zu-xian-by-leetc-2/
   * 
   * 实现思路：
   *  1. 左子树 lson 和 右子树 rson 均包含 p 节点或 q 节点（
   *    如果左子树包含 p 节点，那么右子树只能包含 q 节点，反之亦然）。
   *  2. x 恰好是 p 节点或 q 节点且它的左子树或右子树有一个包含了另一个节点的情况，
   *    如果满足这种情况，说明 x 就是要找的 lca
   *  
   * 复杂度分析：
   *   时间复杂度：O(N)，其中 N 是二叉树的节点数。二叉树的所有节点有且只会被访问一次，因此时间复杂度为 O(N)
   *   空间复杂度：O(N) ，其中 N 是二叉树的节点数。递归调用的栈深度取决于二叉树的高度，
   *    二叉树最坏情况下为一条链，此时高度为 N，因此空间复杂度为 O(N)。
   */
  let ans
  const dfs = (root, p, q) => {
    if (root === null) return false
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }
    return lson || rson || (root.val === p.val || root.val === q.val)
  }
  dfs(root, p, q)
  return ans
};
// @lc code=end

