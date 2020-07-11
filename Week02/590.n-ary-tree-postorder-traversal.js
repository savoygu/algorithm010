/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
  /**
   * 3. 颜色标记
   */
  // /*
  const WHITE = 0, GRAY = 1
  const stack = [[WHITE, root]]
  const res = []

  while(stack.length) {
    const [color, node] = stack.pop()
    if (!node) continue

    if (color === WHITE) {
      stack.push([GRAY, node])
      if (node.children) {
        node.children.forEach(child => {
          stack.push([WHITE, child])
        })
      }
    } else {
      res.push(node.val)
    }
  }

  return res
  // */

  /**
   * 2. stack
   */

  /**
   * 运行结果：
   *  37/37 cases passed (100 ms)
   *  Your runtime beats 42.11 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (38.9 MB)
   */

  // 方法二：单条件、while 循环，出栈之前先看看，非空入空无脑入，空了出栈再访问
  
  /*
  if (!root) return []

  const stack = [root]
  const res = []

  while(stack.length) {
    const top = stack[stack.length - 1]

    if (top) {
      stack.push(null)

      if (top.children) {
        top.children.reverse().forEach(child => {
          stack.push(child)
        })
      }
    } else {
      stack.pop()

      const node = stack.pop()
      res.push(node.val)
    }
  }

  return res
  */
   
   // 方法一：类似与前序遍历，然后反转， 根 -> 右 -> 左

  /**
  * 运行结果：
   *  37/37 cases passed (80 ms)
   *  Your runtime beats 98.5 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.1 MB)
   */

   /*
   if (!root) return []

   const res = []
   const stack = [root]

   while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.children) {
      node.children.forEach(child => {
        stack.push(child)
      })
    }
   }

   return res.reverse()
   */

  /**
   * 1. 递归
   */

  /*
  return root
    ? [...(root.children || []).reduce((prev, cur) => {
      // prev.push(... postorder(cur))
      // return prev
      return prev.concat(postorder(cur))
    }, []), root.val]
    : [];
  */

  // 辅助函数
  /**
   * 运行结果：
   *  37/37 cases passed (84 ms)
   *  Your runtime beats 95.16 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (39.4 MB)
   * 
   */

  /*
  function helper(node, res) {
    if (!node) return;

    if (node.children) {
      node.children.forEach((child) => helper(child, res));
    }

    res.push(node.val);
  }

  const res = [];
  helper(root, res);
  return res;
  */
};
// @lc code=end

