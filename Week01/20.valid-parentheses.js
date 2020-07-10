/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  /**
   * 1. 栈
   * 
   * 实现思路：
   *  如果是左括号 (、[、{ ，则入栈
   *  否则通过哈希表判断括号对应关系，若栈顶出栈括号 ( | [ | { 与当前遍历括号 ) | ] | } 不匹配，则提前返回 false
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)
   *  空间复杂度：O(n)
   */

  /**
   * 运行结果：
   *  76/76 cases passed (80 ms)
   *  Your runtime beats 27.98 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.8 MB)
   */
  const map = new Map()
    .set(')', '(')
    .set(']', '[')
    .set('}', '{')

  const stack = []
  
  for (let c of s) {
    if (map.has(c)) {
      if (stack.pop() !== map.get(c)) {
        return false
      }
    } else {
      stack.push(c)
    }
  }

  return !stack.length

  /**
   * 运行结果：
   *  76/76 cases passed (88 ms)
   *  Your runtime beats 17.34 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.9 MB)
   */
  
  /*
  const stack = []

  for (let c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const top = stack.pop()
      if (
        c === ')' && top !== '(' ||
        c === ']' && top !== '[' ||
        c === '}' && top !== '{'
      ) {
        return false
      }
    }
  }

  return !stack.length
  */
};
// @lc code=end

