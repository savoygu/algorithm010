/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  /**
   * 3. 颜色标记
   */
  /*
  const WHITE = 0, GRAY = 1
  const stack = [[WHITE, root]]
  const res = []

  while(stack.length) {
    const [color, node] = stack.pop()
    if (!node) continue

    if (color === WHITE) {
      if (node.children) {
        node.children.reverse().forEach(child => {
          stack.push([WHITE, child])
        })
      }
      stack.push([GRAY, node])
    } else {
      res.push(node.val)
    }
  }

  return res
  */

  /**
   * 2. stack
   * 
   * 运行结果：
   *  37/37 cases passed (80 ms)
   *  Your runtime beats 98.5 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.1 MB)
   */

   if (!root) return []

   const res = []
   const stack = [root]

   while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.children) {
      node.children.reverse().forEach(child => {
        stack.push(child)
      })
    }
   }

   return res

  /**
   * 1. 递归
   */

  /*
  return root
    ? [root.val, ...(root.children || []).reduce((prev, cur) => {
      // prev.push(... preorder(cur))
      // return prev
      return prev.concat(preorder(cur))
    }, [])]
    : [];
  */

  // 辅助函数

  /*
  function helper(node, res) {
    if (!node) return;

    res.push(node.val);

    if (node.children) {
      node.children.forEach((child) => helper(child, res));
    }
  }

  const res = [];
  helper(root, res);
  return res;
  */
};
// @lc code=end
