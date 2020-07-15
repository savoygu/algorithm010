/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  
  /**
   * 2. BFS 广度优先搜索
   * 
   * 实现思路：
   *  一层一层的遍历，如果某一层的某个节点没有子节点了，就返回这个节点的层数即可
   * 
   * 复杂度分析：
   *  时间复杂度：最坏情况下，这是一棵平衡树，我们需要按照树的层次一层一层的访问完所有节点，除去最后一层的节点。
   *   这样访问了 N/2 个节点，因此复杂度是 O(N)。
   *  空间复杂度：和时间复杂度相同，也是 O(N)。
   * 
   * 运行结果：
   *  41/41 cases passed (72 ms)
   *  Your runtime beats 93.11 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (39.4 MB)
   */
  /*
  if (!root) return 0

  const queue = [root]
  let depth = 1

  while(queue.length) {
    const currentLevelNodeCount = queue.length

    for (let i = 0; i < currentLevelNodeCount; i++) {
      const node = queue.shift()
      if (!node.left && !node.right) return depth

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    depth++
  }
  */

  /* 
  if (!root) return 0
   
  const queue = [root, null]
  let depth = 1, node

  while((node = queue.shift()) !== undefined) {
    if (node === null) {
      depth++
      queue.push(null)
      continue
    }
    
    if (!node.left && !node.right) return depth

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  */

  /**
   * DFS 深度优先搜索
   * 
   * 1. 递归
   * 
   * 复杂度分析：
   *  时间复杂度：
   *   访问每个节点一次，时间复杂度为 O(N)，其中 N 是节点个数。
   *  空间复杂度：
   *   最坏情况下，整棵树是非平衡的，例如每个节点都只有一个孩子，递归会调用 N （树的高度）次，因此栈的空间开销是 O(N)。
   *    但在最好情况下，树是完全平衡的，高度只有 log(N)，因此在这种情况下空间复杂度只有 O(log(N)) 。
   * 
   */
  /*
  if (!root) return 0

  const lDepth = minDepth(root.left)
  const rDepth = minDepth(root.right)

  return lDepth && rDepth ? 1 + Math.min(lDepth, rDepth) : 1 + left + right
  */

  /**
   * DFS 深度优先搜索
   * 
   * 2. 迭代
   * 
   * 实现思路：
   *  利用栈将递归解法变成迭代，想法是对于每个节点，按照深度优先搜索的策略访问，同时在访问到叶子节点时，
   *   更新最小深度。
   * 
   * 复杂度分析：
   *  时间复杂度：每个节点恰好被访问一遍，复杂度为 O(N)。
   *  空间复杂度度：最坏情况下我们会在栈中保存整棵树，此时空间复杂度为 O(N)。
   * 
   * 运行结果：
   *  41/41 cases passed (96 ms)
   *  Your runtime beats 15.47 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (40.6 MB)
   * 
   */

  const stack = []
  let minDepth = Number.POSITIVE_INFINITY

  if (!root) return null
  else stack.push([root, 1])

  while(stack.length) {
    const [node, depth] = stack.pop()
    
    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, depth)
    }

    if (node.left) stack.push([node.left, depth + 1])
    if (node.right) stack.push([node.right, depth + 1])
  }
  
  return minDepth
};
// @lc code=end

