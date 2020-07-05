/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  /**
   * bfs 广度优先搜索
   * 
   * 实现思路：
   *   只保留当前层节点到队列中，按照队列先入先出依次取出元素放入到子结果数组中，
   *    与此同时把其左右子节点再放入队列中，重复该过程，直到队列为空
   * 
   * 复杂度分析:
   *   时间复杂度: O(n)
   *   空间复杂度: O(n)
   */
   /*
   if (!root) return []
 
   const ans = []
   const queue = [root]
 
   while(queue.length) {
     const currentLevelNodeCount = queue.length // 当前队列中节点的数量
     const subAns = []
     // ans.push([])
     for (let i = 0; i < currentLevelNodeCount; i++) {
       const node = queue.shift()
       subAns.push(node.val)
       // ans[ans.length - 1].push(node.val)
       if (node.left) queue.push(node.left)
       if (node.right) queue.push(node.right)
     }
     ans.push(subAns)
   }
 
   return ans
   */
 
   /**
    * dfs 深度优先搜索
    *   实现思路：
    *     通过 level 来知晓迭代进行到第几层，然后把相应层的节点对应的值放入即可
    * 复杂度分析:
    *   时间复杂度: O(n)
    *   空间复杂度: O(n)，其中 n 为树的最大高度
    */
   const ans = []
   dfs(root, ans, 0)
   return ans
   
   function dfs (root, ans, level) {
     if (!root) return
     
     if (ans.length <= level) ans.push([])
     ans[level].push(root.val)
 
     dfs(root.left, ans, level + 1)
     dfs(root.right, ans, level + 1)
   }
 };
 // @lc code=end
 
 