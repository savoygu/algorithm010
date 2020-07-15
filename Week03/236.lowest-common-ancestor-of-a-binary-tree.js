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
  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/er-cha-shu-de-zui-jin-gong-gong-zu-xian-by-leetc-2/

  /**
   * 2. 存储父节点
   * 
   * 实现思路：
   *  用哈希表存储所有节点的父节点，然后可以利用节点的父节点信息从 p 节点开始不断往上跳，并记录已访问过的节点，
   *   再从 q 节点开始不断往上跳，如果碰到已经访问过的节点，那么这个节点就是我们要找的最近公共祖先。
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)，其中 N 是二叉树的节点数。二叉树的所有节点有且只会被访问一次，从 p 和 q 节点往上跳
   *   经过的祖先节点个数不会超过 N，因此总的时间复杂度为 O(N)。
   *  空间复杂度：O(N)，其中 N 是二叉树的节点数。二叉树最坏情况下为一条链，此时高度为 N，因此空间复杂度为 O(N)，
   *   哈希表存储每个节点的父节点也需要 O(N) 的空间复杂度，因此最后总的空间复杂度为 O(N)。
   * 
   * 运行结果：
   *  31/31 cases passed (88 ms)
   *  Your runtime beats 60.43 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (46.7 MB)
   */

  const parent = new Map()
  const visited = new Set()

  function dfs(root) {
    if (root.left !== null) {
      parent.set(root.left.val, root)
      dfs(root.left)
    }

    if (root.right !== null) {
      parent.set(root.right.val, root)
      dfs(root.right)
    }
  }

  dfs(root)

  while(p && p !== null) {
    visited.add(p.val)
    p = parent.get(p.val)
  }

  while (q && q !== null) {
    if (visited.has(q.val)) {
      return q
    }
    q = parent.get(q.val)
  }
  
  return null
  
  /**
   * 1. 递归
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
   * 
   * 运行结果：
   *  31/31 cases passed (104 ms)
   *  Your runtime beats 17.74 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (44.9 MB)
   */

  /* 
  if (root === p || root === q || root === null) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (!left) return right
  if (!right) return left

  return root
  */
  
  /* 
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
  */
};
// @lc code=end

