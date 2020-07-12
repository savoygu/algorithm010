/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  /**
   * 2. bfs 广度优先搜索
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，n 指的是节点的数量。
   *  空间复杂度：O(n)，我们的列表包含所有节点。
   * 
   * 运行结果：
   *  37/37 cases passed (96 ms)
   *  Your runtime beats 72.55 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (40 MB)
   */
  if(!root) return []

  const res = []
  const queue = [root]

  while(queue.length) {
    const currentLevelNodeCount = queue.length
    const sub = []

    for (let i = 0; i < currentLevelNodeCount; i++) {
      const node = queue.shift()
      sub.push(node.val)

      if (node.children) {
        node.children.forEach(child => {
          queue.push(child)
        })
      }
    }

    res.push(sub)
  }
  
  return res
  
  /**
   * 1. dfs 深度优先搜索
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。n 指的是节点的数量
   *  空间复杂度：正常情况 O(logn)，最坏情况 O(n)。运行时在堆栈上的空间。
   * 
   * 运行结果：
   *  37/37 cases passed (88 ms)
   *  Your runtime beats 93.53 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (40.9 MB)
   */
  /*
  if (!root) return []

  const res = []
  dfs(root, 0)
  return res  

  function dfs(node, level) {
    if (!node) return 
    
    if (level >= res.length) {
      res.push([])
    }

    res[level].push(node.val)

    if (node.children) {
      node.children.forEach(child => {
        dfs(child, level + 1)
      })
    }
  }
  */
};
// @lc code=end

