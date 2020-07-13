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

  /**
  * 递归
  * 
  * 递归终结条件 recursion terminator
  * 处理当前层逻辑 process current level logic 
  * 下探到下一层 drill down
  * 清理当前层 reverse the current level status if needed
  */

  /**
   * 2. 回溯法
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
   * 
   * 运行结果：
   *  8/8 cases passed (80 ms)
   *  Your runtime beats 29.86 % of javascript submissions
   *  Your memory usage beats 62.5 % of javascript submissions (35.3 MB)
   */

  /*
  const res = []
  _generate(0, 0, n, res, '')
  return res

  function _generate (open, close, n, res, s) {
    if (open === n && close === n) {
      res.push(s)
      return 
    }

    if (open < n) _generate(open + 1, close, n, res, s + '(')
    if (open > close) _generate(open, close + 1, n, res, s + ')')
  }
  */
  
  /**
   * 1. 暴力解法
   * 
   * 实现思路：
   *   生成 2^2n 个 ( 和 ) 字符构成的序列，然后检查每一个是否有效即可
   * 
   * 复杂度分析：
   *   时间复杂度：O(2^2n * n)，对于 2^2n 个序列中的每一个，用于建立和验证该序列的复杂度为 O(n)。
   *   空间复杂度：O(n) 除了答案数组之外，我们所需要的空间取决于「递归栈的深度」，
   *     每一层递归函数需要 O(1) 的空间，最多递归 2n 层，因此空间复杂度为 O(n)。
   * 
   * 运行结果：
   *  8/8 cases passed (84 ms)
   *  Your runtime beats 23.15 % of javascript submissions
   *  Your memory usage beats 12.5 % of javascript submissions (40.4 MB)
   * 
   */

  /*
  const res = []
  _generate('', 2 * n, res)
  return res

  function _generate (s, max, res) {
    if (s.length === max) {
      if (isValid(s)) {
        res.push(s)
      }
    } else {
      _generate(s + '(', max, res)
      _generate(s + ')', max, res)
    }
  }

  function isValid (s) {
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

