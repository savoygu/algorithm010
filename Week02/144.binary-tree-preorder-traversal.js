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
var preorderTraversal = function(root) {
  /**
   * 3. 颜色标记法
   * 
   * 核心思想：
   *  - 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
   *  - 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
   *  - 如果遇到的节点为灰色，则将节点的值输出。
   */
  // const WHITE = 0, GRAY = 1
  // const res = []
  // const stack = [[WHITE, root]]

  // while(stack.length) {
  //   const [color, node] = stack.pop()
  //   if (node === null) continue
  //   if (color === WHITE) {
  //     stack.push([WHITE, node.right])
  //     stack.push([WHITE, node.left])
  //     stack.push([GRAY, node])
  //   } else {
  //     res.push(node.val)
  //   }
  // }
  // return res

  /**
   * 2. 基于栈的遍历
   * 
   * 递归思路：先树根，然后左子树，然后右子树。每颗子树递归。
   *   在迭代算法中，思路演变成，每到一个节点 A，就应该立即访问它。
   *   因为，每棵子树都先访问其根节点。对节点的左右子树来说，也一定是先访问根。
   *   在 A 的两棵子树中，遍历完左子树后，再遍历右子树。
   *   因此，在访问完根节点后，遍历左子树前，要将右子树压入栈。
   * 
   * 复杂度分析
   *  时间复杂度：O(n)。
   *  空间复杂度：O(n)。
   */
  
  // 单条件、while，无脑出栈无脑入
  /*
  if (!root) return []

  const res = []
  const stack = [root]

  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.right) { stack.push(node.right) }
    if (node.left) { stack.push(node.left) }
  }

  return res
  */

  /*
  const res = []
  const stack = []
  let curr = root

  while(curr !== null || stack.length > 0) {
    while (curr !== null) {
      res.push(curr.val)
      stack.push(curr.right)
      curr = curr.left
    }
    curr = stack.pop()
  }
  return res
  */

  /**
   * 1. 递归
   *   根-左-右
   */

  // return root ? 
  //   [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : 
  //   []

  /**
   * 辅助函数
   * 
   * 复杂度分析
   *  时间复杂度：O(n)。递归函数 T(n) = 2⋅T(n/2)+1。
   *  空间复杂度：最坏情况下需要空间O(n)，平均情况为O(logn)
   */

  // const res = []
  // helper(root, res)
  // return res;

  // function helper(root, res) {
  //   if (root) {
  //     res.push(root.val)
  //     // helper(root.left, res)
  //     // helper(root.right, res)
  //     if (root.left) helper(root.left, res)
  //     if (root.right)  helper(root.right, res)
  //   }
  //   return res
  // }
};