/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-by-leetcode-solution/
  // https://leetcode-cn.com/problems/generate-parentheses/solution/hui-su-suan-fa-by-liweiwei1419/

  // 3. 广度优先搜索
  class Node {
    constructor(str, left, right) {
      this.str = str
      this.left = left
      this.right = right
    }
  }

  const q = [new Node('', 0, 0)]

  const res = []
  while(q.length) {
    const node = q.shift()
    if (node.left === n && node.right === n) {
      res.push(node.str)
    }
    if (node.left < n) q.push(new Node(node.str + '(', node.left + 1, node.right))
    if (node.right < node.left) q.push(new Node(node.str + ')', node.left, node.right + 1))
  }
  
  return res
  
  /**
  * 递归
  * 
  * 递归终结条件 recursion terminator
  * 处理当前层逻辑 process current level logic 
  * 下探到下一层 drill down
  * 清理当前层 reverse the current level status if needed
  */
  /**
   * 2. 回溯法（深度优先搜索）
   * 
   * 实现思路：
   *  可以只在序列仍保持有效时才添加 '(' or ')'，而不是每次添加。通过跟踪目前为止放置的左括号和右括号的数目来做到这一点，
   *    如果左括号数量不大于 n，可以放一个左括号，如果右括号的数量小于左括号的数量，可以放一个右括号。
   * 
   * 复杂度分析：
   *  复杂度分析依赖于理解 generateParenthesis(n) 中有多少个元素。事实证明这是第 n 个卡特兰数 1/(n + 1) (2n n)，
   *    这是由 4^n/n*Math.sqrt(n) 渐进界定的
   *   时间复杂度：O(4^n/Math.sqrt(n))，在回溯过程中，每个答案需要O(n)的事件复制到答案数组中
   *   空间复杂度：O(n)，除了答案数组之外，我们所需要的空间取决于递归栈的深度，每一层递归函数需要 O(1) 的空间，
   *    最多递归 2n 层，因此空间复杂度为 O(n)。
   */
  
  /*
  const res = []
  dfs(n, n, "")
  return res

  // 减法
  function dfs (l, r, s) {
    if (l === 0 && r === 0) {
      res.push(s)
      return
    }

    if (l > 0) dfs(l - 1, r, s + '(')
    if (r < l) dfs(l, r - 1, s + ')')
  }
  
  // 加法
  // function dfs (l, r, s) {
  //   if (l === n && r === n) {
  //     res.push(s)
  //     return
  //   }

  //   if (l < n) dfs(l + 1, r, s + '(')
  //   if (r < l) dfs(l, r + 1, s + ')')
  // }
  // */
  
  /**
   * 1. 暴力解法
   * 
   * 实现思路：
   *   生成 2^2n 个 ( 和 ) 字符构成的序列，然后检查每一个是否有效即可
   * 
   * 复杂度分析：
   *   时间复杂度：O(2^2n * n)，对于 2^2n个序列中的每一个，用于建立和验证该序列的复杂度为O(n)。
   *   空间复杂度：O(n) 除了答案数组之外，我们所需要的空间取决于「递归栈的深度」，
   *     每一层递归函数需要 O(1) 的空间，最多递归 2n 层，因此空间复杂度为 O(n)。
   */
  /*
  const res = []
  generateAll("", 2 * n, res)
  return res

  function generateAll(s, max, res) {
    if (s.length === max) {
      if (isValid(s)) {
        res.push(s)
      }
    } else {
      generateAll(s + '(', max, res)
      generateAll(s + ')', max, res)
    }
  }

  function isValid(s) {
    let balance = 0
    for (let c of s) {
      if (c === '(') balance++
      else balance--
      if (balance < 0) return false
    }
    return balance === 0
  }
  */
};
// @lc code=end

