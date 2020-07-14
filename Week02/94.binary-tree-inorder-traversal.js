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
var inorderTraversal = function(root) {
  // 左 - 根 - 右

  /**
   * 3. 颜色标记
   * 
   * 核心思想：
   *  - 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
   *  - 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
   *  - 如果遇到的节点为灰色，则将节点的值输出。
   */

  /*
  const WHITE = 0, GRAY = 1;
  const res = []
  const stack = [[WHITE, root]]

    while (stack.length) {
    const [color, node] = stack.pop()
    if (node === null) continue
    if (color === WHITE) {
      // if (node.right !== null) stack.push([WHITE, node.right])
      stack.push([WHITE, node.right])
      stack.push([GRAY, node])
      // if (node.left !== null) stack.push([WHITE, node.left])
      stack.push([WHITE, node.left])
    } else {
      res.push(node.val)
    }
  }
  return res
  */

  /**
   * 2. 基于栈的遍历 
   * 
   * 实现思路：
   *  每到一个节点 A，因为根的访问在中间，将 A 入栈。然后遍历左子树，接着访问 A，最后遍历右子树。
   *  在访问完 A 后，A 就可以出栈了。因为 A 和其左子树都已经访问完成。
   * 
   * 复杂度分析
   *   - 时间复杂度：O(n)。
   *   - 空间复杂度：O(n)。
   */

  // 双条件，while 循环，移动指针先开路，非空入栈先往左，空了出栈再往右
  const res = []
  if (!root) return res

  const stack = []
  let p = root
  while(p || stack.length) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      const node = stack.pop()
      res.push(node.val)
      p = node.right
    }
  }
  return res


  /*
  const res = []
  const stack = []
  let curr = root

  while(curr !== null || stack.length > 0) {
    while(curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right;
  }

  return res
  */

  /**
   * 1. 递归：
   *   左-根-右
   */
  /*
  return root ?
    [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] :
    []
  */

  /*
  return root ? 
    (root.left ? inorderTraversal(root.left) : []).concat(root.val, root.right ? inorderTraversal(root.right) : []) :
    []
  */

  /**
   * 利用辅助函数实现
   * 
   * 复杂度分析
   *   - 时间复杂度：O(n)。递归函数 T(n) = 2⋅T(n/2)+1。
   *   - 空间复杂度：最坏情况下需要空间O(n)，平均情况为O(logn)
   */
  // const res = []
  // helper(root, res)
  // return res;

  // function helper(root, res) {
  //   if (root !== null) {
  //     if (root.left !== null) helper(root.left, res)
  //     res.push(root.val)
  //     if (root.right !== null) helper(root.right, res)
  //   }
  // }
};